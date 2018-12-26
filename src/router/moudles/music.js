// music
const music = () => import( /* webpackChunkName: "Music" */ '@/views/Music/Music');

export default [{
    path: '/music',
    component: music
}];