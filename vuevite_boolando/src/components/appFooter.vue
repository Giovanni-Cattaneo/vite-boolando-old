<script>
export default {
    name: 'appFooter'
}

</script>

<template>

    <footer>

        <div class="container d-flex">
            <div>
                <h3><strong>Boolando Srl</strong></h3>
                <div>
                    <a href="">Infomrazioni legali </a>
                    <a href="">Informativa sulla privacy </a>
                    <a href="">Diritto di Recesso</a>
                </div>
            </div>
            <div>
                <p id="bottom-text">Trovaci anche su</p>
                <a href=""><i class="fa fa-facebook"></i></a>
                <a href=""><i class="fa fa-instagram"></i></a>
                <a href=""><i class="fa fa-youtube-play"></i></a>
                <a href=""><i class="fa fa-twitter"></i></a>
            </div>
        </div>
    </footer>


</template>

<style>
footer {
    background-color: #1a1a1a;
    color: white;
    padding: 0.5rem;

    & a {
        color: white;
        text-decoration: none;
        margin: 3px;
    }

    .container {
        justify-content: space-between;
    }



}
</style>
