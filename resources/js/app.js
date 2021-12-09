require('./bootstrap');
import router from "./routes";
import VueRouter from "vue-router";
import index from './index';

window.Vue = require('vue').default;

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    components: {
        'index': index
    }
});
