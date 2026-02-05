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
        @click="handlePush('https://invitly-front.vercel.app/es')"
      >
        <div class="title-project">Venta de invitaciones digitales</div>

        <div class="tooltip">
          <v-icon name="co-next-js" class="icono" />
          <v-icon name="co-typescript" class="icono" />
        </div>

        <img src="../../assets/invitly.png" alt="Invitly" />
      </div>
      <div
        class="project project3"
        @click="handlePush('https://tutur-vue.vercel.app/')"
      >
        <div class="title-project">Tutur Vue</div>
        <div class="tooltip">
          <v-icon name="co-vue-js" class="icono" />
        </div>
        <img class="img-1" src="../../assets//tuturVue.png" alt="Phone" />
      </div>
      <div
        class="project project4"
        @click="
          handlePush(
            'https://invitation-front-chi.vercel.app/evento/lautaroydafne',
          )
        "
      >
        <div class="title-project">Invitación digital</div>
        <div class="tooltip">
          <v-icon name="co-react" class="icono" />
        </div>
        <img class="img-1" src="../../assets/Invite.png" alt="invitation" />
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
  height: 700px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
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
    grid-row: span 2 / span 2;
    grid-column-start: 1;
    grid-row-start: 1;
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

  .project4 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
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
    grid-column-start: 1;
    grid-row-start: 3;
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
