<template>
  <div class="container-contact">
    <div class="contact">
      <div class="title">
        <h2>Contactame!</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.container-contact {
  margin: 0 auto;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  gap: 25px;
}
.contact {
  margin: 0 auto;
  width: 60%;
  height: 600px;
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
</style>