<template>
  <div class="home">
    todos_len => {{ todos_len }}
    <test />
      <div>
       <button @click="getTodos">getTodos</button>
      </div>
      {{ todos }}
  </div>
</template>

<script>
// @ is an alias to /src
import test from '@/components/test.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapGetters(['todos_len']),
    ...mapState(['todos'])
  },
  methods: {
    ...mapActions(['getTodos'])
  },
  components: {test}
}
</script>
