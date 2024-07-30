<template>
  <div class="container-certification">
    <div class="container-title">
      <div class="title">
        <h2>Certificaciones</h2>
      </div>
    </div>
    <div class="certification-option">
      <div class="certification">
        <img src="../../assets/logos/nucbaLogo.png" alt="nucba" />
        <div class="info">
          <p class="hidden-mobile">Curso</p>
          <h2>React</h2>
          <p>Nucba</p>
        </div>
      </div>
      <div class="certification">
        <img src="../../assets/logos/coderhouseLogo.png" alt="coderhouse" />
        <div class="info">
          <p class="hidden-mobile">Curso</p>
          <h2>Desarrollo web</h2>
          <p>Coderhouse</p>
        </div>
      </div>
      <div class="certification">
        <img class="udemy" src="../../assets/logos/udemyLogo.png" alt="udemy" />
        <div class="info">
          <p class="hidden-mobile">Curso</p>
          <h2>Javascript total</h2>
          <p>Udemy</p>
        </div>
      </div>
      <div class="certification">
        <img src="../../assets/logos/nucbaLogo.png" alt="nucba" />
        <div class="info">
          <p class="hidden-mobile">Curso</p>
          <h2>Full stack developer</h2>
          <p>Nucba</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.container-certification {
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
.certification-option {
  display: flex;
  gap: 40px;
  width: 60%;
  margin: 0 auto;
  margin-top: 50px;
}
.certification {
  width: 35%;
  height: 150px;
  border-radius: 20px;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
  padding: 20px;
  display: flex;
  gap: 30px;
  align-items: center;
  padding-left: 5%;
  position: relative;
  transition: 0.5s;
  &:hover {
    transform: scale(1.02);
  }
  img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }
  p {
    color: #717171;
  }
  .udemy {
    width: 90px;
    height: 60px;
  }
}
@media (width < 800px) {
  .container-title {
    margin: 0 5%;
  }
  .title h2 {
    font-size: 40px;
  }
  .certification-option {
    height: auto;
    flex-direction: column;
    width: 90%;
  }
  .certification {
    width: 100%;
    .info {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      font-size: 14px;
      .hidden-mobile {
        display: none;
      }
    }
  }
}
</style>
