<script>
export default {
    name: 'appCard',
    data() {
        return {
            people: [
                {
                    fullname: 'Giovanni Cattaneo',
                    age: 25,
                    image: '../public/1.webp'
                },
                {
                    fullname: 'Marco masini',
                    age: 45,
                    image: '../public/2.webp'
                },
                {
                    fullname: 'Laura adamoli',
                    age: 15,
                    image: '../public/3.webp'
                },
                {
                    fullname: 'Paolo brosio',
                    age: 65,
                    image: '../public/4.webp'
                },
                {
                    fullname: 'Luca bizzarri',
                    age: 35,
                    image: '../public/5.webp'
                },
                {
                    fullname: 'Domenico Vincenzi',
                    age: 55,
                    image: '../public/6.webp'
                },
            ]
        }
    }
}

</script>

<template>

    <div class="card col-4 m-3" style="width: 18rem;" v-for="person in people">
        <img :src="person.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ person.fullname }}</h5>
            <p class="card-text">{{ person.age }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>



</template>

<style scoped>
img {
    width: 100%;
    object-fit: contain;
}
</style>
