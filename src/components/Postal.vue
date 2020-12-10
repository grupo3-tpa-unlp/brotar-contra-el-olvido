<template>
    <article>
        <figure>
            <img :src="getImg(postal.img)" :alt="!!postal.caption ? postal.caption : 'Postal'" @click="dialog = true" />
            <figcaption v-if="!!postal.caption">
                {{ postal.caption }}
            </figcaption>
        </figure>
        <q-dialog v-model="dialog" persistent maximized transition-show="slide-up" transition-hide="slide-down">
            <q-card>
                <q-bar>
                    <q-space />
                    <q-btn dense flat icon="close" v-close-popup>
                        <q-tooltip>Cerrar</q-tooltip>
                    </q-btn>
                </q-bar>
                <q-card-section>
                    <img :src="getImg(postal.img)" :alt="!!postal.caption ? postal.caption : 'Postal'" />
                </q-card-section>
            </q-card>
        </q-dialog>
    </article>
</template>

<script>
    export default {
        name: "Postal",
        props: ['postal'],
        data () {
            return {
                dialog: false,
            }
        },
        methods: {
            getImg (img) {
                return require('../assets/postales/'+img)
            },
        },
    }
</script>

<style scoped>
    article {
        margin: 50px;
        background: white;
        width: 80%;
        box-shadow:
            -3px -3px 3px lightgrey,
            3px -3px 3px lightgrey,
            -3px 3px 3px lightgrey,
            3px 3px 3px lightgrey
        ;
    }

    figure {
        cursor: pointer;
        display: inline;
        margin: 0;
    }

    figcaption {
        font-weight: bold;
        margin: 10px;
    }

    img {
        width: 100%;
        display: block;
    }
</style>
