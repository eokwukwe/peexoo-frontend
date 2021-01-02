<template>
  <div id="app" class="font-serif">
    <navbar msg="Welcome to Your Vue.js App" />
    <side-content
      class="transform ease-in-out transition-all duration-300"
      :class="showSideContent ? 'translate-x-0' : 'translate-x-full'"
    ></side-content>
    <hero></hero>
    <hero-brand id="hero-brand"></hero-brand>
    <product-tour id="product-tour"></product-tour>
    <product-category></product-category>
    <page-footer></page-footer>
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import HeroBrand from "./components/HeroBrand.vue";
import PageFooter from "./components/PageFooter.vue";
import SideContent from "./components/SideContent.vue";
import ProductTour from "./components/ProductTour.vue";
import ProductCategory from "./components/ProductCategory.vue";

export default {
  name: "App",

  components: {
    Hero,
    Navbar,
    HeroBrand,
    PageFooter,
    SideContent,
    ProductTour,
    ProductCategory,
  },

  data: () => ({
    showSideContent: true,
  }),

  mounted: function () {
    this.toggleSideContent();
  },

  methods: {
    toggleSideContent() {
      window.addEventListener("scroll", () =>
        window.scrollY >= 600
          ? (this.showSideContent = false)
          : (this.showSideContent = true)
      );
    },
  },
};
</script>

<style>
</style>
