<template>
  <div class="container-title">
    <h1>¡Hola! Soy</h1>
    <h2>Lautaro Clerice</h2>
    <p class="container-typing">
      <span class="typed-text">{{ typeValue }}</span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const typeValue = ref("");
const typeStatus = ref(false);
const typeArray = ["Full stack developer", "Especializado en Front-end"];
const typingSpeed = 100;
const erasingSpeed = 50;
const newTextDelay = 1000;
const typeArrayIndex = ref(0);
const charIndex = ref(0);

const typeText = () => {
  if (charIndex.value < typeArray[typeArrayIndex.value].length) {
    if (!typeStatus.value) typeStatus.value = true;

    typeValue.value += typeArray[typeArrayIndex.value].charAt(charIndex.value);
    charIndex.value += 1;

    setTimeout(typeText, typingSpeed);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay);
  }
};

const eraseText = () => {
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true;

    typeValue.value = typeArray[typeArrayIndex.value].substring(
      0,
      charIndex.value - 1
    );
    charIndex.value -= 1;
    setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus.value = false;
    typeArrayIndex.value += 1;
    if (typeArrayIndex.value >= typeArray.length) typeArrayIndex.value = 0;

    setTimeout(typeText, typingSpeed + 1000);
  }
};

onMounted(() => {
  setTimeout(typeText, newTextDelay + 200);
});
</script>

<style scoped lang="scss">
.container-title {
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0px;
  h1 {
    color: white;
    font-family: "Inter", sans-serif;
    font-size: 36px;
    text-align: center;
    height: 10px;
  }
  h2 {
    margin-top: 30px;
    font-size: 60px;
    height: 20px;
    color: transparent;
    letter-spacing: 1px;
    -webkit-text-stroke: 2px white;
    transform: skew(-2deg);
    transition: all 0.3s ease;
    font-family: "Eudoxus Sans", sans-serif;
    font-weight: 700;
    transition: 0.5s;
    text-align: center;
  }
  h2:hover {
    color: white;
    letter-spacing: 1px;
    scale: 1.1;
    transform: translateY(-20px);
    text-shadow: 0 0 20px hsla(0, 0%, 89%, 0.353);
  }
}
span.typed-text {
  color: white;
  font-weight: 500;
  font-size: 32px;
}
.container-typing {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-top: 60px;
}
span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  height: 50px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}

span.cursor.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
@media (width < 800px) {
  .container-title {
    width: 90%;
    position: relative;
    height: auto;
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 45px;
    }
    .container-typing {
      margin-top: 50px;
      .typed {
        font-size: 10px;
      }
    }
  }
}
</style>
