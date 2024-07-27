<template>
  <div class="container-projects" id="projects">
    <div class="container-title">
      <div class="title">
        <h2>Proyectos</h2>
      </div>
    </div>
    <div class="projects">
      <div class="project project1">
        <img src="../../assets/appTurnos.png" alt="AppTurnos" />
      </div>
      <div class="project project2">
        <img
          class="img-1"
          src="../../assets/iPhone-13-PRO-beca-design.vercel.app.png"
          alt="Phone"
        /><img
          class="img-2"
          src="../../assets/iPhone-13-PRO-beca-design.vercel.app (3).png"
          alt="phone"
        />
      </div>
      <div class="project project3">Project 3</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.container-projects {
  margin: 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  background-color: #f0f0f0;
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
.projects {
  display: grid;
  margin: 0 auto;
  width: 60%;
  height: 900px;
  grid-template-columns: repeat(10, 1fr); /* 10 columnas iguales */
  grid-template-rows: repeat(10, 1fr); /* 10 filas iguales */
  gap: 10px; /* Espacio entre los elementos */
  padding: 10px; /* Espacio interno en el contenedor principal */
  grid-template-areas:
    "project1 project1 project1 project1 project1 project1 project2 project2 project2 project2"
    "project1 project1 project1 project1 project1 project1 project2 project2 project2 project2"
    "project1 project1 project1 project1 project1 project1 project2 project2 project2 project2"
    "project1 project1 project1 project1 project1 project1 project2 project2 project2 project2"
    "project1 project1 project1 project1 project1 project1 project2 project2 project2 project2"
    "project1 project1 project1 project1 project1 project1 project3 project3 project3 project3"
    "project1 project1 project1 project1 project1 project1 project3 project3 project3 project3"
    "project1 project1 project1 project1 project1 project1 project3 project3 project3 project3"
    "project1 project1 project1 project1 project1 project1 project3 project3 project3 project3"
    "project1 project1 project1 project1 project1 project1 project3 project3 project3 project3";
  .project {
    padding: 20px;
    border-radius: 8px;
  }
  .project1 {
    grid-area: project1;
    background-image: url("../../assets/backgroundProject.jpg");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    filter: grayscale(100%);
    transition: 0.5s;
    &:hover {
      filter: grayscale(0);
    }
    img {
      width: 120%;
      height: 80%;
      margin-left: 100px;
      margin-top: 100px;
    }
  }

  .project2 {
    grid-area: project2;
    background-image: url("../../assets/backProj.jpg");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    filter: grayscale(100%);
    transition: 0.5s;
    &:hover {
      filter: grayscale(0);
    }
    img {
      width: 30%;
      height: 70%;
      position: absolute;
      transform: rotate(340deg);
    }
    .img-1 {
      left: 22%;
      bottom: 70px;
    }
    .img-2 {
      right: 22%;
      bottom: 30px;
    }
  }
  .project3 {
    grid-area: project3;
    background-image: url("../../assets/BackgroundProject2.jpg");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    filter: grayscale(100%);
    transition: 0.5s;
    &:hover {
      filter: grayscale(0);
    }
  }
}
@media (width < 800px) {
  .title h2 {
    font-size: 40px;
  }
  .projects {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
  .project {
    height: 300px;
    width: 100%;
  }
}
</style>
