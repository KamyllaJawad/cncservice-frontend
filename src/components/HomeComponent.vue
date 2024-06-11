<template>
    <AboutSection />
    <HeroSection />
    <CustomersSection />
    <ServiceSection />
    <ContactSection />
</template>

<script>
import AboutSection from './HomePage/AboutSection.vue';
import HeroSection from './HomePage/HeroSection.vue';
import ServiceSection from './HomePage/ServiceSection.vue';
import CustomersSection from './HomePage/CustomersSection.vue';
import ContactSection from './HomePage/ContactSection.vue';

export default {
    components: {
        AboutSection,
        HeroSection,
        ServiceSection,
        CustomersSection,
        ContactSection
    },
    name: 'HomeComponent'
}

</script>