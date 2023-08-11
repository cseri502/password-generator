import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopy as s } from '@fortawesome/free-solid-svg-icons'
import { faCopy as r } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(s, r, faGithub, faLinkedin)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
