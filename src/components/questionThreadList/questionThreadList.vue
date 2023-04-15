<template>
  <ul class="questionThread" v-for="questionThread in questionThreadList" :key="questionThread">
    <li>
      <QuestionThreadLink :question-thread="questionThread" v-if="!getShowInput(questionThread)"
        @click="setCurrentQuestionThread(questionThread)" />

      <div class="buttonList">
        <QuestionThreadDeleteButton :question-thread="questionThread" @click="deleteThisQuestionThread(questionThread)" />
        <QuestionThreadEditButton :question-thread="questionThread" @click="showInput(questionThread)" />
        <i @click="closeInput(questionThread)" class="fas fa-window-close"></i>
        <i class="fas fa-check"></i>
      </div>

      <QuestionThreadInput v-if="getShowInput(questionThread)" :question-thread="questionThread"
        @updateQuestionThread="updateQuestionThread" :showInput="showInput" />
    </li>
  </ul>
</template>
<script>
import { mapState, mapActions } from "vuex";
import QuestionThreadLink from './QuestionThreadLink.vue';
import QuestionThreadDeleteButton from './QuestionThreadDeleteButton.vue';
import QuestionThreadEditButton from './QuestionThreadEditButton.vue';
import QuestionThreadInput from './QuestionThreadInput.vue';

export default {
  name: 'questionThreadList',
  components: {
    QuestionThreadLink,
    QuestionThreadDeleteButton,
    QuestionThreadEditButton,
    QuestionThreadInput,
  },
  data() {
    return {
      inputName: '',
      showInputMap: new Map(),
    }
  },
  computed: {
    ...mapState("openAi", ["questionThreadList"]),
    ...mapState("openAi", ["dataList"])
  },
  methods: {
    ...mapActions("openAi", ["deleteThisQuestionThread", "changeNameOfThisQuestionThread"]),
    setCurrentQuestionThread(questionThread) {
      this.currentQuestionThread = questionThread;
      this.$store.dispatch("openAi/getDataFromFirebase", this.currentQuestionThread);
    },
    showInput(questionThread) {
      this.showInputMap.set(questionThread, true);
      // close input of other question threads
      for (const [key, value] of this.showInputMap) {
        if (key !== questionThread && value) {
          this.showInputMap.set(key, false);
        }
      }
    },
    closeInput(questionThread) {
      this.showInputMap.set(questionThread, false);

    },
    getShowInput(questionThread) {
      return this.showInputMap.get(questionThread) || false;
    },
    updateQuestionThread(oldQuestionThread, newQuestionThread) {
      this.showInputMap.set(newQuestionThread, false);
      if (oldQuestionThread !== newQuestionThread) {
        console.log(oldQuestionThread, newQuestionThread);
        this.$store.dispatch('openAi/changeNameOfThisQuestionThread', {
          oldQuestionThread: oldQuestionThread,
          newQuestionThread: newQuestionThread
        });
      }
    }
  },
  updated() {
    document.title = this.currentQuestionThread || 'Create New Chat';
  },
  created() {
    this.$store.dispatch("openAi/getQuestionThreadList");
  }
};
</script>
<style scoped lang="scss">
.questionThread {
  top: 20px;
  left: 20px;
  background-color: white;
  position: relative;
}

.buttonList {
  // position: absolute;
  right: 0;
  top: 0px;
  display: flex;
  justify-content: end;

  i {

    font-size: 30px;

    &:hover {
      color: gray;
      cursor: pointer;
    }
  }
}
</style>