<script>
export default {
    name: 'appCard',
    props: ['brand', 'image', 'price', 'altPrice', 'model'],
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
    <img :src="image" class="card-img-top" alt="..." @click="turnImage(index)">
    <div class="card-body">
        <div class="heart">&hearts;</div>
        <div class="discount">-50%</div>
        <div class="sustainability">Sostenibilità</div>
        <p class="card-title">{{ brand }}</p>
        <p class="card-text"><strong>{{ model }}</strong></p>
        <span>{{ price }}</span>
        <span>{{ altPrice }}</span>
    </div>


</template>

<style scoped lang="scss">
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

/* @use '../assets/scss/partials/_header.scss'; */
</style>
