<template>
  <div class="container-experience" id="exp">
    <div class="container-title">
      <div class="title">
        <h2>Experiencia</h2>
      </div>
    </div>
    <div class="experience-options">
      <div class="experience">
        <div class="logo-empresa freelance">
          <lord-icon
            src="https://cdn.lordicon.com/lzgmgrnn.json"
            trigger="loop"
            delay="1500"
            colors="primary:#ffffff"
            style="width: 40px; height: 40px"
          >
          </lord-icon>
        </div>
        <p>
          Agosto 2023
          <lord-icon
            src="https://cdn.lordicon.com/zmkotitn.json"
            trigger="loop"
            delay="1000"
            colors="primary:#717171"
            style="width: 20px; height: 20px"
          >
          </lord-icon>
          Febrero 2024
        </p>
        <h2>Freelance Developer</h2>
        <p>
          Trabajé como desarrollador freelance en plataformas como Fiverr,
          Utilizé ReactJs para el frontend, NodeJs para el backend con bases de
          datos en MongoDB
        </p>
      </div>
      <div class="experience">
        <div class="logo-empresa">
          <img src="../../assets/LogoMinimal.png" alt="Janos" />
        </div>
        <p>
          Marzo 2024
          <lord-icon
            src="https://cdn.lordicon.com/zmkotitn.json"
            trigger="loop"
            delay="1000"
            colors="primary:#717171"
            style="width: 20px; height: 20px"
          >
          </lord-icon>
          Actualidad
        </p>
        <h2>Full stack developer</h2>
        <p>
          En Jano's, utilizo tecnologías como Laravel para el backend y VueJS
          para el frontend. También utilizamos Docker para la contenerización y
          despliegue de aplicaciones, y Git para la colaboración en el
          desarrollo.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.container-experience {
  margin: 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  background-color: #ffffff;
  padding-bottom: 40px;
}
.container-title {
  margin: 0 auto;
  width: 60%;
  height: auto;
  display: flex;
  gap: 25px;
}
.title {
  margin-top: 50px;
  width: 35%;

  h2 {
    font-size: 56px;
    color: #131313;
    display: flex;
    flex-direction: column;
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
.experience-options {
  display: flex;
  gap: 40px;
  width: 60%;
  margin: 0 auto;
  margin-top: 50px;
}
.experience {
  width: 30%;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.5s;
  &:hover {
    transform: scale(1.02);
  }
  p {
    display: flex;
    gap: 8px;
    align-items: center;
    color: #717171;
  }
  .logo-empresa {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: absolute;
    top: -25px;
    background-color: white;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .freelance {
    background-color: rgb(250, 212, 42);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (width < 800px) {
  .title h2 {
    font-size: 40px;
  }
  .container-experience {
    height: auto;
  }
  .experience-options {
    width: 90%;
    flex-direction: column;
  }
  .experience {
    width: 100%;
    height: auto;
    padding: 30px;
  }
}
</style>
