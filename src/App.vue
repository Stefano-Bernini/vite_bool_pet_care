<script>
import AppJumbotron from './components/AppJumbotron.vue';
import AppMain from './components/AppMain.vue';
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";


export default{
  components: {
    AppHeader,
    AppJumbotron,
    AppMain,
    AppFooter
  }
}
</script>

<template>
  <div>
    <AppHeader />
    <AppJumbotron />
    <AppMain />
    <AppFooter />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @use './styles/generals.scss' as *;
</style>
