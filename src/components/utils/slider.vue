<template>
  <div>
    <span ref="label">{{prefix}}{{internalValue}}{{suffix}}</span>
    <input type="range" :class="classNames" @mouseup="updateValue" v-model="internalValue" step="1" :max="max" :min="min">
  </div>
</template>
<script>
export default{
  props: {
    classNames: '',
    prefix: '',
    suffix: '',
    value: null,
    min: 0,
    max: {
      default: 100,
    },
  },
  data: function data() {
    return {
      internalValue: null,
    };
  },
  created: function created() {
    this.internalValue = this.value;
  },
  methods: {
    updateValue: function updateValue() {
      this.$emit('input', this.internalValue);
    },
  },
  watch: {
    internalValue: function updateSliderLabel() {
      const element = this.$refs.label;
      const precentage = (parseInt(this.internalValue, 10) / parseInt(this.max, 10) * 100) - 0.5;
      element.style.left = `${precentage}%`;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../assets/vars.scss';
$color:$primary;
span{
  position: relative;
  display:inline-block;
  left: 10px;
  width:100%; 
}
input[type=range]{
  background:transparent;
  appearance:none;
  width:100%;
  // border-radius:50%;
}
input[type=range]::-webkit-slider-thumb {
  appearance: none;
}
input[type=range]:focus {
  outline: none;
}

input[type=range]::-webkit-slider-thumb {
  appearance: none;
  border: 2px solid $color;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  margin-top: -7px;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 2px;
  cursor: pointer;
  background:$color;
}

input[type=range].is-primary::-webkit-slider-thumb {
  border-color:$primary;
}
input[type=range].is-primary::-webkit-slider-runnable-track{
  background:$primary;
}
</style>