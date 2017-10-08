<template>
<div>
  {{htt1}}
</div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        'htt1'
      ])
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style  scoped>

</style>
