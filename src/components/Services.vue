<script>
export default {
  data() {
    return {
      services: "/image/services_bg.png",
    };
  },
};
</script>
<template>
  <div
    id="services"
    class="h-screen bg-no-repeat"
    :style="{ backgroundImage: `url(${services})` }"
  >
    <div class="flex">
      <div class="ml-48 mt-28 h-1/2 w-1/2 bg-contain bg-no-repeat">
        <h6 class="font-['Ubuntu'] text-gray-500">Services</h6>
        <br />
        <div class="font-['Ubuntu'] text-7xl font-bold text-sky-blue">
          The Ultimate Guide
        </div>
        <div class="font-['Ubuntu'] text-7xl font-bold text-sky-blue">
          to Help You, We Offer
        </div>
        <div class="font-['Ubuntu'] text-7xl font-bold text-sky-blue">
          Different Services.
        </div>
        <div class="mt-40 grid grid-cols-2 justify-between gap-16">
          <div>
            <h6 class="text-gray-500">01</h6>
            <h1 class="font-['Ubuntu'] text-3xl font-bold text-sky-blue">
              Website Design
            </h1>
          </div>
          <div>
            <h6 class="text-gray-500">02</h6>
            <h1 class="font-['Ubuntu'] text-3xl font-bold text-sky-blue">
              Website Development
            </h1>
          </div>
          <div>
            <h6 class="text-gray-500">03</h6>
            <h1 class="font-['Ubuntu'] text-3xl font-bold text-sky-blue">
              e-Commerce
            </h1>
          </div>
          <div>
            <h6 class="text-gray-500">04</h6>
            <h1 class="font-['Ubuntu'] text-3xl font-bold text-sky-blue">
              Mobile Apps
            </h1>
          </div>
          <div>
            <h6 class="text-gray-500">05</h6>
            <h1 class="font-['Ubuntu'] text-3xl font-bold text-sky-blue">
              Web System
            </h1>
          </div>
          <div>
            <h6 class="text-gray-500">06</h6>
            <h1 class="font-['Ubuntu'] text-3xl font-bold text-sky-blue">
              Digital Marketing
            </h1>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <img
          class="mx-auto mt-28 h-auto w-4/5 drop-shadow-5xl"
          src="/image/services_img.png"
        />
      </div>
    </div>
  </div>
</template>
