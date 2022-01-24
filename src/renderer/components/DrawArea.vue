<template>
	<div class="drawArea"> 
		<div class="container">
			<span class="menu-icons mdi mdi-square-edit-outline mdi-48px"></span>
		</div>
	</div>
</template>

<script>
export default {
  name: 'DrawArea'
}
</script>

<style scoped>
	.drawArea{
		display: flex;
		flex-direction: row;
	}
	.container{
		padding: 10vh;
		min-height: 500px;
		min-width: 500px;
		height: 100vh;
		width: 100%;
		background-color: #003265;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.menu-icons {
		margin: 0;
		cursor: pointer;
		color: white;
	}
</style>
