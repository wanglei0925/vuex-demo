<template>
  <div class="hello">
    <div class="play">
      <div @click="add">点击+1</div>
      <div @click="dec">点击-1</div>
      <div @click="play">点击+2</div>
      <div @click="htt2">获取数据</div>
      <div @click="action1">action的使用show</div>
      <div @click="action2">action的使用hide</div>
    </div>
    <div v-show="!fullshow">
      3333333333333333333
    </div>
    <div>{{singer}}</div>
    <div>{{htt1}}</div>
  </div>
</template>

<script>
  import {mapMutations, mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        wew: [
          {
            'type': 0,
            'description': '在线支付满28减5'
          },
          {
            'type': 1,
            'description': 'VC无限橙果汁全场8折'
          }]
      }
    },
    computed: {
      ...mapGetters([
        'singer',
        'htt1',
        'fullshow'
      ])
    },
    mounted() {
    },
    methods: {
      add () {
        this.setSinger()
      },
      dec() {
        this.decnum()
      },
      play() {
        this.play()
      },
      htt2() {
//        this.htt(this.wew)
        var _this = this
        this.$http.get('../static/data/index.data').then(function (res) {
          let htt = res.data
          console.log(htt)
          _this.htt(htt)
        })
      },
      action1() {
        this.selectPlay({
          list: this.wew,
          index: 1
        })
      },
      action2() {
        this.selectPause({
          list: this.wew,
          index: 1
        })
      },
      ...mapMutations({
        setSinger: 'SET_SINGER',
        decnum: 'DEC_NUM',
        htt: 'HTT',
        action: 'ACTION'
      }),
      ...mapMutations([
        'play'
      ]),
      ...mapActions([
        'selectPlay',
        'selectPause'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .hello {
    width: 1000px;
    margin: 0 auto;
    text-align: left;
  }

  .play {
    display: flex;
    margin-bottom: 30px;
  }

  .play div {
    margin-right: 30px;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
