<template>
  <div class="fixed z-10 w-full text-white" :class="navbarBgColor">
    <div
      class="container px-20 mx-auto font-medium flex justify-between items-center py-6"
    >
      <div class="flex justify-around items-center">
        <div v-show="logo === 'white'" class="flex">
          <img src="@/assets/images/logo.svg" alt="logo" />
          <img src="@/assets/images/name.svg" alt="name" class="ml-2" />
        </div>

        <div v-show="logo === 'black'" class="flex">
          <img src="@/assets/images/logo-blue.svg" alt="logo" />
          <img src="@/assets/images/name-black.svg" alt="name" class="ml-2" />
        </div>

        <div v-show="logo === 'lightBlue'" class="flex">
          <img src="@/assets/images/logo-light-blue.svg" alt="logo" />
          <img src="@/assets/images/name-black.svg" alt="name" class="ml-2" />
        </div>

        <div class="ml-12 mr-3">
          <a href="#" class="hover:underline">For Teams</a>
        </div>

        <div>
          <a href="#" class="hover:underline">For Individuals</a>
        </div>
      </div>

      <div class="flex font-semibold">
        <a href="#" class="hover:underline">Sign In</a>
        <a href="#" class="ml-5 hover:underline">Sign up</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  props: {
    navbarBgColor: {
      type: String,
    },
    logo: {
      type: Boolean,
    },
    navbarName: {
      type: String,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
