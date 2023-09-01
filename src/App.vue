<script>
import AppJumbotron from './components/AppJumbotron.vue';
import AppMain from './components/AppMain.vue';


export default{
  components: {
    AppJumbotron,
    AppMain
  }
}
</script>

<template>
  <div>
    <AppJumbotron />
    <AppMain />
  </div>
</template>

<style lang="scss">
  @use './styles/generals.scss' as *;
</style>
