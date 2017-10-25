<template>
  <div class="wrapper">
    <div v-for="offer in hotel.offers">
      <div class="best-offer has-text-centered" v-if="offer.isBest">
        <div class="has-secondary-text has-stroked-text">$115</div>
        <div class="is-size-3 "><b>${{offer.totalRate}}</b></div>
        <div class="has-success-text" v-if="offer.hasFreeCancelation"> free cancelation</div>
        <button class="is-button is-large is-secondary">
          {{offer.provider.name}} <icon name="long-arrow-right"></icon>
        </button>
      </div>
      <div v-if="!offer.isBest">
        {{offer.provider.name}}  <span class="is-pulled-right">{{offer.totalRate}}</span>
      </div>
    </div>
    <div class="has-text-centered">
      <b>show details</b>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      hotel: {},
    },
  };
</script>
<style lang="scss" scoped>
  @import '../../assets/vars';
  .wrapper{
    padding:15px;
    border-left:2px dotted $gray;
  }
</style>