<template>
  <div class="task">
    <p class="question">{{ question }}</p>

    <component
        :is="getComponentType"
        :answers="answers"
        :hints="hints"
        :gridColors="gridColors"
        @answerSelected="emitAnswer"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import MultipleChoice from "../components/MultipleChoice.vue";
import GridSelection from "../components/GridSelection.vue";
import WithHints from "../components/WithHints.vue";

const props = defineProps({
  type: String,
  question: String,
  answers: Array,
  hints: Array,
  gridColors: Array
});

const emit = defineEmits(["answerSelected"]);

const getComponentType = computed(() => {
  switch (props.type) {
    case "multiple-choice":
      return MultipleChoice;
    case "grid":
      return GridSelection;
    case "with-hints":
      return WithHints;
    default:
      return null;
  }
});

const emitAnswer = (answer) => {
  emit("answerSelected", answer);
};
</script>

<style scoped>
.task {
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  max-width: 600px;
}
</style>
