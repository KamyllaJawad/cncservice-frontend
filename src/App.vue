<template>
  <NavbarCustom/>
  <!-- <HeroSection/> -->
  <AboutSection/>
  <!-- <ServiceSection/> -->
  <ServiceSectionTest/>
  <CustomersSection/>
  <ContactSection/>
  <FooterCustom/>

</template>

<script>
import NavbarCustom from './components/NavbarCustom.vue'
import FooterCustom from './components/FooterCustom.vue'
// import HeroSection from './components/HeroSection.vue'
import CustomersSection from './components/CustomersSection.vue'
// import ServiceSection from './components/ServiceSection.vue'
import ContactSection from './components/ContactSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServiceSectionTest from './components/ServiceSectionTest.vue'


export default {
  name: 'App',
  components: {
    NavbarCustom,
    FooterCustom,
    // HeroSection,
    CustomersSection,
    // ServiceSection,
    ContactSection,
    AboutSection,
    ServiceSectionTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
