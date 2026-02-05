<template>
  <div class="container-experience" id="exp">
    <div class="container-title">
      <motion.div
        class="title"
        :initial="{ opacity: 0, y: 60 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.1,
        }"
        :viewport="{ once: false, margin: '-100px' }"
      >
        <h2>Experiencia</h2>
      </motion.div>
    </div>
    <div class="experience-options">
      <motion.div
        class="experience"
        :initial="{ opacity: 0, y: 100, scale: 0.9 }"
        :whileInView="{ opacity: 1, y: 0, scale: 1 }"
        :transition="{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.1,
        }"
        :viewport="{ once: false, margin: '-80px' }"
      >
        <motion.div
          class="logo-empresa digitalhouse"
          :initial="{ opacity: 0, scale: 0.8, rotate: 10 }"
          :whileInView="{ opacity: 1, scale: 1, rotate: 0 }"
          :transition="{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.3,
          }"
          :viewport="{ once: false, margin: '-50px' }"
        >
          <lord-icon
            src="https://cdn.lordicon.com/vuiggmtc.json"
            trigger="loop"
            delay="1500"
            colors="primary:#ffffff"
            style="width: 40px; height: 40px"
          >
          </lord-icon>
        </motion.div>
        <motion.p
          :initial="{ opacity: 0, x: 30 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :transition="{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.4,
          }"
          :viewport="{ once: false, margin: '-50px' }"
        >
          Noviembre 2025
          <lord-icon
            src="https://cdn.lordicon.com/zmkotitn.json"
            trigger="loop"
            delay="1000"
            colors="primary:#717171"
            style="width: 20px; height: 20px"
          >
          </lord-icon>
          Actualidad
        </motion.p>
        <motion.h2
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.5,
          }"
          :viewport="{ once: false, margin: '-50px' }"
          >Frontend engineer</motion.h2
        >
        <motion.p
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.6,
          }"
          :viewport="{ once: false, margin: '-50px' }"
        >
          Desarrollo de plataformas educativas web de gran escala sobre LMS.
          Diseño e implementación de soluciones frontend con arquitecturas
          microfrontend y multitenant.
        </motion.p>
      </motion.div>
      <motion.div
        class="experience"
        :initial="{ opacity: 0, y: 100, scale: 0.9 }"
        :whileInView="{ opacity: 1, y: 0, scale: 1 }"
        :transition="{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.4,
        }"
        :viewport="{ once: false, margin: '-80px' }"
      >
        <motion.div
          class="logo-empresa freelance"
          :initial="{ opacity: 0, scale: 0.8, rotate: -10 }"
          :whileInView="{ opacity: 1, scale: 1, rotate: 0 }"
          :transition="{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.6,
          }"
          :viewport="{ once: false, margin: '-50px' }"
        >
          <lord-icon
            src="https://cdn.lordicon.com/lzgmgrnn.json"
            trigger="loop"
            delay="1500"
            colors="primary:#ffffff"
            style="width: 40px; height: 40px"
          >
          </lord-icon>
        </motion.div>
        <motion.p
          :initial="{ opacity: 0, x: -30 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :transition="{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.7,
          }"
          :viewport="{ once: false, margin: '-50px' }"
        >
          Agosto 2022
          <lord-icon
            src="https://cdn.lordicon.com/zmkotitn.json"
            trigger="loop"
            delay="1000"
            colors="primary:#717171"
            style="width: 20px; height: 20px"
          >
          </lord-icon>
          Actualidad
        </motion.p>
        <motion.h2
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.8,
          }"
          :viewport="{ once: false, margin: '-50px' }"
          >Freelance Developer</motion.h2
        >
        <motion.p
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.9,
          }"
          :viewport="{ once: false, margin: '-50px' }"
        >
          Desarrollo de tiendas online B2C y B2B con Next.js, React y Python.
          Implementación de carritos, filtros, buscadores y paneles
          administrativos. Enfoque en rendimiento, SEO técnico y accesibilidad
          web.
        </motion.p>
      </motion.div>
      <motion.div
        class="experience"
        :initial="{ opacity: 0, y: 100, scale: 0.9 }"
        :whileInView="{ opacity: 1, y: 0, scale: 1 }"
        :transition="{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.7,
        }"
        :viewport="{ once: false, margin: '-80px' }"
      >
        <motion.div
          class="logo-empresa"
          :initial="{ opacity: 0, scale: 0.8, rotate: 10 }"
          :whileInView="{ opacity: 1, scale: 1, rotate: 0 }"
          :transition="{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.9,
          }"
          :viewport="{ once: false, margin: '-50px' }"
        >
          <img src="../../assets/LogoMinimal.png" alt="Janos" />
        </motion.div>
        <motion.p
          :initial="{ opacity: 0, x: 30 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :transition="{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 1.0,
          }"
          :viewport="{ once: false, margin: '-50px' }"
        >
          Noviembre 2022
          <lord-icon
            src="https://cdn.lordicon.com/zmkotitn.json"
            trigger="loop"
            delay="1000"
            colors="primary:#717171"
            style="width: 20px; height: 20px"
          >
          </lord-icon>
          Noviembre 2025
        </motion.p>
        <motion.h2
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 1.1,
          }"
          :viewport="{ once: false, margin: '-50px' }"
          >Full stack developer</motion.h2
        >
        <motion.p
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 1.2,
          }"
          :viewport="{ once: false, margin: '-50px' }"
        >
          Desarrollo de plataformas web: Janos Eventos, Mi Evento, Complementos
          de Janos. Implementación full stack con React, Vue, NestJS y
          PostgreSQL. Integración de CI/CD con GitHub Actions y despliegue en
          AWS EC2.
        </motion.p>
      </motion.div>
    </div>
  </div>
</template>

<script setup>
import { motion } from "motion-v";
</script>

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
  overflow: visible;
  &:hover {
    transform: scale(1.02);
  }
  p {
    display: flex;
    gap: 8px;
    align-items: center;
    color: #717171;
    font-size: 14px;
    text-align: center;
    word-wrap: break-word;
  }
  h2 {
    font-size: 20px;
    text-align: center;
    margin: 10px 0;
  }
  .logo-empresa {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: absolute;
    top: -25px;
    background-color: white;
    z-index: 10;
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
  .digitalhouse {
    background-color: #ffc917;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (width < 1440px) {
  .container-title {
    width: 80%;
  }
  .experience-options {
    width: 80%;
  }
  .experience {
    width: 50%;
    height: auto;
    min-height: 280px;
    padding: 30px 15px;
    p {
      font-size: 13px;
    }
    h2 {
      font-size: 18px;
    }
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
    min-height: 250px;
    padding: 40px 20px 30px;
    p {
      font-size: 12px;
      flex-wrap: wrap;
      justify-content: center;
    }
    h2 {
      font-size: 16px;
    }
  }
  .container-title {
    margin: 0 5%;
  }
}
</style>
