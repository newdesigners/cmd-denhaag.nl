<template>
  <svg width="738" height="450" viewBox="0 0 738 450" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <mask v-if="reverse" id="shape-mask-reverse">
        <path d="M63.2571 450L-5.3662e-06 3.05176e-05L738 38.8889L692.444 411.111L63.2571 450Z" fill="#FFF"/>
      </mask>
      <mask v-else id="shape-mask">
        <path d="M674.743 450L738 3.05176e-05L6.59376e-05 38.8889L45.5556 411.111L674.743 450Z" fill="#FFF"/>
      </mask>
    </defs>
    <image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" :href="escapedUrl" :mask="maskUrl" opacity="1"></image>
  </svg>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    transformImage(image, option) {
      if (!image) return "";
      if (!option) return image;
      
      let service = '/m/';

      return image + service + option;
    },
  },
  computed: {
    escapedUrl() {
      return this.transformImage(this.url, '740x0/smart/').replace(/&/g, "&amp;");
    },
    maskUrl() {
      return this.reverse ? 'url(#shape-mask-reverse)' : 'url(#shape-mask)';
    },
  },
};
</script>