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
import socket from '@/websocket';

export default {
  name: 'WebSocketTest',
  data() {
    return {
      inputText: '',
      messages: [],
      connected: false
    };
  },
  mounted() {
    socket.on("error", (error) => {
      console.error(error);
    });
    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
      this.connected = true;
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
      this.connected = false;
    });

    socket.on('message', (message) => {
      this.messages.push(message);
    });
  },
  methods: {
    sendMessage() {
      console.log(this.inputText)
      if (this.inputText) {
        console.log(socket)
        socket.emit('message', this.inputText);
        this.inputText = '';
      }
    }
  }
};
</script>
