import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ProjectsList from '../components/ProjectsList.vue'
import AboutPage from '../components/AboutPage.vue'
import ContactPage from '../components/ContactPage.vue'
import SkillPage from '../components/SkillPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/projects', component: ProjectsList },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/skill', component: SkillPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
