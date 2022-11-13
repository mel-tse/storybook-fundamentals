<template>
  <div>
    <button :class="theme" class="px-12 py-4 capitalize ease-in-out duration-300">
      {{text}}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    }

  }
};
</script>

<style>
.opacity-40 {
  opacity: 0.4;
}
.border-1 {
  border: 1px solid;
}
body {
  font-family: 'arial';
}
</style>
