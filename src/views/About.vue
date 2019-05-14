<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-if="show_video" class="video">
      <video controls ref="Video" class="video">
        <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
      </video>
      <span v-if="show_play" @click="myPlay()">自定义播放按钮</span>
    </div>
    <v-swiper2 :swiper_data="arr1" :time="my_time1" :item_width="item_width1">
    </v-swiper2>
  </div>
</template>
<script>
import VSwiper2 from "@/components/VSwiper2";

export default {
  name: "about",
  components: {
    VSwiper2
  },
  data() {
    return {
      show_video: true,
      show_play: true,
      arr: [1, 2, 3, 4, 5, 6],
      item_width: 400,
      my_time: 5000,
      videoID: "",
      arr1: [[1, 2, 3], [11, 22, 33], [111, 222, 333], [1111, 2222, 3333]],
      item_width1: 400,
      my_time1: 5000
    };
  },
  created() {},
  mounted() {
    // this.banner();
    this.play();
  },
  methods: {
    play: function() {
      let self = this;
      self.videoID = this.$refs.Video;
      self.videoID.addEventListener("play", function() {
        console.log(1);
        self.show_play = false;
      });
      self.videoID.addEventListener("pause", function() {
        console.log(1);
        self.show_play = true;
      });
    },
    myPlay: function() {
      let self = this;
      self.videoID.play();
    }
  }
};
</script>
<style lang="less" scoped>
.video {
  position: relative;
  width: 100%;
}
.video span {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50px;
  padding: 0 15px;
  font-size: 36px;
  color: #fff;
  background: rgba(250, 250, 250, 0.5);
  transform: translate(-50%, -50%);
}
#myVideo {
  width: 600px;
  height: 300px;
  background: #000;
}
.adv-list-swiper {
  overflow: hidden;
  position: relative;
  z-index: 1000;
  width: 1200px;
  height: 300px;
  margin: auto;
  background: #000;
}
.adv-list-swiper__container {
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 999;
  height: 150px;
}
.adv-list-swiper__container li {
  float: left;
  background: #ddd;
  width: 195px;
  margin-right: 5px;
  height: 150px;
}
</style>
