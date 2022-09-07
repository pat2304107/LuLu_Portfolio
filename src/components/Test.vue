<template>
  <div class="block" v-show="isShow">HELLO VUE</div>
  <button @click="isShow = !isShow">Toggle</button>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.block {
  width: 200px;
  height: 100px;
  border-left-style: solid;
  border-right-style: solid;
}
</style>
