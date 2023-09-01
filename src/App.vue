<script>
import AppMain from './components/AppMain.vue';
import AppHeader from "./components/AppHeader.vue";


export default{
  components: {
    AppMain
  }
}
</script>

<template>
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss">
  @use './styles/generals.scss' as *;
</style>
