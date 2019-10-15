import vueUeditor from './vue-ueditor.vue'

vueUeditor.install = function (Vue) {
    Vue.components(vueUeditor.name, vueUeditor)
}

export default vueUeditor