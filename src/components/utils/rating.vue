<template>
  <div class="rating">
    <span v-for="i in [1,2,3,4,5]" v-bind:class="{ active: i <= value }">☆</span>
  </div>
</template>
<script>
  export default{
    props: {
      value: 0,
    },
  };
</script>
<style lang="scss">
@import '../../assets/vars';
.rating {
  display:block;
  color:$secondary;
}
.rating > span {
  &.active:before{
    content: "\2605";
    position: absolute;
  }
}
</style>