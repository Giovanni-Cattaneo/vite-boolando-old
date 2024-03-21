<script>
export default {
    name: 'appHeader'
}

</script>

<template>

    <header>
        <div class="container d-flex">
            <div class="gender-categories">
                <a href="">Donna </a>
                <a href=""> Uomo </a>
                <a href=""> Bambini</a>
            </div>
            <div class="logo">
                <img src="../assets/boolean-logo.png" alt="" width="25%">
            </div>
            <div>
                <a href=""><i class="fa-solid fa-user-plus"></i></a>
                <a href=""><i class="fa-regular fa-heart"></i></a>
                <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
    </header>


</template>

<style>
header {
    background-color: #ff6900;
    text-align: center;

    & a {
        color: black;
        text-decoration: none;
    }

    .container {
        justify-content: space-between;
        align-items: center;
        padding: 0.4rem;
    }
}
</style>
