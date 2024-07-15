<template>
  <div class="container-contact" id="contact">
    <div class="contact">
      <div class="title">
        <h2>Contactame</h2>
      </div>
    </div>
    <div class="icon-contact">
      <lord-icon
      class="icon"
          src="https://cdn.lordicon.com/kiynvdns.json"
          trigger="loop"
          delay="500"
          colors="primary:#121331,secondary:#a866ee,tertiary:#f2e2d9,quaternary:#4bb3fd,quinary:#ebe6ef"
          style="width:150px;height:150px">
      </lord-icon>    
    </div>
    <div class="text-contact">
      <h2>Hablemos!</h2>
      <p>Si tenés algun proyecto en mente, no dudes en contactarte conmigo</p>
      <div class="button-contact">
        <button>
          <v-icon
            name="md-alternateemail"
          />
          Email
        </button>
        <button>
          <v-icon
            name="bi-whatsapp"
          />
          WhatsApp
        </button>
      </div>
    </div>
    
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.container-contact {
  margin: 0 auto 60px auto;
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
.icon-contact {
  width: 200px;
  height: 200px;
  margin: 40px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
 
}
.text-contact {
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: 'Otterco';
    font-size: 50px;
    font-weight: 400;
  }
  p{
    font-family: 'Otterco';
    font-size: 20px;
    color: #717171;
  }
  button {
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

button:hover {
  background-color: #8519db;
  box-shadow: 0px 15px 20px #8419db57;
  color: #fff;
  transform: translateY(-7px);
}

button:active {
  transform: translateY(-1px);
}
}
.button-contact {
  display: flex;
  gap: 25px;
  margin-top: 40px
}
</style>
