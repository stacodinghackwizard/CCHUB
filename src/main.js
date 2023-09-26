import './assets/main.css'
import './assets/css/Login/login.css'
import './assets/css/Login/SignUp.css'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/elegant-icons.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/slicknav.min.css'
import './assets/css/style.css'

import './assets/js/jquery-3.3.1.min.js'
import './assets/js/bootstrap.min.js'
import './assets/js/jquery.magnific-popup.min.js'
import './assets/js/jquery.countdown.min.js'
import './assets/js/jquery.slicknav.js'
import './assets/js/owl.carousel.min.js'
import './assets/js/main.js'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css' // Import Bootstrap CSS
import 'bootstrap' // Import Bootstrap JS


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
