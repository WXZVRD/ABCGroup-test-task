<template>
<section class="hero">
  <span class="hero__descr">Пройдите точный и быстрый </span>
  <h1 class="hero__title">ТЕСТ НА ОПРЕДЕЛНИЕ IQ</h1>
  <img src="../assets/img/brain_bg.png" alt="" class="hero__img">
  <ButtonFilled @click="handleNavigate" title="ПРОЙТИ ТЕСТ"/>
  <p class="hero__text">
    <span class="text-yellow">и получите рекомендации по развитию своего интеллекта</span> <br>
     и улучшению финансового благосостояния и личной жизни
  </p>
</section>
</template>

<script setup>
import ButtonFilled from "../components/UI/ButtonFilled.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const handleNavigate = async () => {
  await router.push("/quiz")
}
</script>

<style scoped>
.hero{
  background-image: url("../assets/img/rain_bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  padding: 27px;
}
.hero__descr{
  font-family: PT Serif;
  font-size: 18px;
  line-height: 23.85px;
  text-align: center;
  color: #fff;
}
.hero__title{
  color: #FFC700;
  box-shadow: 0px 4px 4px 0px #00000040;
  font-family: Yeseva One;
  font-size: 30px;
  line-height: 34.65px;
  text-align: center;
}
.hero__img{

}
.hero__text{
  font-family: PT Serif;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  color: #fff;
}
.text-yellow{
  color: #FFC700;
}
</style>