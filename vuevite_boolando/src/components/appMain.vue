<script>

import appCard from "./appCard.vue"

export default {
    name: 'appMain',
    components: {
        appCard
    },
    data() {
        return {

            activeImage: true,
            activeCard: null,
            products: [
                {
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    price: 14.99,
                    altPrice: Number((this.price / 2).toFixed(2)),
                    image: '../public/1.webp',
                    altImage: '../public/1b.webp',
                    originalImage: '../public/1.webp',
                },
                {
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    price: 14.99,
                    altPrice: parseInt((this.price / 2).toFixed(2)),
                    image: '../public/2.webp',
                    altImage: '../public/2b.webp',
                    originalImage: '../public/2.webp',
                },
                {
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    price: 14.99,
                    altPrice: parseInt((this.price / 2).toFixed(2)),
                    image: '../public/3.webp',
                    altImage: '../public/3b.webp',
                    originalImage: '../public/3.webp',
                },
                {
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    price: 14.99,
                    altPrice: parseInt((this.price / 2).toFixed(2)),
                    image: '../public/4.webp',
                    altImage: '../public/4b.webp',
                    originalImage: '../public/4.webp',
                },
                {
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    altPrice: parseInt((this.price / 2).toFixed(2)),
                    image: '../public/5.webp',
                    altImage: '../public/5b.webp',
                    originalImage: '../public/5.webp',
                },
                {
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    altPrice: parseInt((this.price / 2).toFixed(2)),
                    image: '../public/6.webp',
                    altImage: '../public/6b.webp',
                    originalImage: '../public/6.webp',
                },
            ]
        }
    }

}

</script>

<template>

    <div class="container text-center">
        <div class="row">
            <div class="card col-12 col-lg-3 col-sm-4 m-3 p-0" v-for="(product, index) in products" :key="index"
                :brand="product.brand" :image="product.image" :price="product.price" :model="product.model">
                <appCard />
            </div>
        </div>
    </div>




</template>

<style lang="scss">
main {
    display: flex;
    flex-wrap: wrap;

    .row {
        justify-content: center;
    }
}

/*@use '../assets/scss/partials/_header.scss';*/
</style>
