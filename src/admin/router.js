import Vue from "vue";
import  VueRouter from "vue-router";

Vue.use(VueRouter);

import about from './components/about.vue';
import aboutView from './components/aboutView.vue';

const routes = [
  {
    path: '/',
    component: about
  },
  {
    path: '/view/:about',
    component: aboutView
  }

];

export default new VueRouter({ routes, mode: 'history' });