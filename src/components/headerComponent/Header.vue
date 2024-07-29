<template>
  <div class="header-padre">
    <div :class="['header', { scrolled: isScrolled }]">
      <div class="logo" @click="scrollToTop">
        < <span> Lautaro clerice </span> />
      </div>
      <div class="lista">
        <!-- <p
          class="list-item"
          :class="{ scrolled: isScrolled }"
          @click="scrollToElement('#me')"
        >
        <div class="icon-mobile-container">
          <v-icon
          class="icon-mobile"
            name="bi-person-circle"
          />
        </div>
          Sobre mi
        </p> -->
        <p
          class="list-item"
          :class="{ scrolled: isScrolled }"
          @click="scrollToElement('#me')"
        >
        <div class="icon-mobile-container">
          <v-icon
          class="icon-mobile"
            name="pr-book"
          />
        </div>
          Certificaciones
        </p>

        <p
          class="list-item"
          :class="{ scrolled: isScrolled }"
          @click="scrollToElement('#projects')"
        >
        <div class="icon-mobile-container">
          <v-icon
          class="icon-mobile"
            name="fa-network-wired"
          />
        </div>
          Proyectos
        </p>

        <p
          class="list-item"
          :class="{ scrolled: isScrolled }"
          @click="scrollToElement('#exp')"
        >
        <div class="icon-mobile-container">
          <v-icon
          class="icon-mobile"
            name="md-workoutline"
          />
        </div>
        
          Experiencia
        </p>
        <p
          class="list-item"
          :class="{ scrolled: isScrolled }"
          @click="scrollToElement('#contact')"
        >
        <div class="icon-mobile-container">
          <v-icon
          class="icon-mobile"
            name="bi-telephone-inbound"
          />
        </div>
       
          Contacto
        </p>
      </div>
      <div class="icons">
        <div class="item" :class="{ scrolled: isScrolled }">
          <v-icon
            name="bi-linkedin"
            class="icon"
            :class="{ scrolled: isScrolled }"
          />
        </div>
        <div class="item" :class="{ scrolled: isScrolled }">
          <v-icon
            name="bi-github"
            class="icon"
            :class="{ scrolled: isScrolled }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};
const scrollToElement = (cssId) => {
  const element = document.querySelector(cssId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
.header-padre {
  display: flex;
  justify-content: center;
  width: 100%;
}
.header {
  display: flex;
  align-items: center;
  width: 65%;
  height: 150px;
  justify-content: space-between;
  z-index: 10000000;
  position: fixed;
  overflow: hidden;
  font-size: 18px;
  transition: 0.6s;
  &.scrolled {
    background-color: rgba(217, 225, 242, 0.959);
    backdrop-filter: blur(10px); // blur effect
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    height: 60px;
    margin-top: 10px;
    border-radius: 8px;
    padding-right: 20px;
    padding-left: 20px;
    opacity: 0.9;
  }
  .logo {
    color: #8519db;
    span {
      color: white;
    }
    &.scrolled {
      color: #595d64;
    }
    &.scrolled:hover {
      color: #212121;
    }
  }
  .lista {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 55px;
  }
  .list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    color: #d6d7e4;
    transition: 0.5s;
    border-bottom: 1px solid transparent;
    &.scrolled {
      height: 25px;
      font-size: 16px;
      color: #595d64;
      font-weight: 500;
    }
    &.scrolled:hover {
      color: #212121;
    }
  }
  .list-item::after {
    opacity: 0;
    content: "";
    width: 50px;
    border: 2px solid #8519db;
    border-radius: 8px;
    margin-top: 5px;
    transition: 0.5s;
  }
  .list-item:hover {
    color: white;
  }
  .list-item:hover::after {
    opacity: 1;
  }
  .icons {
    display: flex;
    gap: 15px;
    .icon {
      z-index: 900000;
      cursor: pointer;
      width: 40px;
      height: 40px;
      color: #d6d7e4;
      transition: 0.5s;
      &.scrolled {
        color: #595d64;
      }
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      &.scrolled:hover {
        color: #212121;
      }
    }
    .item:hover {
      color: white;
    }
  }
}
.icon-mobile-container {
  display: none;
}
@media (width < 1100px) {
  .header {
    width: 90%;
  }
}
@media (width < 850px) {
  .header {
    width: 100%;
    padding: 0;
    justify-content: space-between;
    align-items: center;
    padding: 0 ;
    &.scrolled {
      width: 95%;
      height: 70px;
      border-radius: 8px;
      backdrop-filter: none;
      padding: 0;
    }
    .lista {
      gap: 0;
    }
  }
  .logo {
    display: none;
  }
  .lista {
    width: 100%;
    justify-content: space-between !important;
  }
  .icon {
    display: none;
  }
  .icon-mobile-container {
  display: flex;
  .icon-mobile {
    transform: scale(1.3);
  }
  }
  .header .list-item{
    font-size: 12px; 
    gap: 10px;

  }
  .header .list-item.scrolled{
    gap: 5px;
    font-size: 12px;
    height: auto;
    padding-top: 20px;
    text-align: center;
    }
}
</style>
