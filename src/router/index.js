//Define our routing rules
import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import EstimateView from "../views/EstimateView.vue"
import ResultView from "../views/ResultView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/about",
            name: "about",
            component:AboutView
        },
        {
            path: "/estimar",
            name: "estimar",
            component:EstimateView
        },
        {
            path: "/resultado",
            name: "Resultado",
            component:ResultView
        },
        	
    ]
})

export default router