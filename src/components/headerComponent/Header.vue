<template>
  <div class="header-padre">
    <div :class="['header', { scrolled: isScrolled }]">
      <div class="logo">< <span> Lautaro clerice </span> /></div>
      <div class="lista">
        <p class="list-item" :class="{ scrolled: isScrolled }">Sobre mi</p>
        <p class="list-item" :class="{ scrolled: isScrolled }">Proyectos</p>
        <p class="list-item" :class="{ scrolled: isScrolled }">Experiencia</p>
        <p class="list-item" :class="{ scrolled: isScrolled }">Contacto</p>
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
</style>