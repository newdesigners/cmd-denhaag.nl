<template>
  <section class="container">
    <div class="relative overflow-hidden w-full pt-[141%]">
      <embed width="2480px" height="3508px" class="absolute top-0 left-0 right-0 bottom-0 w-full h-full" src="/pdf/event-schedule.pdf" />
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    window.open('/pdf/event-schedule.pdf', '_self');
  },
};
</script>