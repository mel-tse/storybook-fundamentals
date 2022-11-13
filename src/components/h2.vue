<template>
  <div>
    <div :smSize="smSize" :class="[smSize ? 'h2-sm' : 'h2-lg']">
      <h2>{{ text }}</h2>
    </div>
    <div class="pt-4 text-sm">
      <div class="text-bold">H2</div>
      <div>
        Arial Bold
        <div v-if="smSize">
          Mobile
          <span class="text-bold">20px</span>
          Line spacing
          <span class="text-bold">20px</span>
        </div>
        <div v-else>
          Desktop
          <span class="text-bold">50px</span>
          Line spacing
          <span class="text-bold">50px</span>
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
    smSize: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.h2-sm {
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
}

.h2-lg {
  font-size: 50px;
  font-weight: bold;
  line-height: 50px;
}
</style>
