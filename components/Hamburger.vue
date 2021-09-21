<template>
  <div
    id="burger-wrapper"
    class="flex justify-center items-center rounded-full pl-3 pb-5"
    :class="classes"
  >
    <tasty-burger-button
      :type="type"
      :size="size"
      :color="color"
      :active-color="activeColor"
      :active="isActive"
      v-on:toggle="onToggle"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "spin",
      isActive: false,
      size: "xs",
      color: "#F2F2F2",
      activeColor: "#F2F2F2F2"
    };
  },
  props: {
    classes: String,
  },
  methods: {
    onToggle(active) {
      this.$parent.$refs.header.classList.toggle('header--open');
    },
  }
};
</script>

<style scoped>
  .hamburger:focus, .hamburger:hover {
    @apply opacity-100;
  }
</style>