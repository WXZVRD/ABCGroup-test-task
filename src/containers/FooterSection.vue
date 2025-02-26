<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <p class="footer__content-text">
          Также по результатам теста
          <span class="text-upper">вы получите</span> подробные советы по определению наиболее перспективной
          <span class="text-upper">для вашего типа интеллекта сферы деятельности,</span>
          которая принесет вам скорейший финансовый результат.
        </p>
        <p class="footer__descr">
          Профессиональная интерпретация и детально проработанные рекомендации позволят вам качественно изменить все аспекты своей жизни: от финансового до любовного.</p>
      </div>
      <ButtonOutlined @click="handleNavigate" title="ПРОЙТИ ТЕСТ"/>
    </div>
  </footer>
</template>

<script setup>
import ButtonOutlined from "../components/UI/ButtonOutlined.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const handleNavigate = async () => {
  await router.push("/quiz")
}
</script>

<style scoped>
.footer{
  background-image: url("../assets/img/rain_bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
  padding: 40px 0;
}
.footer:after{
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  width: 200px;
  height: 280px;
  background-image: url("../assets/img/lighting.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.footer:before{
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 200px;
  height: 280px;
  background-image: url("../assets/img/lighting.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scaleX(-1);
}
.footer__content{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 40px;
  flex-wrap: wrap;
}
.footer__content-text{
  display: block;
  font-family: Merriweather,serif;
  font-size: 15px;
  line-height: 20px;
  color: #fff;
  max-width: 400px;
}
.footer__descr{
  max-width: 400px;

  display: block;
  font-family: Merriweather,serif;
  font-size: 16px;
  line-height: 23px;
  color: #000;
  padding: 29px 15px;
  background: #F3F3F2CC;
  opacity: 0.8;
  border-radius: 20px;
}

@media (max-width: 1024px) {
  .footer {
    padding: 30px 0;
  }
  .footer .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer__content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  .footer__content-text,
  .footer__descr {
    max-width: 80%;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 25px 0;
  }

  .footer__content {
    gap: 15px;
  }

  .footer__content-text {
    font-size: 14px;
    line-height: 18px;
    max-width: 90%;
  }

  .footer__descr {
    font-size: 14px;
    line-height: 20px;
    padding: 20px 10px;
    max-width: 90%;
  }

  .footer .container {
    align-items: center;
    text-align: center;
  }

  .footer:before,
  .footer:after {
    width: 150px;
    height: 200px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 20px 0;
  }

  .footer__content-text {
    font-size: 13px;
    line-height: 16px;
  }

  .footer__descr {
    font-size: 13px;
    line-height: 18px;
    padding: 15px 8px;
  }

  .footer:before,
  .footer:after {
    width: 100px;
    height: 150px;
  }
}
</style>