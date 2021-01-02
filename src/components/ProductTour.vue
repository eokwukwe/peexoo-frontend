<template>
  <section class="bg-peeblue">
    <div class="container mx-auto px-32 pt-20 pb-28">
      <h1 class="text-5xl text-peeblue-100 font-semibold">
        File storage and sharing are <br />
        just the beginning
      </h1>

      <div class="mb-20 flex mt-14">
        <div class="w-2/5">
          <div class="sticky top-1/4">
            <div class="w-full">
              <ul
                class="pr-32"
                v-scroll-spy-active="{ class: 'customActive' }"
                v-scroll-spy-link
              >
                <li
                  class="text-white text-opacity-50 hover:cursor-pointer hover:text-white pl-5 border-l-2 border-transparent border-l-2 border-transparent"
                >
                  <a href="#">
                    <h1 class="font-semibold text-3xl mb-3">Be organized</h1>

                    <p>
                      Bring traditional files, cloud content, Dropbox Paper
                      docs, and web shortcuts together in one place—and work the
                      way that works for you.
                    </p>
                  </a>
                </li>

                <li
                  class="text-white text-opacity-50 hover:cursor-pointer hover:text-white pl-5 border-l-2 border-transparent my-8"
                >
                  <a href="#">
                    <h1 class="font-semibold text-3xl mb-3">Stay focused</h1>

                    <p>
                      Personalized suggestions give you files and folders when
                      you need them so you spend less time searching.
                    </p>
                  </a>
                </li>

                <li
                  class="text-white text-opacity-50 hover:cursor-pointer hover:text-white pl-5 border-l-2 border-transparent"
                >
                  <a href="#">
                    <h1 class="font-semibold text-3xl mb-3">Get in sync</h1>

                    <p>
                      Coordinate with your team and push projects forward with
                      the tools you use every day—all within Dropbox.
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="w-3/5" v-scroll-spy>
          <div>
            <img src="@/assets/images/home-producttour-1.png" alt="product-1" />
          </div>

          <div class="my-5">
            <img src="@/assets/images/home-producttour-2.png" alt="product-2" />
          </div>

          <div class="px-7">
            <img src="@/assets/images/home-producttour-3.png" alt="product-3" />
          </div>
        </div>
      </div>

      <div class="pl-5 mb-28">
        <div style="height: 3px" class="w-full bg-white opacity-30"></div>
      </div>

      <div class="px-20 flex justify-between items-baseline">
        <div class="flex-1">
          <h1 class="text-peeblue-100 font-semibold text-5xl">
            Learn more about the benefits <br />
            of Dropbox
          </h1>
        </div>

        <div>
          <button class="bg-white text-black py-2 px-14">See features</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductTour",

  data: () => ({
    section: 0,
  }),
};
</script>

<style scoped>
  .customActive {
    border-left: 2.5px solid white;
    /* padding-left: 1.2rem; */
    transition: all 0.5s;
    color: white;
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .tour-list {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }

  /* .customActive:hover {
                                                  color: white;
                                                } */
</style>

