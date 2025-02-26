<template>
<section class="quote">
  <div class="container">
    <div class="quote__container">
      <div class="quote__wrapper">
        <p class="quote__text">
          Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта,
          но и выработать список рекомендаций для повышения этого показателя.
        </p>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>

</script>

<style scoped>
.quote{
  background-image: url("../assets/img/quote_bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 640px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
}
.quote::after{
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: radial-gradient(84.34% 50.29% at 48.75% 49.71%, #2950C2 0%, rgba(38, 91, 199, 0.96) 40.62%, rgba(39, 98, 187, 0) 85.42%);
  top: 0;
  left: 0;
  z-index: 1;
}
.quote__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.quote__text{
  font-family: Yeseva One;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #fff;
  position: relative;
  z-index: 3;
}

.quote__text::before,
.quote__text::after {
  font-size: 68px;
  font-weight: bold;
  color: #999;
  position: absolute;
}
.quote__text::before {
  content: "“";
  top: -30px;
  left: -30px;
  color: #fff;

}

.quote__text::after {
  content: "”";
  bottom: -30px;
  right: -30px;
  color: #fff;
}
</style>