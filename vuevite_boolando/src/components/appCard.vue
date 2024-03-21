<script>
export default {
    name: 'appCard',
    data() {
        return {

            activeImage: true,
            people: [
                {
                    fullname: 'Giovanni Cattaneo',
                    age: 25,
                    image: '../public/1.webp',
                    altImage: '../public/1b.webp',
                },
                {
                    fullname: 'Marco masini',
                    age: 45,
                    image: '../public/2.webp',
                    altImage: '../public/2b.webp',
                },
                {
                    fullname: 'Laura adamoli',
                    age: 15,
                    image: '../public/3.webp',
                    altImage: '../public/3b.webp',
                },
                {
                    fullname: 'Paolo brosio',
                    age: 65,
                    image: '../public/4.webp',
                    altImage: '../public/4b.webp',
                },
                {
                    fullname: 'Luca bizzarri',
                    age: 35,
                    image: '../public/5.webp',
                    altImage: '../public/5b.webp',
                },
                {
                    fullname: 'Domenico Vincenzi',
                    age: 55,
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

    <div class="card col-3 m-3 p-0" v-for="person in people" v-if="this.activeImage">
        <img :src="person.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ person.fullname }}</h5>
            <p class="card-text">{{ person.age }}</p>
            <a href="#" class="btn btn-primary" @click="turnImage()">Turn</a>
        </div>
    </div>
    <div class="card col-3 m-3 p-0" v-for="person in people" v-else>
        <img :src="person.altImage" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ person.fullname }}</h5>
            <p class="card-text">{{ person.age }}</p>
            <a href="#" class="btn btn-primary" @click="turnImage()">Turn</a>
        </div>
    </div>



</template>

<style scoped></style>
