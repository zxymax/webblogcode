import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "@/views/Home";

import siteNavigation from './moudles/siteNavigation';
import music from './moudles/music';

const routes = new VueRouter({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes: [{
        path: "/",
        name: 'home',
        component: Home,
        redirect: "siteNavigation",
        children: [
            ...siteNavigation,
            ...music
        ]
    }]
});

export default routes;