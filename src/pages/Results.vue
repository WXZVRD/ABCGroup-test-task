<template>
  <div class="result">
    <h1 class="result__title">Ваш результат рассчитан: </h1>
    <p class="result__text">
      Вы относитесь к 3% респондентов, чей уровень интеллекта более чем на
      15 пунктов отличается от среднего в большую или меньшую сторону!
    </p>

    <h2 class="result__motivation">Скорее получите свой результат!</h2>
    <p class="motivation__descr">
      В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона.
    </p>
    <p class="result__timer">Звоните скорее, запись доступна всего {{ formattedTime }}</p>

    <button @click="handleCall" class="motivation__btn">
      <img src="../assets/img/phone_icon.svg" alt="" class="btn__img" />
      <p class="btn__text">Позвонить и прослушать результат</p>
    </button>

    <!-- Блок с данными после получения -->
    <div v-if="personData" class="person-info">
      <h2 class="person-info__title">{{ personData.name }}</h2>
      <ul class="person-info__list">
        <li><strong>Рост:</strong> {{ personData.height }} см</li>
        <li><strong>Вес:</strong> {{ personData.mass }} кг</li>
        <li><strong>Цвет волос:</strong> {{ personData.hair_color }}</li>
        <li><strong>Цвет кожи:</strong> {{ personData.skin_color }}</li>
        <li><strong>Цвет глаз:</strong> {{ personData.eye_color }}</li>
        <li><strong>Год рождения:</strong> {{ personData.birth_year }}</li>
        <li><strong>Пол:</strong> {{ personData.gender }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import serviceApi from "../services/mockService.js";

const personData = ref(null);

const handleCall = async () => {
  try {
    personData.value = await serviceApi.getPeople();
  } catch (e) {
    console.log(e);
  }
};

const timeLeft = ref(10 * 60);
const formattedTime = ref(formatTime(timeLeft.value));

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")} МИНУТ`;
}

onMounted(() => {
  const timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
      formattedTime.value = formatTime(timeLeft.value);
    } else {
      clearInterval(timer);
    }
  }, 1000);
});
</script>

<style scoped>
.motivation__btn {
  padding: 30px 22px;
  background: red;
  border-radius: 5px;
  display: flex;
  align-items: center;
  transition: background 0.3s, transform 0.1s, box-shadow 0.3s;
}

.motivation__btn:hover {
  background: darkred;
  box-shadow: 0 4px 10px rgba(255, 0, 0, 0.5);
}

.motivation__btn:active {
  background: #a00000;
  transform: scale(0.95);
}

.result {
  background-image: url("../assets/img/rain_bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 90vh;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.result__title {
  font-family: PT Serif;
  font-size: 15px;
  line-height: 16px;
  text-align: center;
  color: #fff;
  margin: 0;
  margin-bottom: 15px;
}

.result__text {
  max-width: 300px;
  font-family: PT Serif;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #fff;
}

.result__motivation {
  font-family: PT Serif;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #3BDE7C;
}

.motivation__descr {
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  text-align: center;
  padding: 15px 12px;
  background: #1C2741;
  border-radius: 6px;
  max-width: 400px;
  color: #fff;
  margin-bottom: 20px;
}

.result__timer {
  font-family: PT Serif;
  font-size: 11px;
  line-height: 30px;
  text-align: center;
  color: #3BDE7C;
  margin-bottom: 10px;
}

/* Стили для блока информации */
.person-info {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  text-align: center;
  color: #fff;
  margin-top: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.person-info__title {
  font-size: 20px;
  margin-bottom: 10px;
}

.person-info__list {
  list-style: none;
  padding: 0;
}

.person-info__list li {
  font-size: 14px;
  margin-bottom: 5px;
}
</style>
