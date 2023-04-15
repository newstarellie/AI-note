import { getDatabase, ref, set, get, remove } from "firebase/database";

const state = {
  dataList: {},
  questionThreadList: {},
  currentQuestionThread: "",
};

const getters = {
  newPageStatus: (state) => !state.currentQuestionThread,
};

const actions = {
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
        commit("SET_CURRENT_QUESTION_THREAD", questionThread);
        this.dispatch("openAi/getDataFromFirebase", questionThread);
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
    const allRef = ref(db);

    // 寫入資料到 Firebase Realtime Database
    get(allRef)
      .then((snapshot) => {
        console.log("資料取得成功");
        commit("SET_QUESTION_THREAD_LIST", Object.keys(snapshot.val()));
        console.log(Object.keys(snapshot.val()))
      })
      .catch((error) => {
        console.error("資料取得失敗", error);
      });
  },
  deleteThisQuestionThread({ dispatch }, questionThread) {
    console.log(questionThread)
    const db = getDatabase();
    const rootRef = ref(db, questionThread);
    set(rootRef, null)
      .then(() => {
        console.log("這個資料庫已清空");
        dispatch("getQuestionThreadList");

      })
      .catch((error) => {
        console.error("清除資料庫時出錯", error);
      });
  },
  changeNameOfThisQuestionThread({ dispatch }, { oldQuestionThread, newQuestionThread }) {
    console.log(oldQuestionThread, newQuestionThread);
    const db = getDatabase();
    const oldQuestionThreadRef = ref(db, oldQuestionThread);
    const newQuestionThreadRef = ref(db, newQuestionThread);

    // 取得原本的資料
    get(oldQuestionThreadRef).then((snapshot) => {
      const data = snapshot.val();

      // 在新的路徑下覆蓋原本的資料
      set(newQuestionThreadRef, data).then(() => {
        console.log("資料已成功更名");
        // 刪除原本的路徑
        remove(oldQuestionThreadRef).then(() => {
          console.log("原本的路徑已成功刪除");
          dispatch("getQuestionThreadList");
        }).catch((error) => {
          console.error("刪除原本的路徑時出錯", error);
        });
      }).catch((error) => {
        console.error("更改資料時出錯", error);
      });
    }).catch((error) => {
      console.error("取得原本的資料時出錯", error);
    });
  },
  clearAllQuestionThread() {
    const db = getDatabase();
    const rootRef = ref(db);
    set(rootRef, null)
      .then(() => {
        console.log("資料庫已清空");
        this.$store.dispatch("openAi/getDataFromFirebase", state.currentQuestionThread);
        this.$store.dispatch("openAi/getQuestionThreadList");


      })
      .catch((error) => {
        console.error("清除資料庫時出錯", error);
      });
  }
};

const mutations = {
  // todo 改名字
  SET_DATA_LIST(state, data) {
    console.log(data)
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
