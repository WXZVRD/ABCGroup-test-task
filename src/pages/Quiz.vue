<template>
  <div class="quiz">
    <ProgressBar style="margin: 0 auto" :value="currentIndex" :max="questions.length"/>
    <div v-if="!quizState"  class="quiz__tasks">

      <TaskSingleChoice
          v-if="currentQuestion.type === 'single-choice'"
          :question="currentQuestion"
          @answer="handleAnswer"
      />
      <TaskAnyChoice
          v-else-if="currentQuestion.type === 'any-choice'"
          :question="currentQuestion"
          @answer="handleAnswer"
      />
      <TaskGrid
          v-else-if="currentQuestion.type === 'grid'"
          :question="currentQuestion"
          @answer="handleAnswer"
      />
      <TaskNumberLine
          v-else-if="currentQuestion.type === 'number-line'"
          :question="currentQuestion"
          @answer="handleAnswer"
      />

      <ButtonFilled :is-active="!currentAnswer" @click="nextQuestion" title="ДАЛЕЕ"/>
    </div>
    <Loader v-if="quizState"/>

  </div>
</template>

<script setup>
  import { ref } from "vue";
  import ButtonFilled from "../components/UI/ButtonFilled.vue";
  import ProgressBar from "../components/UI/ProgressBar.vue";
  import TaskGrid from "../components/Quiz/TaskGrid.vue";
  import TaskNumberLine from "../components/Quiz/TaskNumberLine.vue";
  import TaskAnyChoice from "../components/Quiz/TaskAnyChoice.vue";
  import TaskSingleChoice from "../components/Quiz/TaskSingleChoice.vue";
  import taskImg from '../assets/img/task_img.jpg'
  import taskImg1 from '../assets/img/task_image1.jpg'
  import Loader from "../components/Quiz/Loader.vue";
  import router from "../configs/router.js";

  const quizState = ref(false)
  const currentAnswer = ref(null)
  const allAnswers = ref([])

  const questions = ref([
  {
    id: 1,
    type: "any-choice",
    question: "ваш пол:",
    answers: [
  { text: "Мужчина", correct: true },
  { text: "Женщина", correct: true },
    ],
  },
    {
      id: 2,
      type: "any-choice",
      question: "укажите ваш возраст: ",
      answers: [
        { text: "От 18", correct: true },
        { text: "От 18 до 28", correct: true },
        { text: "От 29 до 35", correct: true },
        { text: "От 36", correct: true },
      ],
    },
  {
    id: 3,
    type: "single-choice",
    question: "Выберите лишнее:",
    answers: [
  { text: "Дом", correct: true },
  { text: "Шалаш", correct: true },
  { text: "Бунгало", correct: true },
  { text: "Скамейка", correct: true },
      { text: "Хижина", correct: true }
    ]
  },
    {
      id: 4,
      type: "single-choice",
      question: "Продолжите числовой ряд:\n" +
          " 18  20  24  32  ",
      answers: [
        { text: "62", correct: false },
        { text: "48", correct: true },
        { text: "74", correct: false },
        { text: "57", correct: false },
        { text: "60", correct: false },
        { text: "77", correct: false }
      ]
    },
    {
      id: 5,
      type: "grid",
      question: "Выберите цвет, который сейчас наиболее Вам приятен:",
      gridColors: [
        "#FF0000", "#0000FF", "#00FF00",
        "#FFFF00", "#FF00FF", "#00FFFF",
        "#000000", "#FFFFFF", "#808080"
      ],
      correctAnswer: "#0000FF"
    },
    {
      id: 6,
      type: "single-choice",
      question: "Какой из городов лишний?",
      answers: [
        { text: "Вашингтон", correct: false },
        { text: "Лондон", correct: false },
        { text: "Париж", correct: false },
        { text: "Нью-Йорк", correct: false },
        { text: "Москва", correct: false },
        { text: "Оттава", correct: true }
      ]
    },
    {
      id: 7,
      type: "number-line",
      question: "Выберите правильную фигуру из четырёх пронумерованных.",
      numbers: [1, 2, 3, 4],
      correctAnswers: [1],
      hints: ["Подумай о солнце!", taskImg]
    },
    {
      id: 8,
      type: "any-choice",
      question: "Вам привычнее и важнее:",
      answers: [
        { text: "Наслаждаться\n" +
              "каждой минутой \n" +
              "проведенного времени", correct: true },
        { text: "Быть устремленными \n" +
              "мыслями в будущее", correct: true },
        { text: "Учитывать в ежедневной\n" +
              "          практике прошлый опыт", correct: true },
      ],
    },
    {
      id: 9,
      type: "single-choice",
      question: "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",
      answers: [
        { text: "оно остроконечное", correct: true },
        { text: "оно устойчиво", correct: true },
        { text: "оно-находится в состоянии равновесия", correct: true },
      ],
      hints: ["Подумай о солнце!", taskImg1]
    },
  ]);

  const currentIndex = ref(0);
  const currentQuestion = ref(questions.value[currentIndex.value]);

  const handleAnswer = (answer) => {
    currentAnswer.value = answer
  };

  const handleEnd = () => {
    quizState.value = true

    setTimeout(() => {
      console.log("Waiting for results...")
      router.push('/results')
    }, 3500)
  }

  const nextQuestion = () => {
    if (currentIndex.value >= questions.value.length - 1) {
      handleEnd();
      return;
    }
    currentIndex.value++;
    currentQuestion.value = questions.value[currentIndex.value];
    allAnswers.value.push(currentAnswer.value)
    currentAnswer.value = null
  };
</script>

<style scoped>
.quiz{
  background-image: url("../assets/img/rain_bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 90vh;



  padding: 20px 0;
}

.quiz__tasks{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
}
</style>