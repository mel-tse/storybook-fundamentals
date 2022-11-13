<template>
  <div>
    <div class="blog-cards text-black-300 p-4">
      <img class="object-cover blog-cards-img w-full" :src="imgLink">
      <div class="py-4">
        <div class="text-xs">
          04.10.2022
        </div>
        <div class="blog-cards-text pt-2 text-xl">
          {{text}}
        </div>
        <div class="pt-3 text-sm text-blue-100 flex items-center"><span class="mr-1">Read more</span><Arrow /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from '../components/Arrow.vue';

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
    imgLink: {
      type: String,
      required: true,
    }
  },
  components: {
      Arrow
  }
};
</script>

<style>
.blog-cards {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  .blog-cards {
    width: 409px;
  }
}

.blog-cards-img {
  height: 369px;
}

.blog-cards-text {
  line-height: 1.25rem;
  width: 80%;
  font-weight: bold;
  text-transform: uppercase;
}

</style>
