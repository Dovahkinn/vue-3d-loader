import { App } from 'vue';
import * as Three from 'three';
import vue3dLoader from './3dLoader/vue3dLoader.vue'

export { Three }

const install = (app: App) => {
  console.log('vue3dLoader install: ', vue3dLoader)
  app.component(vue3dLoader.name as string || "vue-3d-loader", vue3dLoader)
}

export default { install, vue3dLoader }

export { vue3dLoader }