<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <span>$ Max Price</span>
        <slider prefix="$" :max="500" v-model="maxPrice"></slider>
      </div>
      <div class="column">
        <span><icon name="smile-o"></icon> Min Rating</span>
        <slider classNames="is-primary" :max="5" v-model="minRating"></slider>
      </div>
      <div class="column">
        <span><icon name="location-arrow"></icon> Distance from city center</span>
        <slider suffix="km" v-model="minDistance"></slider>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <label for="stortHotels">Sort by</label>
        <select id="stortHotels" v-model="sortBy">
          <option :value="null">Best Supplier & price</option>
          <option value="Asc">Price Asc</option>
          <option value="Desc">Price Desc</option>
        </select>
        {{hotels.length}} hotels, <a href="">56 with great deals</a>
      </div>
    </div>
    <div v-for="hotel in hotels">
      <hotel :hotel="hotel"></hotel>
    </div>
    <div v-if="hotels.length < 1">
      <p>No results found</p>
    </div>
  </div>
</template>
<script>
  import hotel from '@/components/hotel/item';
  
  import slider from '@/components/utils/slider';

  export default{
    components: {
      hotel,
      slider,
    },
    data: function data() {
      return {
        sortBy: null,
        maxPrice: 250,
        minRating: 5,
        minDistance: 10,
      };
    },
    computed: {
      hotels: function hoteList() {
        return this.$store.getters.allProducts;
      },
    },
    watch: {
      sortBy: function sortHotels() {
        this.$store.commit('SORT_HOTELS', {
          field: 'totalRate',
          dir: this.sortBy,
        });
      },
      maxPrice: function filterHotels() {
        this.$store.commit('FILTER_HOTELS', {
          field: 'totalRate',
          value: parseInt(this.maxPrice, 10),
        });
      },
      minRating: function filterHotels() {
        this.$store.commit('FILTER_HOTELS', {
          field: 'starRating',
          value: parseInt(this.minRating, 10),
        });
      },
    },
  };
</script>
<style lang="scss" scoped>
  select{
    position: relative;
    appearance:none;
    background:white;
    padding:10px;
    border:none;
    border-radius:0px;
    margin:0px 5px;
  }
</style>
