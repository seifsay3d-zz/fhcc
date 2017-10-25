<template>
  <nav>
    <div class="container">
      <ul>
        <li>
          <a href="http://company.findhotel.net/" class="brand-logo">
            <img alt="Find Hotel Logo" class="is-image"
            src="http://company.findhotel.net/images/findhotel_logo_hires_360.png">
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
@import '../assets/vars.scss';
nav{
  background:$primary;
  margin-bottom:10px;
  ul{
    list-style:none;
    padding:10px;
    margin:0px;
    .brand-logo{
      display:inline-block;
      max-width:150px;
      height:auto;
    }
  }
}
</style>