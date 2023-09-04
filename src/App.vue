<script>
import AppJumbotron from './components/AppJumbotron.vue';
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";


export default{
  components: {
    AppHeader,
    AppJumbotron,
    AppFooter
  }
}
</script>

<template>
  <div>
    <AppHeader />
    <AppJumbotron />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<style lang="scss">
  @use './styles/generals.scss' as *;
</style>
