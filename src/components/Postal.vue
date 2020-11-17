<template>
    <article>
        <figure>
            <img src="http://via.placeholder.com/300x200" alt="">
            <figcaption>
                <p>
                    <span>{{ alumno.apellido }}</span>, <span>{{ alumno.nombre }}</span>
                </p>
                <p v-if="alumno.dni || alumno.legajo">
                    <span v-if="alumno.dni">DNI: {{ alumno.dni }}</span> <span v-if="alumno.legajo">Legajo: {{ alumno.legajo }}</span>
                </p>
            </figcaption>
        </figure>
    </article>
</template>

<script>
    export default {
        name: "Postal",
        props: ['alumno'],
    }
</script>

<style scoped>
    article {
        margin: 20px;
        background: white;
        max-width: 95%;
        box-shadow:
            -3px -3px 3px lightgrey,
            3px -3px 3px lightgrey,
            -3px 3px 3px lightgrey,
            3px 3px 3px lightgrey
        ;
    }

    figure {
        cursor: pointer;
    }

    img {
        max-width: 100%;
    }
</style>
