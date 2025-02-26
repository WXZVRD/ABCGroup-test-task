<template>
  <div class="loader">
    <h2 class="loader__title">Обработка <br> результатов</h2>
    <div class="dot__wrapper">
      <div v-for="(dot, index) in dots" :key="index" class="dot" :class="dot.className"></div>
    </div>
    <p class="loader__text">Определение стиля мышления...</p>
  </div>
</template>

<script setup>
const dots = [
  { className: "a" },
  { className: "b" },
  { className: "c" },
  { className: "d" },
  { className: "e" },
  { className: "f" },
  { className: "g" },
  { className: "h" },
];
</script>

<style scoped>
body {
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loader__title{
  font-family: PT Serif;
  font-size: 23px;
  line-height: 30.47px;
  text-align: center;
  color: #fff;
  margin-bottom: 40px;
}
.loader__text{
  font-family: PT Serif;
  font-size: 14px;
  line-height: 18.55px;
  color: #fff;
  margin-top: 40px;
}
.dot__wrapper{
  position: relative;
  height: 80px;
  width: 80px;
}

.dot {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  animation: loader 2s linear infinite;
}

.a { left: 35px; }
.b { right: 10px; top: 10px; animation-delay: 0.2s; }
.c { top: 35px; right: 0; animation-delay: 0.4s; }
.d { right: 10px; bottom: 10px; animation-delay: 0.6s; }
.e { left: 35px; bottom: 0; animation-delay: 0.8s; }
.f { left: 10px; bottom: 10px; animation-delay: 1s; }
.g { top: 35px; left: 0; animation-delay: 1.2s; }
.h { left: 10px; top: 10px; animation-delay: 1.4s; }

@keyframes loader {
  0% { background: #3BDE7C; transform: scale(1) }
  100% { background: transparent; transform: scale(0) }
}
</style>
