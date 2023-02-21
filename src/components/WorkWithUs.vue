<script>
export default {
  data() {
    return {
      workWithUs: "/image/contact_logo_bg.png",
    };
  },
};
</script>
<template>
  <div
    id="work-with-us"
    class="relative flex h-screen items-center justify-center bg-no-repeat"
    :style="{ backgroundImage: `url(${workWithUs})` }"
  >
    <div>
      <h6 class="font-['Ubuntu'] text-gray-500">Work with us</h6>
      <br />
      <h1 class="font-['Ubuntu'] text-6xl font-bold text-sky-blue">
        You have found us.
      </h1>
      <h1 class="font-['Ubuntu'] text-6xl font-bold text-sky-blue">
        Let's talk.
      </h1>
      <br /><br /><br /><br />
      <div class="grid grid-cols-3 justify-between gap-36">
        <a
          href="https://wa.me/85265962899"
          target="_blank"
          class="leading-2 rounded-tl-lg rounded-br-lg bg-gradient-to-r from-cyan-custom via-sky-blue to-blue-custom py-3 pl-8 pr-20 text-white hover:scale-110 transition delay-150 ease-in-out"
        >
          <div class="relative">
            <div class="font-['Ubuntu']">
              <div class="text-xs">Byrant</div>
              <div class="text-xl">(+852) 6596 2899</div>
            </div>
            <img
              class="absolute -top-20 left-28 scale-50"
              src="/image/conteat_owl_01.png"
            />
          </div>
        </a>
        <a
          href="https://wa.me/85251947007"
          target="_blank"
          class="leading-2 rounded-tl-lg rounded-br-lg bg-gradient-to-r from-cyan-custom via-sky-blue to-blue-custom py-3 pl-8 pr-20 text-white hover:scale-110 transition delay-150 ease-in-out"
        >
          <div class="relative">
            <div class="font-['Ubuntu']">
              <div class="text-xs">Chris</div>
              <div class="text-xl">(+852) 5194 7007</div>
            </div>
            <img
              class="absolute -top-20 left-28 scale-50"
              src="/image/conteat_owl_02.png"
            />
          </div>
        </a>
        <a
          href="https://wa.me/85251136408"
          target="_blank"
          class="leading-2 rounded-tl-lg rounded-br-lg bg-gradient-to-r from-cyan-custom via-sky-blue to-blue-custom py-3 pl-8 pr-20 text-white hover:scale-110 transition delay-150 ease-in-out"
        >
          <div class="relative">
            <div class="font-['Ubuntu']">
              <div class="text-xs">Hugo</div>
              <div class="text-xl">(+852) 5114 6408</div>
            </div>
            <img
              class="absolute -top-16 left-28 scale-50"
              src="/image/conteat_owl_03.png"
            />
          </div>
        </a>
      </div>
    </div>
    <div
      class="absolute bottom-0 h-28 w-full bg-gradient-to-r from-cyan-custom via-sky-blue to-blue-custom py-8 text-center font-['Ubuntu'] leading-5 text-white"
    >
      <h6 class="text-xs">Or By Mail</h6>
      <a href="mailto:cs@innovationowl.com" class="text-3xl underline"
        >cs@innovationowl.com</a
      >
    </div>
  </div>
</template>
