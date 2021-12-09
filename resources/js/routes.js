import ExampleComponent from "./components/ExampleComponent";
import VueRouter from "vue-router";
import SecondComponent from "./components/SecondComponent";

const routes = [
    {
        path: '/',
        component: ExampleComponent
    },
    {
        path: '/home',
        component: SecondComponent
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;
