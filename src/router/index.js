import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "@/views/Home";

import siteNavigation from './moudles/siteNavigation';
import music from './moudles/music';

const routes = new VueRouter({
    routes: [{
        path: "/",
        component: Home,
        children: [
            ...siteNavigation,
            ...music
        ]
    }]
});

export default routes;