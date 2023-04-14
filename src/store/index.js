// 引入 Vuex 和 Vue
import { createStore } from 'vuex';
import commonActions from './actions';
import openAiModule from './modules/openAi';


// 定义状态对象
const state = {

};

// 定义 getters 对象
const getters = {
};

// 定义 actions 对象
const actions = {
  ...commonActions,
};

// 定义 mutations 对象
const mutations = {
};

// 创建 Vuex store 实例
export default createStore({
  state,
  getters,
  actions,
  mutations,
  modules: {
    openAi: openAiModule
  },
});
