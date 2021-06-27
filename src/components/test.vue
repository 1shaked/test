<template>
  <div>
     height => {{ height }},
     <button @click="SET_HEIGHT(height + 1)">add to height</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['height'])
  },
  methods: {
      ...mapMutations(['SET_HEIGHT'])
  }
  //components: {HelloWorld}
}
</script>
