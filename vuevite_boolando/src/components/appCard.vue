<script>
export default {
    name: 'appCard',
    data() {
        return {

            activeImage: true,
            products: [
                {
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    price: 14.99,
                    image: '../public/1.webp',
                    altImage: '../public/1b.webp',
                },
                {
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    price: 14.99,
                    image: '../public/2.webp',
                    altImage: '../public/2b.webp',
                },
                {
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    price: 14.99,
                    image: '../public/3.webp',
                    altImage: '../public/3b.webp',
                },
                {
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    price: 14.99,
                    image: '../public/4.webp',
                    altImage: '../public/4b.webp',
                },
                {
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    price: 14.99,
                    image: '../public/5.webp',
                    altImage: '../public/5b.webp',
                },
                {
                    brand: 'Levis',
                    model: 'RELAXED FEET TEE UNISEX',
                    price: 14.99,
                    image: '../public/6.webp',
                    altImage: '../public/6b.webp',
                },
            ]
        }
    },
    methods: {

        turnImage() {
            if (this.activeImage) {
                this.activeImage = false
            } else {
                this.activeImage = true
            }

        }
    }
}

</script>

<template>

    <div class="card col-12 col-lg-3 col-sm-4 m-3 p-0" v-for="product in products" @click="turnImage()">
        <img :src="product.image" class="card-img-top" alt="..." v-if="this.activeImage">
        <img :src="product.altImage" class="card-img-top" alt="..." v-else>
        <div class="card-body">
            <p class="card-title">{{ product.brand }}</p>
            <p class="card-text"><strong>{{ product.model }}</strong></p>
            <span>{{ product.price }}</span>
        </div>
    </div>


</template>

<style scoped>
.card:hover {
    cursor: pointer;
}
</style>
