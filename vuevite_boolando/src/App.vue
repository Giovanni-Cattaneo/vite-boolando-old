<script>
import appHeader from "./components/appHeader.vue";
import appMain from "./components/appMain.vue";

export default {
  name: 'App',
  components: {
    appHeader,
    appMain,
  }
}

</script>

<template>

  <appHeader />

  <main>

    <appMain />

  </main>

  <footer>

  </footer>

</template>

<style></style>
