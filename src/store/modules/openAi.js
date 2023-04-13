import { getDatabase, ref, set, get } from "firebase/database";

const state = {
  dataList: {},
  questionThreadList: {},
  currentQuestionThread: '',
};

const getters = {
};

const actions = {
  // 在此定義與產品相關的異步操作，例如從 API 獲取產品數據
  writeDataToFirebase({ commit }, { questionThread, createdTime, payload }) {
    // 取得 Firebase Realtime Database 的參考
    const db = getDatabase();
    console.log(questionThread)
    const openAiRef = ref(db, `${questionThread}/${createdTime}`);

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
  getDataFromFirebase({ commit }, questionThread) {
    // 取得 Firebase Realtime Database 的參考
    const db = getDatabase();
    const questionThreadRef = ref(db, questionThread);

    // 寫入資料到 Firebase Realtime Database
    get(questionThreadRef)
      .then((snapshot) => {
        console.log("資料取得成功");
        commit("SET_DATA_LIST", snapshot.val())
        commit("SET_CURRENT_QUESTION_THREAD", questionThread)
      })
      .catch((error) => {
        console.error("資料取得失敗", error);
      });
  },
  getQuestionThreadList({ commit }) {
    // 取得 Firebase Realtime Database 的參考
    const db = getDatabase();
    const Allref = ref(db);

    // 寫入資料到 Firebase Realtime Database
    get(Allref)
      .then((snapshot) => {
        console.log("資料取得成功");
        commit("SET_QUESTION_THREAD_LIST", Object.keys(snapshot.val()))
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
  SET_QUESTION_THREAD_LIST(state, data) {
    state.questionThreadList = data;
  },
  SET_CURRENT_QUESTION_THREAD(state, data) {
    state.currentQuestionThread = data;
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
