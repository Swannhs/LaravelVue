import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables";

const routes = [
    {
        path: '/',
        component: Bookables
    }
]

const router = new VueRouter({
    routes, // routes: routes, is same
    mode: 'history'
})

export default router;
