<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import MainPage from './components/MainPage.vue';
import MdwPage from './components/MdwPage.vue';
import Test from './components/Test.vue';
</script>

<script>
export default {
  data() {
    return {
      MdwPageIsShow: false,
    };
  },
  methods: {
    MdwPageShowing: function () {
      this.MdwPageIsShow = true;
    },
  },
};
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=M PLUS 1p';
</style>

<template>
  <MainPage @show-mdw-page="MdwPageShowing" />
  <MdwPage v-show="MdwPageIsShow" v-bind:mdw-page-show="MdwPageIsShow" />
  <!-- <Test /> -->
</template>
