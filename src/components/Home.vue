<script>
export default {
  data() {
    return {
      isOpen: false,
      banner: "/image/banner.png",
      bannerBg: "/image/banner_bg.png",
    };
  },
};
</script>
<template>
  <div
    id="home"
    class="flex h-screen items-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: `url(${banner}), url(${bannerBg})` }"
  >
    <h1 class="ml-48 font-['Ubuntu'] text-7xl font-bold text-sky-blue">
      We Meet Clients<br />Specific Needs
    </h1>
  </div>
</template>
