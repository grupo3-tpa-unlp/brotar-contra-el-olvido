<template>
    <section>
        <h2>Postales</h2>
        <section class="postales">
            <template v-for="alumno in alumnos">
                <Postal :key="alumno.id" :alumno="alumno" />
            </template>
        </section>
    </section>
</template>

<script>
    import alumnos from "../data/alumnos";
    import Postal from "./Postal";

    export default {
        name: "Postales",
        components: {
            Postal,
        },
        data () {
            return {
                alumnos
            };
        }
    }
</script>

<style scoped>
    .postales {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>
