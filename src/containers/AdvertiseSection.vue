<template>
<section id="advertise" class="advertise">
  <div class="container">
    <div class="advertise__content">
      <p class="advertise__content-text">
        Также по результатам теста
        <span class="text-upper">вы получите</span> подробные советы по определению наиболее перспективной
        <span class="text-upper">для вашего типа интеллекта сферы деятельности,</span>
        которая принесет вам скорейший финансовый результат.
      </p>
      <img src="../assets/img/brain_visualization.png" alt="" class="advertise__content-img">
    </div>
    <ButtonFilled @click="handleNavigate" title="ПРОЙТИ ТЕСТ"/>
  </div>
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
.advertise{
  background-color: #fff;
  padding: 40px 0;
}
.advertise__content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  gap: 40px;
  flex-wrap: wrap;
}
.advertise__content-text{
  font-family: PT Serif;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  width: 40%;
}
.advertise__content-img{
  width: 300px;
  height: 200px;
}
.text-upper{
  font-weight: bold;
  text-transform: uppercase;
}
@media (max-width: 1024px) {
  .advertise {
    padding: 30px 0;
  }
  .advertise .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .advertise__content {
    gap: 30px;
  }

  .advertise__content-text {
    font-size: 15px;
    line-height: 22px;
    width: 50%;
  }

  .advertise__content-img {
    width: 250px;
    height: 170px;
  }
}

@media (max-width: 768px) {
  .advertise {
    padding: 25px 0;
  }

  .advertise__content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  .advertise__content-text {
    font-size: 14px;
    line-height: 20px;
    width: 80%;
  }

  .advertise__content-img {
    width: 220px;
    height: 150px;
  }
}

@media (max-width: 480px) {
  .advertise {
    padding: 20px 0;
  }

  .advertise__content-text {
    font-size: 13px;
    line-height: 18px;
    width: 90%;
  }

  .advertise__content-img {
    width: 180px;
    height: 130px;
  }
}


</style>