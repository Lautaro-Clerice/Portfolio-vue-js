<template>
  <div class="container-sobre-mi" id="me">
    <div class="title">
      <div class="title-principal">
        <h2>Sobre mí</h2>
        <lord-icon
          src="https://cdn.lordicon.com/sbrtyqxj.json"
          trigger="loop"
          delay="1500"
          colors="primary:yellow"
          style="width: 50px; height: 50px"
        ></lord-icon>
      </div>

      <p>
        ¡Hola! Mi nombre es Lautaro y tengo 25 años. Soy una persona
        autodidacta, me esfuerzo por
        <span class="span-style">aprender de cada error</span> y convertir esos
        momentos en oportunidades de
        <span class="span-style">crecimiento</span>. Disfruto trabajar en equipo
        y me considero una persona con la que se puede hablar y colaborar
        fácilmente. Soy desarrollador
        <span class="span-style">Full Stack</span>, per me especializo en
        Frontend.
      </p>
      <!-- <div class="lang-container">
        <div class="button-lang">VueJS</div>
        <div class="button-lang" style="background-color: #5390d9">ReactJS</div>
        <div class="button-lang">Javascript</div>
        <div class="button-lang">Laravel</div>
      </div> -->
    </div>
    <div class="diapositiva">
      <div class="container-text">
        <div class="text-wrapper" v-for="column in columns" :key="column.id">
          <div class="text-content">
            <p v-for="item in column.items" class="items">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { columns } from "@/utils/columns";
</script>

<style scoped lang="scss">
.container-sobre-mi {
  margin: 0 auto;
  width: 60%;
  height: 600px;
  display: flex;
  gap: 25px;
}
.title {
  width: 35%;

  h2 {
    font-size: 56px;
    color: #131313;
    display: flex;
    flex-direction: column;
  }
  p {
    margin-top: 40px;
    line-height: 1.5;
    width: 90%;
    font-size: 18px;
    text-align: start;
    color: #131313;
  }
  h2::after {
    opacity: 1;
    content: "";
    width: 100px;
    border: 3px solid #8519db;
    border-radius: 8px;
    margin-top: 5px;
    transition: 0.5s;
  }
}
.diapositiva {
  border-radius: 8px;
  width: 55%;
  height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgb(132, 74, 205);
  background: linear-gradient(
    90deg,
    rgba(132, 74, 205, 1) 35%,
    rgba(194, 145, 255, 1) 100%
  );
}
.title-principal {
  display: flex;
  gap: 15px;
  align-items: center;
}
.text-wrapper {
  margin-left: -100px;
  width: 150%;
  display: flex;
  gap: 20px;
  overflow: hidden;
  transform: rotate(-13deg);
}
.text-content {
  display: flex;
  gap: 20px;
  animation: move-rtl 1000s linear infinite;
}
.items {
  text-align: center;
  padding: 10px;
  width: auto;
  padding: 15px 20px;
  border-radius: 8px;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.4);
  color: white;
  font-size: 22px;
  font-weight: 600;
}
.span-style {
  color: #7000fe;
  font-weight: 600;
}
.container-text {
  margin-top: -100px;
  height: 700px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.lang-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.button-lang {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 40px;
  border-radius: 8px;
  background-color: #8187dc;
  color: white;
}
@keyframes move-rtl {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
@media (width < 1440px) {
  .container-sobre-mi {
    width: 80%;
  }
  .title {
    width: 50%;
  }
  .diapositiva {
    width: 50%;
  }
}
@media (width < 800px) {
  .title h2 {
    font-size: 40px;
  }
  .container-sobre-mi {
    flex-direction: column;
    width: 90%;
    margin-bottom: 60px;
    p {
      width: 100%;
    }
    .title {
      width: 100%;
    }
    .diapositiva {
      width: 100%;
    }
  }
}
</style>
