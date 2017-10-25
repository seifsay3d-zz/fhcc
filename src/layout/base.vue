<template>
  <div>
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>
<script>
  import vHeader from '@/layout/header';

  export default{
    components: {
      vHeader,
    },
  };
</script>
<style lang="scss">
@import '../assets/vars.scss';
@import '../assets/grid.scss';
@import '../assets/base.scss';
@import '../assets/reset.scss';
</style>