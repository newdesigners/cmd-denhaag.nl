<template>
  <div
    id="burger-wrapper"
    class="flex justify-center items-center rounded-full pl-0.625"
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
      size: "s",
      color: "#2D2D2D",
      activeColor: "#2D2D2D"
    };
  },
  props: {
    classes: String,
  },
  methods: {
    onToggle(active) {
      this.$parent.$refs.header.classList.toggle('header--open');
    },
    onMenu(active) {
      this.isActive = active;
    }
  },
};
</script>

<style>
</style>