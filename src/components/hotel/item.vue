<template>
  <div class="hotel">
    <div class="columns is-gapless">
      <div class="column is-3">
        <hotel-thumb :hotel="hotel"></hotel-thumb>    
      </div>
      <div class="column is-6">
        <hotel-data :hotel="hotel"></hotel-data>
      </div>
      <div class="column">
        <offers :hotel="hotel"></offers>
      </div>
    </div>
  </div>
</template>
<script>
  import hotelThumb from '@/components/hotel/thumb';
  import hotelData from '@/components/hotel/data';
  import offers from '@/components/hotel/offers';

  export default{
    props: {
      hotel: {},
    },
    components: {
      hotelThumb,
      hotelData,
      offers,
    },
  };
</script>
<style lang="scss">
  .hotel{
    background:white;
    margin-bottom:20px;
  }
</style>