<template>
  <div class="task">
    <p class="question">{{ question.question }}</p>

    <div v-if="question.hints" class="hint">
      <img :src="question.hints[1]" alt="" class="hint__img">
    </div>

    <div v-if="question.hints">
      <p v-for="(hint, index) in question.hints" :key="index">{{ hint }}</p>
      <img v-if="question.hints.some(h => h.includes('.png'))" :src="question.hints.find(h => h.includes('.png'))" />
    </div>

    <div
        class="answers"
        v-for="(answer, index) in question.answers"
        :key="index"
        @click="emit('answer', answer.text)"
    >
      <input :id="index" type="radio" class="answer__item">
      <label :for="index" class="answer__item-title">{{ answer.text }}</label>
    </div>
  </div>
</template>

<script setup>
const { question } = defineProps({ question: Object });
const emit = defineEmits(["answer"]);
</script>

<style scoped>
.hint__img{
  width: 240px;
  height: 180px;
}
.task{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.answers {
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 50px;
  background: rgba(242, 243, 243, 0.2);
  min-height: 50px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.question{
  font-family: PT Serif;
  font-size: 20px;
  line-height: 26.5px;
  text-align: center;
  color: #fff;

  margin-bottom: 40px;
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

.answer__item input:checked + label {
  background: white;
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

.answer__item-title{
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

@media (max-width: 768px) {
  .answer__item{
    margin: 0 10px;
  }

  .answer__item-title{
    padding: 0;
    font-size: 14px;
  }
}
</style>
