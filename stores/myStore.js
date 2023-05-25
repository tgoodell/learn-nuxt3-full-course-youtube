// Vue 2 way

// export const useCounterStore = defineStore('counter', {
//     state: () => ({ count: 0, name: "Tristan"}),
//     getters: {
//         doubleCount: (state) => state.count * 2,
//     },
//     actions: {
//         increment() {
//             this.count++
//         },
//     },
// })

// Vue3 Way

import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", () => {
    const count = ref(0)
    const name = ref("Tristan")
    const doubleCount = computed(() => count.value * 2)
    function increment() {
        count.value++
    }

    return { count, name, doubleCount, increment }
})