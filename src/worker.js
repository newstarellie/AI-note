// worker.js

// 接收主线程发送的消息
// 监听主线程发送的消息
self.onmessage = function (event) {
    // 从消息中获取数据
    const data = event.data;
    //   console.log(data);
    if (data === "startAlarm") {
        // 处理鬧鐘代碼
        console.log(`接收到的数据：${data}`);
        // self.postMessage("Hello from Web Worker!");
    }

    // 向主线程发送消息
    self.postMessage("Hello from Web Worker!");
};

console.log("Worker is running");
