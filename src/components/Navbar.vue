<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
<template>
  <nav
    class="fixed top-0 z-40 z-10 flex w-full flex-wrap items-center justify-between p-12"
  >
    <div class="mr-6 flex flex-shrink-0 items-center text-white">
      <span class="tracking-tight">
        <a href="/">
          <img src="/image/owl_logo_2x.png" class="w-34 h-12 object-cover" />
        </a>
      </span>
    </div>
    <div class="block lg:hidden">
      <button
        @click="isOpen = !isOpen"
        class="flex items-center rounded border border-gray-700 px-3 py-2 text-gray-500 hover:border-white hover:text-white"
      >
        <svg
          class="h-3 w-3 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path
            :class="{ hidden: isOpen, block: !isOpen }"
            class="fill-current"
            d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z"
          />
          <path
            :class="{ hidden: !isOpen, block: isOpen }"
            class="fill-current"
            d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z"
          />
        </svg>
      </button>
    </div>
    <div
      :class="{ hidden: !isOpen }"
      class="w-full flex-grow lg:flex lg:w-auto lg:items-center"
    >
      <div class="text-center text-sm lg:flex-grow">
        <a
          href="#who-we-are"
          class="mt-4 mr-12 block text-gray-700 hover:text-gray-500 lg:mt-0 lg:inline-block"
        >
          Who we are
        </a>
        <a
          href="#services"
          class="mt-4 mr-12 block text-gray-700 hover:text-gray-500 lg:mt-0 lg:inline-block"
        >
          Services
        </a>
        <a
          href="#case-studies"
          class="mt-4 mr-12 block text-gray-700 hover:text-gray-500 lg:mt-0 lg:inline-block"
        >
          Case studies
        </a>
      </div>
      <div>
        <a
          href="#work-with-us"
          class="mt-4 inline-block rounded-tl-lg rounded-br-lg bg-gradient-to-r from-cyan-custom via-sky-blue to-blue-custom px-8 py-3 text-sm leading-none text-white transition delay-150 ease-in-out hover:scale-110 hover:border-transparent hover:text-gray-700 lg:mt-0"
        >
          Work with us
        </a>
      </div>
    </div>
  </nav>
</template>
