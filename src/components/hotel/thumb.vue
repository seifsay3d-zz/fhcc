<template>
  <div class="hotel-thumb">
    <figure :style="{ 'background': 'url(' +hotel.images[0].small+ ') no-repeat center center' }">
      <div class="has-offer">Great offer</div>
      <div class="has-button-right">
        <icon name="heart"></icon>
      </div>      
    </figure>
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
.hotel-thumb{
  position: relative;
  .has-offer{
    display:inline-block;
    position: absolute;
    top: 10px;
    left:0px;
    padding:3px;
    background:$secondary;
    color:white;
    text-transform:uppercase;
    font-size:0.9rem;
    &::before{
      position: absolute;
      right:0;
      width:10px;
      height:10px;
      background:green !important;
      z-index:2;
    }
  }
  .has-button-right{
    position: absolute;
    right:10px;
    top:10px;
    color:white;
    &:hover{
      color:red;
      cursor:pointer;
    }
  }
}
figure{
  margin:0px;
  padding:0px;
  background-size:cover !important;
  width:100%;
  min-height:230px;
}
</style>