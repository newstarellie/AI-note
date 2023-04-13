<template>
  <div>
    <h1>WebSocket Test</h1>
    <input type="text" v-model="inputText" />
    <button @click="sendMessage">Send Message</button>
    <ul>
      <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WebSocketTest',
  data() {
    return {
      inputText: '',
      messages: []
    };
  },
  mounted() {
    this.connectWebSocket();
  },
  methods: {
    connectWebSocket() {
      const url = 'ws://localhost:8080/';
      this.socket = new WebSocket(url);

      this.socket.onopen = () => {
        console.log('Connected to WebSocket server');
      };

      this.socket.onclose = () => {
        console.log('Disconnected from WebSocket server');
      };

      this.socket.onmessage = event => {
        const message = event.data;
        this.messages.push(message);
      };
    },
    sendMessage() {
      if (this.inputText) {
        this.socket.send(this.inputText);
        this.inputText = '';
      }
    }
  },
  beforeUnmount() {
    this.socket.close();
  }
};
</script>
