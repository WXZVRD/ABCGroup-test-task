<template>
  <button class="button" :disabled="props.isActive">
    {{ props.title }}
  </button>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>
.button{
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease;
  cursor: pointer;

  padding: 13px 17px;

  background: none;
  border-radius: 20px;
  border: 1px solid #fff;

  max-width: 190px;
  width: 100%;

  font-family: Merriweather;
  font-size: 18px;
  line-height: 17.6px;
  text-align: center;
  color: #fff;
  letter-spacing: 1px;
  font-weight: 600;
}

.button:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: #ddd;
}

.button:active {
  background: rgba(255, 255, 255, 0.4);
  border-color: #bbb;
}

.button:disabled {
  cursor: not-allowed;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: none;
  opacity: 0.5;
}
</style>