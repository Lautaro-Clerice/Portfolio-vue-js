<template>
  <div class="container-projects" id="projects">
    <div class="container-title">
      <div class="title">
        <h2>Proyectos</h2>
      </div>
    </div>
    <div class="projects">
      <div
        class="project project1"
        @click="
          handlePush('https://github.com/Lautaro-Clerice/ProyectoAgenda2-0')
        "
      >
        <div class="title-project">Turnero</div>

        <div class="tooltip">
          <v-icon name="si-mongodb" class="icono" /><v-icon
            name="co-typescript"
            class="icono"
          />
          <v-icon name="co-react" class="icono" />
          <v-icon name="io-logo-nodejs" class="icono" />
        </div>

        <img src="../../assets/289shots_so.png" alt="AppTurnos" />
      </div>
      <div
        class="project project2"
        @click="handlePush('https://github.com/Lautaro-Clerice/becaDesign')"
      >
        <div class="title-project" style="z-index: 100000">
          Venta de páginas
        </div>
        <div class="tooltip">
          <v-icon name="co-react" class="icono" />
        </div>
        <img class="img-1" src="../../assets/224shots_so.jpeg" alt="Phone" />
      </div>
      <div
        class="project project3"
        @click="
          handlePush('https://github.com/Lautaro-Clerice/BecaProtectoReact')
        "
      >
        <div class="title-project">Beca E-commerce</div>
        <div class="tooltip">
          <v-icon name="co-html5-shield" class="icono" />
          <v-icon name="co-css3-shiled" class="icono" />
          <v-icon name="co-javascript" class="icono" />
        </div>
        <img
          class="img-1"
          src="../../assets/859_2x_shots_so.jpeg"
          alt="Phone"
        />
      </div>
      <div
        class="project project4"
        @click="handlePush('https://complementos.janoseventos.com')"
      >
        <div class="title-project">Janos complementos</div>
        <div class="tooltip">
          <v-icon name="co-vue-js" class="icono" />
          <v-icon name="co-laravel" class="icono" />
          <v-icon name="co-postgresql" class="icono" />
        </div>
        <img
          class="img-1"
          src="../../assets/JanosComplementos.jpeg"
          alt="janos"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
function handlePush(url) {
  window.open(url, "_blank");
}
</script>

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
  margin: 0 auto;
  width: 60%;
  height: 900px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
  padding: 10px;
  .project {
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    filter: grayscale(100%);
    &:hover {
      filter: grayscale(0);
    }
    &:hover .tooltip {
      opacity: 1;
      visibility: visible;
    }
    .tooltip {
      position: absolute;
      opacity: 0;
      transition: 0.4s;
      visibility: hidden;
      display: flex;
      align-items: center;
      gap: 10px;
      bottom: 20px;
      z-index: 3;
      right: 20px;
      .icono {
        color: white;
        width: 30px;
        height: 30px;
      }
    }
    .title-project {
      position: absolute;
      font-weight: 600;
      color: white;
      font-size: 30px;
      bottom: 10px;
      left: 20px;
    }
  }

  .project1 {
    grid-column: span 2 / span 2;
    grid-row: span 3 / span 3;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    transition: 0.5s;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .project2 {
    grid-column: span 3 / span 3;
    grid-row: span 2 / span 2;
    grid-column-start: 1;
    grid-row-start: 4;
    background-image: url("../../assets/backProj.jpg");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    transition: 0.5s;

    img {
      width: 30%;
      height: 70%;
      position: absolute;
    }
    .img-1 {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .project4 {
    grid-column: span 3 / span 3;
    grid-row: span 3 / span 3;
    grid-column-start: 3;
    grid-row-start: 1;
    background-image: url("../../assets/BackgroundProject2.jpg");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    transition: 0.5s;

    .img-1 {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .project3 {
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    grid-column-start: 4;
    grid-row-start: 4;
    background-image: url("../../assets/BackgroundProject2.jpg");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    transition: 0.5s;
    .img-1 {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
@media (width < 1440px) {
  .container-title {
    width: 80%;
  }
  .projects {
    width: 80%;
    .project .title-project {
      font-weight: 500;
      font-size: 25px;
      bottom: 0;
    }
    .project .tooltip {
      bottom: 10px;
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
  .projects .project {
    height: 300px;
    width: 100%;
    filter: none;
  }
  .projects {
    height: auto;
    .project .tooltip {
      opacity: 1;
      visibility: visible;
      width: 100%;
      justify-content: center;
      bottom: 10px;
      right: inherit;
    }
    .project .title-project {
      font-size: 18px;
      width: 100%;
      top: 10px;
      left: 0;
      text-align: center;
    }
  }

  .container-title {
    margin: 0 5%;
  }
}
</style>
