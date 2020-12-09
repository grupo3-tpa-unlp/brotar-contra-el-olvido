<template>
<!--    <q-layout view="lHh lpR lFf">-->
    <q-layout view="lHh lpR lff" :style="page === 'inicio' ? backgroundImage : ''">
        <q-header>
            <q-toolbar>
                <q-btn class="menu-button" dense flat round icon="menu" @click="menu = !menu" />
            </q-toolbar>
        </q-header>
        <q-drawer v-model="menu" :width="220" :breakpoint="500" side="left" overlay bordered>
            <q-scroll-area class="fit">
                <div class="menu-button-container">
                    <q-btn class="menu-button" dense flat round icon="menu" @click="menu = !menu" />
                </div>
                <q-list>
                    <template v-for="(menuItem, index) in menuList">
                        <q-item :key="index" clickable :active="menuItem.id === page" v-ripple @click="page = menuItem.id">
                            <q-item-section>
                                {{ menuItem.label }}
                            </q-item-section>
                        </q-item>
                        <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
                    </template>
                </q-list>
            </q-scroll-area>
        </q-drawer>
        <q-page-container>
            <div>
                <Inicio v-if="page === 'inicio'" />
                <img v-if="page !== 'inicio'" :src="hoja" alt="Brotar Contra el Olvido" style="max-width: 200px;" />
                <Proyecto v-if="page === 'proyecto'" />
                <Postales v-if="page === 'postales'" />
                <Creditos v-if="page === 'creditos'" />
            </div>
        </q-page-container>
    </q-layout>
</template>

<script>
    import Inicio from "./components/Inicio";
    import Proyecto from "./components/Proyecto";
    import Postales from "./components/Postales";
    import Creditos from "./components/Creditos";
    import backgroundUrl from "./assets/fondo.jpg";
    import hoja from "./assets/hoja.png";

    export default {
        name: 'LayoutDefault',
        components: {
            Inicio,
            Proyecto,
            Postales,
            Creditos,
        },
        data () {
            return {
                page: 'inicio',
                menu: false,
                menuList: [
                    { id: 'inicio', label: 'Inicio' },
                    { id: 'proyecto', label: 'Proyecto' },
                    { id: 'postales', label: 'Postales' },
                    { id: 'creditos', label: 'Créditos' },
                ],
                backgroundImage: `background-image: url(${backgroundUrl}); background-position: center; background-repeat: no-repeat; background-size: contain;`,
                hoja,
            }
        },
    }
</script>
