<template>
  <div class="container-sobre-mi">
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
        autodidacta, me esfuerzo por aprender de cada error y convertir esos
        momentos en oportunidades de crecimiento. Disfruto trabajar en equipo y
        me considero una persona con la que se puede hablar y colaborar
        fácilmente. Soy desarrollador Full Stack, pero me especializo mas en
        Frontend.
      </p>
    </div>
    <div class="diapositiva"></div>
  </div>
</template>

<script setup>
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
  border: 1px solid blue;
  border-radius: 8px;
  width: 55%;
  height: 400px;
}
.title-principal {
  display: flex;
  gap: 15px;
  align-items: center;
}
</style>