<template>
  <div>
    <div class="flex flex-wrap">
      <div v-for="item in colours" :key="item.id">
        <div class="mr-4 shadow-lg rounded">
          <div class="text-white text-sm p-8" :class="item.background">
            {{ item.name }}
          </div>
          <div class=" py-2 text-center text-sm">
            {{ item.hex }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colours: [
        {
          id: 1,
          background: "bg-blue-100",
          name: "blue-100",
          hex: "#2C5AFF",
        },
        {
          id: 2,
          background: "bg-purple-100",
          name: "purple-100",
          hex: "#7C4FFF",
        },
        {
          id: 3,
          background: "bg-black-100",
          name: "black-100",
          hex: "#2F2F2F",
        },
        {
          id: 4,
          background: "bg-black-200",
          name: "black-200",
          hex: "#3C3C3B",
        },
        {
          id: 5,
          background: "bg-black-300",
          name: "black-300",
          hex: "#3A3A3A",
        },
      ],
    };
  },
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
  font-family: "arial";
}
</style>
