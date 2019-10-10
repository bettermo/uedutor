// 引入组件
import vueUeditor from './ueditor/index.js'

const components = [
    vueUeditor
]

const install = function (Vue, opts) {
    if (install.installed) return
    // 遍历注册全局组件
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

// 用于script标签引入
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}


export default {
    install,
    vueUeditor
}
