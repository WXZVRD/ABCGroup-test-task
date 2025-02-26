<template>
  <div>
    <div
        class="overlay"
        :class="{ 'overlay--active': isOpen }"
        @click="toggleMenu"
    ></div>

    <div class="sidebar__wrapper" :class="{ 'sidebar--open': isOpen }">
      <div class="sidebar">
        <div class="button__container">
          <button class="close-btn" @click="toggleMenu">✖</button>
        </div>

        <nav class="sidebar__nav">
          <router-link to="/" class="sidebar__nav-item"  @click="toggleMenu">ГЛАВНАЯ</router-link>
          <router-link :to="{ name: 'Main', hash: '#advertise' }" @click="toggleMenu" class="sidebar__nav-item">ИНФОРМАЦИЯ О ТЕСТЕ</router-link>
          <router-link to="/quiz" class="sidebar__nav-item"  @click="toggleMenu">ПРОЙТИ ТЕСТ</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
const { isOpen, toggleMenu } = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  toggleMenu: {
    type: Function,
    required: true
  }
})
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}
.overlay--active {
  opacity: 1;
  visibility: visible;
}

.sidebar__wrapper {
  position: fixed;
  top: 0;
  left: -120%;
  width: 320px;
  height: 100vh;
  background: #181818;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 100;
}
.sidebar--open {
  left: 0;
}

.sidebar {
  width: 100%;
  height: 100vh;
  padding: 23px;
}

.close-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  transition: all 0.2s ease;
}

.close-btn:hover{
  color: #FFC700;
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
}
.sidebar__nav-item {
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.2s ease;
}
.sidebar__nav-item:hover {
  color: #f4ce0c;
}
</style>
