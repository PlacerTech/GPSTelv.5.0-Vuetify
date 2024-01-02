// Imports
import { createPinia } from 'pinia'
import { markRaw } from 'vue'
import { one } from '@vuetify/one'

// Types
import type { App } from 'vue'
import type { Router } from 'vue-router'

export const pinia = createPinia()

export function installPinia (app: App, router: Router) {
  pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

  pinia.use(one)

  app.use(pinia)
}
