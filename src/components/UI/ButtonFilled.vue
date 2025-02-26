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

  background: #FFC700;
  border-radius: 20px;
  border: 0;

  max-width: 190px;
  width: 100%;

  font-family: Merriweather;
  font-size: 18px;
  line-height: 17.6px;
  text-align: center;
  color: #000;
  letter-spacing: 1px;
  font-weight: 600;

}

.button:active{
  background: #DADADA;
  box-shadow: 0px 4px 10px 0px #00000040 inset;
  color: #8E8E8E;
}

.button:hover {
  background: #C4C4C4;
  box-shadow: 0px 4px 15px 0px #00000060 inset;
}

.button:disabled {
  background: #DADADA;
  box-shadow: 0px 4px 10px 0px #00000040 inset;
  color: #8E8E8E;
  cursor: default;
  pointer-events: none;
}
</style>