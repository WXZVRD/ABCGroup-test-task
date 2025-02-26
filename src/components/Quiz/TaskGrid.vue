<template>
  <div class="task">
    <p class="question">{{ question.question }}</p>

    <div class="grid">
      <div
          v-for="(color, index) in question.gridColors"
          :key="index"
          class="color-box"
          :class="{ selected: selectedColor === color }"
          :style="{ backgroundColor: color }"
          @click="() => handleClick(color)"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const { question } = defineProps({ question: Object });
const emit = defineEmits(["answer"]);

const selectedColor = ref(null);

const handleClick = (color) => {
  selectedColor.value = color;
  emit('answer', color);
};
</script>

<style scoped>
.task {
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 50px);
  gap: 10px;
}

.color-box {
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: 1px solid #000;
  transition: border 0.2s ease-in-out;
}

.color-box.selected {
  border: 3px solid yellow;
}

.question {
  font-family: PT Serif;
  font-size: 20px;
  line-height: 26.5px;
  text-align: center;
  color: #fff;
  margin-bottom: 40px;
}
</style>
