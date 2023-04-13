import { getDatabase, ref, set, get } from "firebase/database";

const state = {
  dataList: {},
};

const getters = {
};

const actions = {
  // 在此定義與產品相關的異步操作，例如從 API 獲取產品數據
  writeDataToFirebase({ commit }, { createdTime, payload }) {
    // 取得 Firebase Realtime Database 的參考
    const db = getDatabase();
    const openAiRef = ref(db, `openAi/${createdTime}`);

    // 寫入資料到 Firebase Realtime Database
    set(openAiRef, payload)
      .then(() => {
        console.log("資料寫入成功");
        // 更新 Vuex state
        commit("setChineseGrade", payload);
      })
      .catch((error) => {
        console.error("資料寫入失敗", error);
      });
  },
  getDataFromFirebase({ commit }) {
    // 取得 Firebase Realtime Database 的參考
    const db = getDatabase();
    const openAiRef = ref(db, `openAi`);

    // 寫入資料到 Firebase Realtime Database
    get(openAiRef)
      .then((snapshot) => {
        console.log("資料取得成功");
        commit("SET_DATA_LIST", snapshot.val())
      })
      .catch((error) => {
        console.error("資料取得失敗", error);
      });
  }
};

const mutations = {
  // 在此定義更新 state 的同步操作
  setChineseGrade(state, setChineseGrade) {
    state.setChineseGrade = setChineseGrade;
  },
  SET_DATA_LIST(state, data) {
    state.dataList = data;
  },
};

export default {
  // 這是啥? 
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
