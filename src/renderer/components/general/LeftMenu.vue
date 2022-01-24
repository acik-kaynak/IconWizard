<template>
  <div class="leftBar">
    <router-link tag="div" class="r-link" to="/">
      <span class="menu-icons mdi mdi-home mdi-36px" />
      <span class="tooltip">Home</span>
    </router-link>
    <router-link tag="div" class="r-link" to="/">
      <span class="menu-icons mdi mdi-tune-variant mdi-36px" />
      <span class="tooltip">Settings</span>
    </router-link>
    <div class="menu">
      <router-link tag="div" class="r-link" to="/">
        <span class="menu-icons mdi mdi-fire mdi-36px"></span>
        <span class="tooltip">Hot List</span>
      </router-link>
      <router-link tag="div" class="r-link" to="/">
        <span class="menu-icons mdi mdi-view-grid-outline mdi-36px"></span>
        <span class="tooltip">Menu</span>
      </router-link>
      <router-link tag="div" class="r-link" to="/drawarea">
        <span class="menu-icons mdi mdi-square-edit-outline mdi-36px"></span>
        <span class="tooltip">Draw Area</span>
      </router-link>
      <router-link tag="div" class="r-link" to="/dragfile">
        <span class="menu-icons mdi mdi-plus-box-outline mdi-36px"></span>
        <span class="tooltip">Drag File</span>
      </router-link>
      <router-link tag="div" class="r-link" to="">
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
        <span class="tooltip">Png to Ico</span>
      </router-link>
    </div>
    <router-link tag="div" class="r-link" to="/">
      <span class="menu-icons mdi mdi-account mdi-36px"></span>
      <span class="tooltip">User</span>
    </router-link>
  </div>
</template>

<script>
import pngToIco from 'png-to-ico'
import fs from 'fs'
export default {
  name: 'LeftMenu',
  methods: {
    /* eslint-disable */
    async pngToIcon(e) {
      let file = e.target.files[0]
      try {
        pngToIco(file.path)
          .then((buf) => {
            let fileName = file.name.slice(0, file.name.lastIndexOf('.'))
            fs.writeFileSync(fileName + '.ico', buf)
          })
          .catch((e) => {
            console.log(e)
          })
      } catch (error) {
        console.log(error)
      }
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
  overflow: visible;
  position: relative;
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
  color: white;
}
.r-link:hover .tooltip{
  display: block;
}
.tooltip{
  z-index: 3;
  color: white;
  width: max-content;
  text-align: left;
  border-radius: 6px;
  position: absolute;
  left: 70px;
  display: none;
  padding: 0;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.r-link{
  display: flex;
  align-items: center;
}
</style>
