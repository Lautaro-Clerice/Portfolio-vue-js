<template>
  <div>
    <Header />
    <Principal>
      <TitlePrincipal />
      <v-tooltip text="Typescript">
        <template v-slot:activator="{ props }">
          <div
            v-bind="props"
            class="item"
            style="
              top: 15%;
              left: 15%;
              filter: blur(0.8px);
              transform: scale(1.1);
            "
          >
            <v-icon name="co-typescript" class="icono" />
          </div>
        </template>
      </v-tooltip>
      <v-tooltip text="MongoDB">
        <template v-slot:activator="{ props }">
          <div
            v-bind="props"
            class="item"
            style="
              top: 20%;
              left: 60%;
              filter: blur(1.1px);
              transform: scale(2);
            "
          >
            <v-icon name="si-mongodb" class="icono" />
          </div>
        </template>
      </v-tooltip>
      <v-tooltip text="Figma">
        <template v-slot:activator="{ props }">
          <div
            v-bind="props"
            class="item"
            style="
              top: 62%;
              left: 21%;
              filter: blur(1.6px);
              transform: scale(2.3);
            "
          >
            <v-icon name="co-figma" class="icono" />
          </div>
        </template>
      </v-tooltip>
      <v-tooltip text="PostgreSQL">
        <template v-slot:activator="{ props }">
          <div
            v-bind="props"
            class="item"
            style="
              top: 35%;
              left: 10%;
              filter: blur(0.7px);
              transform: scale(1.7);
            "
          >
            <v-icon name="co-postgresql" class="icono" />
          </div>
        </template>
      </v-tooltip>
      <v-tooltip text="Laravel">
        <template v-slot:activator="{ props }">
          <div
            v-bind="props"
            class="item"
            style="
              top: 30%;
              left: 25%;
              filter: blur(1.3px);
              transform: scale(1.6);
            "
          >
            <v-icon name="co-laravel" class="icono" />
          </div>
        </template>
      </v-tooltip>
      <v-tooltip text="Javascript">
        <template v-slot:activator="{ props }">
          <div
            v-bind="props"
            class="item"
            style="
              top: 74%;
              left: 36%;
              filter: blur(1.1px);
              transform: scale(1.4);
            "
          >
            <v-icon name="co-javascript" class="icono" />
          </div>
        </template>
      </v-tooltip>
      <v-tooltip text="CSS">
        <template v-slot:activator="{ props }">
          <div
            v-bind="props"
            class="item"
            style="
              top: 60%;
              left: 85%;
              filter: blur(0.9px);
              transform: scale(1.4);
            "
          >
            <v-icon name="co-css3-shiled" class="icono" />
          </div>
        </template>
      </v-tooltip>
      <v-tooltip text="HTML">
        <template v-slot:activator="{ props }">
          <div
            v-bind="props"
            class="item"
            style="
              top: 65%;
              left: 52%;
              filter: blur(1px);
              transform: scale(1.2);
            "
          >
            <v-icon name="co-html5-shield" class="icono" />
          </div>
        </template>
      </v-tooltip>
      <v-tooltip text="Git">
        <template v-slot:activator="{ props }">
          <div
            v-bind="props"
            class="item"
            style="
              top: 80%;
              left: 67%;
              filter: blur(1.9px);
              transform: scale(2.7);
            "
          >
            <v-icon name="bi-git" class="icono" />
          </div>
        </template>
      </v-tooltip>
      <v-tooltip text="NodeJS">
        <template v-slot:activator="{ props }">
          <div
            v-bind="props"
            class="item"
            style="
              top: 25%;
              left: 90%;
              filter: blur(1.5px);
              transform: scale(2.5);
            "
          >
            <v-icon name="io-logo-nodejs" class="icono" />
          </div>
        </template>
      </v-tooltip>
      <v-tooltip text="Sass">
        <template v-slot:activator="{ props }">
          <div
            v-bind="props"
            class="item"
            style="
              top: 80%;
              left: 5%;
              filter: blur(1.1px);
              transform: scale(1.5);
            "
          >
            <v-icon name="co-sass-alt" class="icono" />
          </div>
        </template>
      </v-tooltip>
      <v-tooltip text="ReactJS">
        <template v-slot:activator="{ props }">
          <div
            v-bind="props"
            class="item"
            style="
              top: 15%;
              left: 40%;
              filter: blur(0.8px);
              transform: scale(1);
            "
          >
            <v-icon name="co-react" class="icono" />
          </div>
        </template>
      </v-tooltip>
      <v-tooltip text="Docker">
        <template v-slot:activator="{ props }">
          <div
            v-bind="props"
            class="item"
            style="
              top: 40%;
              left: 75%;
              filter: blur(1px);
              transform: scale(1.5);
            "
          >
            <v-icon name="co-docker" class="icono" />
          </div>
        </template>
      </v-tooltip>
    </Principal>
    <SobreMi />
    <Projects />
    <Experience />
    <Certifications />
    <Contact />
  </div>
</template>

<script setup>
import Principal from "@/components/HomeComponent/Principal.vue";
import Header from "@/components/headerComponent/Header.vue";
import TitlePrincipal from "../components/HomeComponent/TitlePrincipal.vue";
import SobreMi from "@/components/MeComponent/SobreMi.vue";
import Projects from "../components/MyProjects/Projects.vue";
import Contact from "../components/ContactComponent/Contact.vue";
import Experience from "@/components/ExpComponent/Experience.vue";
import Certifications from "@/components/CertificationsComponent/Certifications.vue";
</script>

<style scoped lang="scss">
.title {
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  font-size: 96px;
  color: white;
  user-select: none;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
}
.item {
  width: 50px;
  height: 50px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 90000;
  transition: filter 0.5s;
  img {
    width: 30px;
    height: 30px;
  }
}
.item:hover {
  filter: blur(0) !important;
}
.icono {
  color: white;
  width: 30px;
  height: 30px;
}
</style>