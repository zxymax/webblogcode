// siteNavigation
const siteNavigation = () => import( /* webpackChunkName: "siteNavigation" */ '@/views/siteNavigation/siteNavigation');

export default [{
    path: '/sitenavigation',
    component: siteNavigation
}];