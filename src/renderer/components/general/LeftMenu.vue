<template>
  <div class="leftBar">
		<router-link  tag="div" to="/">
			<span class="menu-icons mdi mdi-home mdi-36px" />
		</router-link>
		<span class="menu-icons mdi mdi-tune-variant mdi-36px" />
		<div class="menu">
			<span class="menu-icons mdi mdi-fire mdi-36px" @click="trendArea"></span>
			<span class="menu-icons mdi mdi-view-grid-outline mdi-36px"></span>
			<span class="menu-icons mdi mdi-square-edit-outline mdi-36px" @click="drawArea"></span>
			<span class="menu-icons mdi mdi-plus-box-outline mdi-36px"></span>
			<input
				type="file"
				accept="image/png"
				style="display: none"
				ref="imageInput"
				@change="pngToIcon"
			/>
			<span
				class="menu-icons mdi mdi-file-swap-outline mdi-36px"
				@click="$refs.imageInput.click()"
			/>
		</div>
		<span class="menu-icons mdi mdi-account mdi-36px" @click="userSettings"></span>
  </div>
</template>

<script>
import pngToIco from 'png-to-ico'
import fs from 'fs'

export default {
  name: 'LeftMenu',
  methods: {
    async pngToIcon (e) {
      let file = e.target.files[0]
      try {
        pngToIco(file.path).then(buf => {
          let fileName = file.name.slice(0, file.name.lastIndexOf('.'))
          fs.writeFileSync(fileName + '.ico', buf)
        }).catch(e => {
          console.log(e)
        })
      } catch (error) {
        console.log(error)
      }
    },
    trendArea () {
      console.info('Trend Area')
    },
    drawArea () {
      console.info('Draw Area')
    },
    userSettings () {
      console.info('User Settings')
    }
  }
}
</script>

<style scoped>
.leftBar {
  box-sizing: border-box;
  min-height: 500px;
  height: 100vh;
  width: 70px;
  background-color: #002d5b;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
}
.menu {
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.menu-icons {
  margin: 0;
  cursor: pointer;
}
</style>
