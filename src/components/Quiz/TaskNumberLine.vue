<template>
  <div class="task">
    <p class="question">{{ question.question }}</p>


    <div class="hint">
      <img :src="question.hints[1]" alt="" class="hint__img">
    </div>

    <div class="numbers">
      <button
          class="number__item"
          v-for="(num, index) in question.numbers"
          :key="index"
          @click="emit('answer', num)"
      >
        {{ num }}
      </button>
    </div>
  </div>
</template>

<script setup>
const { question } = defineProps({ question: Object });
const emit = defineEmits(["answer"]);
</script>

<style scoped>
.task{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.number__item{
  width: 40px;
  height: 40px;
}

.hint{
  margin-bottom: 40px;
}

.numbers {
  display: flex;
  gap: 10px;
}

.answers {
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 50px;
  background: rgba(242, 243, 243, 0.2);

  margin-bottom: 20px;
}

.hint__img{
  width: 200px;
  height: 200px;
}

.question{
  font-family: PT Serif;
  font-size: 20px;
  line-height: 26.5px;
  text-align: center;
  color: #fff;

  margin-bottom: 40px;
}
</style>
