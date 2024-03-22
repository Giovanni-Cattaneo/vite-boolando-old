<script>

import appCard from "./appCard.vue"

export default {
    name: 'appMain',
    components: {
        appCard
    }
}

</script>

<template>

    <div class="container text-center">
        <div class="row">
            <appCard />
        </div>
    </div>




</template>

<style>
main {
    display: flex;
    flex-wrap: wrap;

    .row {
        justify-content: center;
    }
}

/* @use '../assets/scss/partials/_header.scss'; */
</style>
