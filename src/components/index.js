import LxFormItem from '@/components/form/index.vue'

const components = [
  LxFormItem
]

export default {
  install: app => {
    components.forEach(component => {
      // 在app上进行扩展，app提供 component directive 函数
      // 如果要挂载原型 app.config.globalProperties 方式
      app.component(component.name, component)
    })
  }
}
