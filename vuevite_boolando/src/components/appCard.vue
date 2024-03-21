<script>
export default {
    name: 'appCard',
    data() {
        return {
            people: [
                {
                    fullname: 'Giovanni Cattaneo',
                    age: 25,
                    image: ''
                },
                {
                    fullname: 'Marco masini',
                    age: 45,
                    image: ''
                },
                {
                    fullname: 'Laura adamoli',
                    age: 15,
                    image: ''
                },
                {
                    fullname: 'Paolo brosio',
                    age: 65,
                    image: ''
                },
                {
                    fullname: 'Luca bizzarri',
                    age: 35,
                    image: ''
                },
            ]
        }
    }
}

</script>

<template>

    <div class="card col-3 m-3" style="width: 18rem;" v-for="person in people">
        <img :src="person.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ person.fullname }}</h5>
            <p class="card-text">{{ person.age }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>


</template>

<style></style>
