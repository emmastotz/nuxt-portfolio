// https://vuejs.org/v2/api/#model
const defaultModelValue = { prop: 'value', event: 'input' }

export function createDirectProxy({ prop, event }) {
  return {
    get() {
      return this[prop]
    },
    set(newValue) {
      this.$emit(event, newValue)
    },
  }
}

// This is used by components to implement `v-model`.
// Usually by wrapping another component.
//
// Usage:
//
// ```
// <template>
//   <div>
//     <AnotherComponent v-model="proxy" />
//   </div>
// </template>
//
// <script>
// import AnotherComponent from '@/components/AnotherComponent.vue'
// import { directProxy } from '@/util/vue/computedProxies'
//
// export default {
//   components: { AnotherComponent },
//   props: {
//     value: {
//       type: String,
//       default: null
//     }
//   },
//   computed: {
//     proxy: directProxy
//   }
// }
// </script>
// ```
export const directProxy = createDirectProxy(defaultModelValue)

export function createObjectProxy({ prop, event }) {
  return function () {
    const pendingChanges = {}
    return new Proxy(this[prop] || {}, {
      get: (target, key) => target[key],
      set: (target, key, newValue) => {
        pendingChanges[key] = newValue
        this.$emit(event, { ...target, ...pendingChanges })
        return true
      },
    })
  }
}

/**
 * This is used by components to implement `v-model` for complex objects.
 *
 * Usage:
 *
 * ```
 * <template>
 *   <form>
 *     <input v-model="proxy.firstName" />
 *     <input v-model="proxy.lastName" />
 *   </form>
 * </template>
 *
 * <script>
 * import { objectProxy } from '@/util/vue/computedProxies'
 *
 * export default {
 *   props: {
 *     value: {
 *       type: Object,
 *       default: null
 *     }
 *   },
 *   computed: {
 *     proxy: objectProxy
 *   }
 * }
 * </script>
 * ```
 */
export const objectProxy = createObjectProxy(defaultModelValue)

export function createArrayProxy({ prop, event }) {
  return function () {
    const pendingChanges = {}
    return new Proxy(this[prop] || [], {
      get: (target, key) => target[key],
      set: (target, key, newValue) => {
        // Ignore unnecessary work. E.G. length set to same value
        if (target[key] === newValue) {
          return true
        }
        const copy = [...target]
        pendingChanges[key] = newValue
        for (const [key, value] of Object.entries(pendingChanges)) {
          copy[key] = value
        }
        this.$emit(event, copy)
        return true
      },
    })
  }
}

export const arrayProxy = createArrayProxy(defaultModelValue)