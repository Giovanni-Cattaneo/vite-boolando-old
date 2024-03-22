<script>
export default {
    name: 'appCard',
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
    },
    methods: {

        turnImage(index) {
            if (index >= 0 && index < this.products.length) {
                this.activeCard = index;
                console.log(index);

                const product = this.products[this.activeCard]; // variabile per semplificarci la vita
                if (product.image === product.originalImage) {
                    product.image = product.altImage; // se ci troviamo su image passiamo ad altimage
                } else {
                    product.image = product.originalImage; // se ci troviamo in altimage torniamo alla immagine originale
                }
            }
        }
    }


}


</script>

<template>

    <div class="card col-12 col-lg-3 col-sm-4 m-3 p-0" v-for="(product, index) in products" :key="index">
        <img :src="product.image" class="card-img-top" alt="..." @click="turnImage(index)">
        <div class="card-body">
            <div class="heart">&hearts;</div>
            <div class="discount">-50%</div>
            <div class="sustainability">Sostenibilità</div>
            <p class="card-title">{{ product.brand }}</p>
            <p class="card-text"><strong>{{ product.model }}</strong></p>
            <span>{{ product.price }}</span>
            <span>{{ product.altPrice }}</span>
        </div>
    </div>


</template>

<style scoped>
.card {
    position: relative;

    img:hover {
        cursor: pointer;
    }

    .heart:hover {
        color: red;
    }

    .discount {
        position: absolute;
        background-color: red;
        padding: 3px 5px;
        color: white;
        bottom: 24%;
        left: 0;
    }

    .sustainability {
        position: absolute;
        background-color: green;
        color: white;
        padding: 3px 5px;
        bottom: 24%;
        left: 15%;
    }

    .heart {
        position: absolute;
        background-color: lightgray;
        padding: 0.7rem;
        top: 2%;
        right: 0;
        font-size: 1.7rem;
    }



}
</style>
