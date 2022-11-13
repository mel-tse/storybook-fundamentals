<template>
  <div>
    <div :showPag="showPag" class="relative px-32 pt-32 pb-10 w-full hero">
      <img class="hero-img object-cover absolute top-0 left-0 h-full w-full" :src="imgLink">
      <div class="relative h-full justify-between flex-col flex">
        <div>
        <h1 class="pb-4 h1-lg uppercase text-black-300">
          {{text}}
        </h1>
        <p class="hero-p">
          Maecenas sed ultrices dolor, at laoreet libero. Suspendisse pellentesque sapien id neque aliquet.
        </p>
        </div>
        <div v-if="showPag">
          <div class="flex justify-end">
          <img src="../assets/img-number.png">
          </div>
        </div>
        <div v-else>
          <div class="flex justify-center">
            <div class="dot bg-black-200 mr-2"></div>
            <div class="dot opacity-40 bg-black-200 mr-2"></div>
            <div class="dot opacity-40 bg-black-200 mr-2"></div>
            <div class="dot opacity-40 bg-black-200 mr-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    imgLink: {
      type: String,
      required: true,
    },
    showPag: {
      type: Boolean,
      default: false,
    }

  }
};
</script>

<style>
.hero {
  height: 375px;
}

.dot {
  height: 11px;
  width: 11px;
  border-radius: 100%;
}

.p-28 {
  padding-bottom: 28rem;
}

.hero-p {
  width: 30%;
}
</style>
