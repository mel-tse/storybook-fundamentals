<template>
  <div>
    <div :smSize="smSize" :class="[smSize ? 'h1-sm' : 'h1-lg']">
      <h1>{{ text }}</h1>
    </div>
    <div class="pt-4 text-sm">
      <div class="text-bold">H1</div>
      <div>
        Arial Bold
        <div v-if="smSize">
          Mobile
          <span class="text-bold">30px</span>
          Line spacing
          <span class="text-bold">30px</span>
        </div>
        <div v-else>
          Desktop
          <span class="text-bold">74px</span>
          Line spacing
          <span class="text-bold">74px</span>
        </div>
      </div>
      Use cases: Hero Home<br />
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
    smSize: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.h1-sm {
  font-size: 31px;
  font-weight: bold;
  line-height: 31px;
}

.text-bold {
  font-weight: bold;
}
.h1-lg {
  font-size: 74px;
  font-weight: bold;
  line-height: 74px;
}
</style>
