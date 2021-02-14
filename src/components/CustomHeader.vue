<template>
  <div class="flex flex-col items-center justify-center w-full bg-gray-100 h-72">
    <h1 class="text-5xl font-black text-gray-700 text-purple-500">Estado global no Vue.js 3</h1>
    <p class="mt-3 text-2xl text-gray-300 text-gray-700 font-paragrapher">Já era simples, agora ficou mais 😻</p>
    <div class="flex flex-col w-3/4 xl:w-1/4">
      <input
      @keyup.enter="handlerInputChange"
      v-model="state.inputValue"
      type="text"
      class="w-full px-2 py-2 mt-7 rounded-md" placeholder="Ex: Igor Halfeld">
      <i class="text-gray-400">{{ countLabel }}</i>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  emist: ['change'],
  setup (props, { emit }) {
    const state = reactive({
      inputValue: ''
    })

    const countLabel = computed(() => {
      if (props.count === 0) return 'Nenhum item encontrado'
      if (props.count === 1) return `${props.count} item enontrado`
      return `${props.count} itens enontrados`
    })

    function handlerInputChange () {
      emit('change', state.inputValue)
    }

    return {
      state,
      countLabel,
      handlerInputChange
    }
  }
}
</script>
