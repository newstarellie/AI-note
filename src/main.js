// 引入 Vue 和 App 组件
import { createApp } from 'vue';
import App from './App.vue';

// 引入路由和状态管理
import router from './router/index';
import store from './store';

// 引入 vue-i18n
import { createI18n } from 'vue-i18n';
// import messages from './i18n/messages';

// 引入 vue-select
import VueSelect from 'vue-select';

import firebase from './plugins/firebase'

// 引入全局样式
import './assets/styles/main.scss';

// 创建 i18n 实例
const i18n = createI18n({
    locale: 'en', // 默认语言
    // messages,
});

// 创建 Vue 实例
const app = createApp(App);

// 使用相关插件
app.use(router);
app.use(store);
app.use(i18n);
app.use(firebase);
app.component('VueSelect', VueSelect);

// 挂载到 #app 元素
app.mount('#app');
