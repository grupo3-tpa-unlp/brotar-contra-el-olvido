<template>
    <q-layout view="hHh LpR lff">
        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="menu = !menu" />

                <q-toolbar-title>
                    <h1>Brotar Contra el Olvido</h1>
                </q-toolbar-title>
            </q-toolbar>
        </q-header>
        <q-drawer v-model="menu" :width="220" :breakpoint="500" side="left" elevated content-class="bg-grey-3">
            <q-scroll-area class="fit">
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
                    { id: 'inicio', label: 'Inicio', separator: true },
                    { id: 'proyecto', label: 'Proyecto', separator: true },
                    { id: 'postales', label: 'Postales', separator: true },
                    { id: 'creditos', label: 'Créditos', separator: true },
                ]
            }
        },
    }
</script>

<style lang="scss">
    $height: 80px;
    $small-title: 550px;
    $break-title: 394px;

    .q-toolbar__title {
        text-align: center;
        height: $height;
        line-height: $height;

        h1 {
            color: azure;
            line-height: $height;
            margin: 0;

            @media (max-width: $small-title) {
                font-size: 24px;
            }
            @media (max-width: $break-title) {
                white-space: normal;
                overflow: visible;
                margin-top: 10px;
                line-height: 30px;
            }
        }
    }

    .q-page-container {
        div {
            margin: 20px;
        }
    }
</style>
