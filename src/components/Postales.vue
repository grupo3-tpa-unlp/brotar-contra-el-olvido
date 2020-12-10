<template>
    <section>
        <h1>Postales</h1>
        <section class="postales">
            <template v-for="postal in postales">
                <Postal :key="postal.id" :postal="postal" />
            </template>
        </section>
    </section>
</template>

<script>
    import postales from "../data/postales";
    import Postal from "./Postal";

    export default {
        name: "Postales",
        components: {
            Postal,
        },
        data () {
            return {
                postales
            };
        }
    }
</script>
