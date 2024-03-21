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

    <appCard />

    <appCard />

    <appCard />

    <appCard />

    <appCard />


</template>

<style>
main {
    display: flex;
    flex-wrap: wrap;
}
</style>
