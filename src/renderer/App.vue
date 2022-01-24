<template>
  <div id="app">
		<left-menu />
    <router-view class="router-container" />
  </div>
</template>

<script>
import LeftMenu from './components/general/LeftMenu'
export default {
  name: 'iconize',
  components: {LeftMenu}
}
</script>

<style>
  /* CSS */
  #app{
		display:flex;
		flex-direction:row;
		min-height: 600px;
		height: 100%;
		width: 100%;
  }
	.router-container{
		height: 100%;
		width: 100%;
		z-index: 1;
	}
</style>
