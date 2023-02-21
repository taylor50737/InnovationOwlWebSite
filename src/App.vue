<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import WhoWeAre from "./components/WhoWeAre.vue";
import Services from "./components/Services.vue";
import CaseStudies from "./components/CaseStudies.vue";
import WorkWithUs from "./components/WorkWithUs.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Home,
    WhoWeAre,
    Services,
    CaseStudies,
    WorkWithUs,
    Footer,
  },
};
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <Home />
    <WhoWeAre />
    <Services />
    <CaseStudies />
    <WorkWithUs />
    <Footer />
  </div>
</template>

<style scoped>
#home {
  background-size: 80%, cover;
  background-position: top -2% right -75%, top right;
}
#services {
  background-size: 100% 60%;
  background-position: bottom;
}
#work-with-us {
  background-size: 50%;
  background-position: top 20% right 30%;
}
</style>
