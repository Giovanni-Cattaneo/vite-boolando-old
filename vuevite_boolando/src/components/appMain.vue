<script>

import appCard from "./appCard.vue";
import axios from 'axios';
import { state } from "../state.js"

export default {
    name: 'appMain',
    components: {
        appCard
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    price: 14.99,
                    altPrice: Number((this.price / 2).toFixed(2)),
                    image: '../public/1.webp',
                    altImage: '../public/1b.webp',
                    originalImage: '../public/1.webp',
                },
                {
                    id: 2,
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    price: 14.99,
                    altPrice: parseInt((this.price / 2).toFixed(2)),
                    image: '../public/2.webp',
                    altImage: '../public/2b.webp',
                    originalImage: '../public/2.webp',
                },
                {
                    id: 3,
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    price: 14.99,
                    altPrice: parseInt((this.price / 2).toFixed(2)),
                    image: '../public/3.webp',
                    altImage: '../public/3b.webp',
                    originalImage: '../public/3.webp',
                },
                {
                    id: 4,
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    price: 14.99,
                    altPrice: parseInt((this.price / 2).toFixed(2)),
                    image: '../public/4.webp',
                    altImage: '../public/4b.webp',
                    originalImage: '../public/4.webp',
                },
                {
                    id: 5,
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    price: 14.99,
                    altPrice: parseInt((this.price / 2).toFixed(2)),
                    image: '../public/5.webp',
                    altImage: '../public/5b.webp',
                    originalImage: '../public/5.webp',
                },
                {
                    id: 6,
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    price: 14.99,
                    altPrice: parseInt((this.price / 2).toFixed(2)),
                    image: '../public/6.webp',
                    altImage: '../public/6b.webp',
                    originalImage: '../public/6.webp',
                },
            ],
            state: state,
        }
    },
    methods: {
        updateImage(index) {
            if (this.products[index].image === this.products[index].originalImage) {
                this.products[index].image = this.products[index].altImage;
            } else {
                this.products[index].image = this.products[index].originalImage
            }

        }
    },
    mounted() {
        console.log(state.message);
    }
}

</script>

<template>
    <div class="container text-center">
        <div class="row">
            <div class="card col-12 col-lg-3 col-sm-4 m-3 p-0" v-for="(product, index) in products" :key="index">
                <appCard :brand="product.brand" :image="product.image" :price="product.price" :model="product.model"
                    :altImage="product.altImage" :originalImage="product.originalImage" :altPrice="product.altPrice"
                    :index="index" @click="updateImage(index)" />
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
