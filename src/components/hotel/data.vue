<template>
  <div class="wrapper">
    <h3>{{hotel.name}}</h3>
    <rating :value="hotel.starRating"></rating>
    <ul class="data-list">
      <li class="has-primary-text">
        <icon name="location-arrow"></icon> <a href="">120 m to city center</a>
      </li>
      <li class="has-success-text">
        <icon name="smile-o"></icon> Very Good 7.8
      </li>
    </ul>
    <tags></tags>
  </div>
</template>
<script>
  import tags from '@/components/utils/tags';
  import rating from '@/components/utils/rating';

  export default{
    props: {
      hotel: {},
    },
    components: {
      tags,
      rating,
    },
  };
</script>
<style lang="scss" scoped>
  @import '../../assets/vars.scss';
  .wrapper{
    padding:5px 10px;
    .data-list{
      list-style:none;
      padding:0px;
      a{
        color:$primary;
        text-decoration:none;
      }
    }
  }
</style>