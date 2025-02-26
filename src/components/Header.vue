<template>
  <div class="header__wrapper">
    <Sidebar :is-open="isMenuOpen" :toggle-menu="toggleMenu"/>
    <header class="header">
      <div v-if="isSmallSizeWindow" class="header__burger" @click="toggleMenu">
        <span class="header__burger-item"></span>
        <span class="header__burger-item"></span>
        <span class="header__burger-item"></span>
      </div>

      <nav class="header__nav">
        <router-link to="/" class="header__nav-item">ГЛАВНАЯ</router-link>
        <router-link :to="{ name: 'Main', hash: '#advertise' }" class="header__nav-item">ИНФОРМАЦИЯ О ТЕСТЕ</router-link>
        <router-link to="/quiz" class="header__nav-item">ПРОЙТИ ТЕСТ</router-link>
      </nav>

      <div class="quiz__header" v-if="isQuizPage && isSmallSizeWindow">
        <img src="../assets/img/brain_bg.png" alt="" class="quiz__header-img">
        <p class="quiz__header-text">тест на определение IQ</p>
      </div>
      <div class="quiz__header" v-if="isResultPage && isSmallSizeWindow">
        <img src="../assets/img/brain_bg.png" alt="" class="quiz__header-img">
        <p class="quiz__header-text">ГОТОВО!</p>
      </div>
    </header>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted, computed} from "vue";
import Sidebar from "./Sidebar.vue";

import { useRoute } from "vue-router";

const router = useRoute();

const isQuizPage = computed(() => router.path === "/quiz");
const isResultPage = computed(() => router.path === "/results");


const isSmallSizeWindow = ref(window.innerWidth <= 1000);
const isMenuOpen = ref(false);

const updateWindowSize = () => {
  isSmallSizeWindow.value = window.innerWidth <= 1000;
  if (!isSmallSizeWindow.value) isMenuOpen.value = false;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  window.addEventListener("resize", updateWindowSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowSize);
});
</script>

<style scoped>
.quiz__header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.quiz__header-img{
  width: 40px;
  height: 40px;
}
.quiz__header-text{
  font-family: Yeseva One;
  font-size: 12px;
  line-height: 13.86px;
  color: #FFC700;
}
.header__wrapper{
  position: relative;
}
.header {
  position: relative;
  width: 100%;
  height: 46px;
  background: #181818;
  box-shadow: 0 4px 4px 0 #00000040;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  transition: all 0.3s ease;
}

.header__nav-item {
  font-family: Roboto,serif;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  transition: all 0.2s ease;
  text-decoration: none;
}

.header__nav-item:hover {
  color: #f4ce0c;
}

.header__burger {
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  z-index: 1;
}

.header__burger-item {
  display: block;
  width: 24px;
  height: 3px;
  background: #dadada;
  margin-bottom: 4px;
  transition: all 0.3s ease;
}

@media (max-width: 1000px) {
  .header__nav {
    position: absolute;
    top: 46px;
    left: -100%;
    width: 100%;
    flex-direction: column;
    background: #181818;
    padding: 15px 0;
    box-shadow: 0 4px 4px 0 #00000040;
    gap: 15px;
  }
}
</style>
