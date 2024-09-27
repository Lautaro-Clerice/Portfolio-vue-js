import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './styles.scss'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoDocker,CoReact,CoSassAlt, IoLogoNodejs,BiGit,BiArrowRight,MdAlternateemail ,PrBook ,CoVueJs,FaNetworkWired ,BiTelephoneInbound , MdWorkoutline, BiWhatsapp, CoHtml5Shield,CoCss3Shiled, BiPersonCircle, CoJavascript,CoLaravel,CoPostgresql, CoFigma ,SiMongodb, CoTypescript, BiLinkedin , BiGithub} from "oh-vue-icons/icons";
import 'vuetify/dist/vuetify.min.css'
// Vuetify 
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueGtag from 'vue-gtag';
addIcons(CoDocker,BiPersonCircle, CoReact,CoVueJs, CoSassAlt, IoLogoNodejs,BiArrowRight, BiGit,MdAlternateemail ,PrBook , MdWorkoutline, BiTelephoneInbound ,FaNetworkWired, BiWhatsapp,  CoHtml5Shield, CoCss3Shiled, CoJavascript, CoLaravel, CoPostgresql, CoFigma, SiMongodb, CoTypescript, BiLinkedin, BiGithub);
const vuetify = createVuetify({
    components,
    directives,
  })
  
const app = createApp(App);
app.component("v-icon", OhVueIcon);


app.use(createPinia())
app.use(router)
app.mount('#app')
app.use(vuetify)
app.use(VueGtag, {
    config: { id: 'G-CVRN2YRYGF' } 
  }); 
  



document.addEventListener('DOMContentLoaded', function() {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        if (interBubble) {
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        }
        requestAnimationFrame(move);
    }

    window.addEventListener('mousemove', function(event) {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});
