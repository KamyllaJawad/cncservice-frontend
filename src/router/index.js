import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue';
import AboutSection from '../components/HomePage/AboutSection.vue';
import ServiceSection from '../components/HomePage/ServiceSection.vue';
import CustomersSection from '../components/HomePage/CustomersSection.vue';
import ContactSection from '../components/HomePage/ContactSection.vue';
import ProductsView from '../components/ServicesPages/ProductsView.vue'; 
// import ServiceTechnicalAssistance from '../components/ServicesPages/ServiceTechnicalAssistance.vue';
// import ServiceCorrectiveMaintenance from '../components/ServicesPage/ServiceCorrectiveMaintenance.vue';
// import ServiceIndustrialAutomation from '../components/ServicesPage/ServiceIndustrialAutomation.vue';
// import ServiceReformRetrofitting from '../components/ServicesPages/ServiceReformRetrofitting.vue';


const routes = [
  { path: '/', component: HomeComponent },
  { path: '/about', component: AboutSection },
  { path: '/services', component: ServiceSection },
  { path: '/customers', component: CustomersSection },
  { path: '/contact', component: ContactSection },
  { path: '/products', component: ProductsView } ,
  // { path: '/corrective-maintenance', component: ServiceCorrectiveMaintenance },
  // { path: '/industrial-automation', component: ServiceIndustrialAutomation },
  // { path: '/reform-retrofitting', component: ServiceReformRetrofitting },
  // { path: '/technical-assistance', component: ServiceTechnicalAssistance }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
