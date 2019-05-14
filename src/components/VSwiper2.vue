<template>
  <div class="swiper-wrap" ref="swiperWrap" :style='`height: ${config.height}px;`'>
    <div class="handle-direction">
        <span class="prve" @click="prve">&lt;</span>
        <span class="next" @click="next">&gt;</span>
    </div>
    <div class="showView" :style='`width: ${config.width}px; height: ${config.height}px;`'>
        <ul ref="list" class="list" :style='`left: -${left}px; transition: none`'>
            <li v-for="(item, i) in swiperList" :style='`width: ${config.width}px; height: ${config.height}px;`' :key="i">{{item}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-swiper-box",
  data () {
      return {
          config: {
              height: 667,
              width: 1920,
              current: 1,
              transitionTime: 1,
              delay: 0
          },
          list: [1, 2, 3, 4]
      }
  },
  computed: {
      left () {
          return this.config.width * this.config.current
      },
      swiperList () {
          let swiperList = [this.list[this.list.length-1], ...this.list, this.list[0]]
          return swiperList
      }
  },
  mounted () {
      const $this = this
      this.resetWidth();
      window.addEventListener('resize', () => {
          $this.resetWidth()
      });
      setInterval(function(){
        $this.animation(true)  
      },5000);

  },
  methods: {
      resetWidth () {
          const width = this.$refs.swiperWrap.clientWidth
          this.config.width = width
          this.config.height = width / 1920 * 667
      },
      prve () {
          if (new Date().valueOf() - this.config.delay <= this.config.transitionTime * 1000) {
              return
          }
          this.config.delay = new Date().valueOf()
          this.animation(false)
      },
      next () {
          if (new Date().valueOf() - this.config.delay <= this.config.transitionTime * 1000) {
              return
          }
          this.config.delay = new Date().valueOf()
          this.animation(true)
      },
      animation (isNext) {
          const $this = this
          const length = this.list.length
          let timer = null
          let $ul = this.$refs.list
          $ul.style.transition = `left ${this.config.transitionTime}s`
          isNext ? this.config.current ++ : this.config.current --
          clearTimeout(timer)
          if (this.config.current > length) {
              timer = setTimeout(() => {
                  $ul.style.transition = 'none'
                  $this.config.current = 1
                  clearTimeout(timer)
              }, 1050);
              timer = setTimeout(() => {
                  $ul.style.transition = `left ${this.config.transitionTime}s`
                  clearTimeout(timer)
              }, 1100);
          }
          if (this.config.current < 1) {
              timer = setTimeout(() => {
                  $ul.style.transition = 'none'
                  $this.config.current = length
                  clearTimeout(timer)
              }, 1050);
              timer = setTimeout(() => {
                  $ul.style.transition = `left ${this.config.transitionTime}s`
                  clearTimeout(timer)
              }, 1100);
          }
      }
  }
};
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  border: 0;
}
.swiper-wrap{
  position:relative;
}
.swiper-wrap:hover{
  .handle-direction{
    transition:opacity 0.3s;
    opacity:1
  }
}
.handle-direction{
  opacity: 0;
}
.handle-direction span{
  display:inline-block;
  cursor:pointer;
  border-radius:3px;
  width:20px;
  height:20px;
  line-height:20px;
  background:rgba(150, 150, 150, 0.2);
  z-index:2;
  position:absolute;
  top:50%;
  margin-top: -10px;
}
.handle-direction .prve{
  left:20px;
}
.handle-direction .next{
  right: 20px;
}
.showView, .list{
  position:absolute;
  top: 0;
  left: 0;
}
.showView{
  overflow: hidden;
}
.list{
  width: 100000%;
  text-align:left;
}
.list li{
  text-align:center;
  display:inline-block;
}
.list li:nth-child(1){
  background: #eee;
}
.list li:nth-child(2){
  background:#bbb;
}
.list li:nth-child(3){
  background:#ccc;
}
.list li:nth-child(4){
  background:#ddd;
}
.list li:nth-child(5){
  background:#eee;
}
.list li:nth-child(6){
  background:#bbb;
}
</style>
