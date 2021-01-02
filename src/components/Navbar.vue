<template>
  <div class="fixed z-10 w-full bg-peeblue-100">
    <div class="container px-20 mx-auto flex justify-between items-center py-6 px-2">
      <div class="flex justify-around items-center">
        <div class="flex">
          <img src="@/assets/images/logo.svg" alt="logo" />
          <img src="@/assets/images/name.svg" alt="name" class="ml-2" />
        </div>
        <div class="ml-12 mr-3">For Teams</div>
        <div>For Individuals</div>
      </div>
      <div class="flex text-gray-500 font-semibold">
        <p>Sign In</p>
        <p class="ml-5">Sign up</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
