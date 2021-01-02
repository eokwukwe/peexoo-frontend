<template>
  <div style="width: 35%" class="fixed top-0 right-0 h-screen py-8 px-16 bg-white z-20">
    <div class="flex justify-center font-semibold">
      <p class="mr-6">Sign In</p>
      <p>Download</p>
    </div>

    <div class="mt-32">
      <div class="mb-6">
        <p class="text-xl font-semibold">Sign up</p>
        <small
          >or
          <a class="text-peeblue-100 hover:underline" href="#"
            >sign in to your account</a
          ></small
        >
      </div>

      <form action="">
        <div class="mb-4">
          <input
            class="border pl-3 py-2 w-96"
            type="text"
            name="firstname"
            placeholder="First name"
          />
        </div>

        <div class="mb-6">
          <input
            class="border pl-3 py-2 w-96"
            type="text"
            name="lastname"
            placeholder="Lastname name"
          />
        </div>

        <div class="mb-6">
          <input
            class="border pl-3 py-2 w-96"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <div class="mb-6">
          <input
            class="border pl-3 py-2 w-96"
            type="text"
            name="password"
            placeholder="Password"
          />
        </div>

        <div class="mb-6">
          <input
            type="checkbox"
            name="termsandcondition"
            id="terms-conditions"
          />
          <label for="terms-conditions">
            I agree to
            <a href="#" class="text-peeblue-100 hover:underline">
              DropBox Terms
            </a>
          </label>
        </div>

        <div class="w-96">
          <button class="bg-peeblue-200 w-full py-2 text-white" type="submit">
            Sign up
          </button>
        </div>
      </form>

      <div class="w-96 mt-6">
        <button class="flex justify-center items-center w-full py-2 border" type="submit">
        <img class="w-6 h-6" src="@/assets/images/google.svg" alt="goole">
          <span class="ml-3">Sign up with Google</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideContent",
};
</script>

<style>
</style>
