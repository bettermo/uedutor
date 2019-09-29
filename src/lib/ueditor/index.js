
import vueUedutor from './vue-uedutor.vue'

vueUedutor.install = function (Vue) {
    Vue.components(vueUedutor.name, vueUedutor)
}

export default vueUedutor