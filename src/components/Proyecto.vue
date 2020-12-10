<template>
    <section>
        <h1>Proyecto</h1>
        <blockquote>
            <p>Sembrar la memoria para que no crezca el olvido</p>
            <span class="author">Edgardo Vigo (La Plata, 1928-1997)</span>
        </blockquote>
        <section>
            <p>
                El proyecto consistió en desarrollar impresiones y revelados analógicos sobre hojas de árboles mediante procesos de revelado alternativos (clorotipia). En dicho proceso transferimos en cada hoja el nombre y número de legajo de cada compañerx. Esta acción se replicó por 35 dado que son la cantidad de estudiantes, docentes, y no docentes detenidxs/desaparecidxs de la Facultad de Artes de la UNLP durante la última dictadura Militar de 1976.
            </p>
            <p>
                Cada hoja, una vez revelada, pasó al proceso de herborización con su tiempo de secado específico. Al concluir este proceso, fueron escaneadas una por una para digitalizarlas y crear las postales digitales.
            </p>
            <p>
                Las postales digitales tienen en su frente la imagen de la hoja de manera superpuesta el nombre, la edad y el número legajo de cada unx de los 35. Al reverso, estarán los 35 nombres en su conjunto, acompañados de la frase “Sembrar la memoria para que no crezca el olvido”, en alusión a la desaparición forzada de personas durante la dictadura.
            </p>
        </section>
    </section>
</template>

<script>
    export default {
        name: "Proyecto"
    }
</script>

<style scoped lang="scss">
    section {
        margin: 0 50px;

        blockquote {
            margin: 50px 0;
        }

        section {
            font-size: 12pt;
            line-height: 1.7em;
            margin: auto;
            max-width: 710px;
            text-align: justify;

            p {
                margin-bottom: 20px;
            }

            p:last-of-type {
                margin-bottom: 50px;
            }
        }
    }
</style>
