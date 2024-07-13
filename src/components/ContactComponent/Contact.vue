<template>
  <div class="container-contact">
    <div class="contact">
      <div class="title">
        <h2>Contactame!</h2>
      </div>
    </div>
    <div class="form-contact">
      <form>
        <div class="name">
          <input type="text" class="text" placeholder="Nombre" />
          <input type="text" class="text" placeholder="Apellido" />
        </div>
        <div class="email">
          <input type="text" class="email" placeholder="Email" />
        </div>
        <div class="message">
          <input
            type="text"
            class="message-area"
            placeholder="Dejame tu mensaje"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.container-contact {
  margin: 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-direction: column;
}
.contact {
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
.form-contact {
  margin: 50px auto;
  width: 40%;
  height: 800px;
  border-radius: 24px;
  border: 1px solid #dddddd;
  form {
    width: 95%;
    margin: 60px auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  input {
    background-color: #dddddd2f;
    border-radius: 8px;
    height: 60px;
    width: 50%;
    font-size: 20px;
    padding: 30px;
    border: 2px solid #cccccc00;
    transition: border-color 0.3s, border-width 0.3s;
  }

  input:focus {
    border-color: #8419db3d !important;
    border-width: 1px;
    outline: none;
  }

  .name {
    display: flex;
    gap: 25px;
  }
  .email {
    width: 100%;
  }
}
</style>
