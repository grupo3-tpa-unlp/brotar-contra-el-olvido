import Vue from 'vue'

import './styles/quasar.scss'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, QIcon } from 'quasar'

Vue.use(Quasar, {
    config: {},
    plugins: {
    },
    components: {
        QIcon,
    },
})
