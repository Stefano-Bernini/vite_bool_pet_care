<script>
import AppJumbotron from './components/AppJumbotron.vue';
import AppMain from './components/AppMain.vue';
import AppHeader from "./components/AppHeader.vue";


export default{
  components: {
    AppHeader,
    AppJumbotron,
    AppMain
  }
}
</script>

<template>
  <div>
    <AppHeader />
    <AppJumbotron />
    <AppMain />
  </div>
</template>

<style lang="scss">
  @use './styles/generals.scss' as *;
</style>
