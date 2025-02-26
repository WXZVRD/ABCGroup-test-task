<template>
  <div class="task">
    <p class="question">{{ question.question }}</p>

    <div class="answers">
      <div
          class="current__answer"
          v-for="(answer, index) in question.answers"
          :key="index"
          @click="emit('answer', answer.text)"
      >
        <input :id="index"  type="radio" class="answer__item">
        <label :id="index"  for="answer__item" class="answer__item-title">{{ answer.text }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
const { question } = defineProps({ question: Object });
const emit = defineEmits(["answer"]);
</script>

<style scoped>
.answers {
  display: flex;
  gap: 10px;
  flex-direction: column;
}
.question{
  font-family: PT Serif;
  font-size: 20px;
  line-height: 26.5px;
  text-align: center;
  color: #fff;

  margin-bottom: 40px;
}
.current__answer {
  width: 100%;
  min-height: 50px;
  background: rgba(242, 243, 243, 0.2);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.answer__item {
  position: relative;
  width: 24px;
  height: 24px;
  margin: 0 40px;
  border-radius: 50%;
  border: 2px solid #fff;
  background: none;
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s;
}
.answer__item input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.answer__item label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s, border 0.3s;
}
.answer__item label::after {
  content: "";
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s;
}
.answer__item input:checked + label::after {
  opacity: 1;
}
.answer__item-title {
  font-family: PT Serif;
  font-size: 18px;
  line-height: 1.4;
  color: #FFFFFF;
  display: block;
  max-width: 100%;
  word-wrap: break-word;
  white-space: normal;
  padding: 5px 10px;
}
.task{
  max-width: 600px;
  width: 100%;
}
</style>
