<script setup>
import { computed } from 'vue';

const props = defineProps({
  value: { type: Number, required: true },
  max: { type: Number, required: true }
});

const progress = computed(() => `${(props.value / props.max) * 100}%`);
</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar__fill" :style="{ width: progress }"></div>
  </div>
</template>

<style scoped>
.progress-bar {
  max-width: 1300px;
  width: 100%;
  height: 10px;
  background: #333;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}

.progress-bar__fill {
  height: 100%;
  background: #4caf50;
  transition: width 0.3s ease-in-out;
}
</style>
