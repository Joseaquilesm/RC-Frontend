import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)
app.config.globalProperties.filters = {
    formatCurrency(value) {
        return new Intl.NumberFormat("es-DO",{
        style: "currency",
        currency: "DOP",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
        }).format(value)
      }
}
app.use(router)


app.mount('#app')
