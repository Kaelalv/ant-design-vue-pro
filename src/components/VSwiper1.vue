<template>
  <div class="v-swiper-box" @mouseover="stopAuto" @mouseout="continueAuto">
    <div
      ref="first"
      class="v-swiper-box__list-box"
      :style="
        'width:' +
          1200 * swiper_data.length +
          'px; left: ' +
          first_left +
          'px; transition: left ' +
          css_time +
          's;'
      "
    >
      <ul
        v-for="(child, c_index) in swiper_data"
        :key="c_index"
        class="v-swiper"
      >
        <li
          v-for="item in child"
          :key="item"
          :style="'width:' + (item_width - 10) + 'px;'"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div
      ref="second"
      class="v-swiper-box__list-box"
      :style="
        'width:' +
          1200 * swiper_data.length +
          'px; left: ' +
          second_left +
          'px; transition: left ' +
          css_time +
          's;'
      "
    >
      <ul
        v-for="(child, c_index) in swiper_data"
        :key="c_index"
        class="v-swiper"
      >
        <li
          v-for="item in child"
          :key="item"
          :style="'width:' + (item_width - 10) + 'px;'"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <button class="v-swiper-box__btn v-swiper-box__btn--prev" @click="goPrev">
      prev
    </button>
    <button class="v-swiper-box__btn v-swiper-box__btn--next" @click="goNext">
      next
    </button>
  </div>
</template>

<script>
export default {
  name: "v-swiper-box",
  props: {
    time: {
      type: Number,
      default: 3000
    },
    swiper_data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    item_width: {
      type: Number,
      default: 200
    }
  },
  data: function() {
    return {
      first_left: 0,
      second_left: this.swiper_data.length * this.item_width * 3,
      css_time: 3,
      auto: ""
    };
  },
  created: function() {
    this.play();
  },
  methods: {
    play: function() {
      let self = this;
      self.auto = setInterval(function() {
        self.doneThis();
      }, self.time);
    },
    stopAuto: function() {
      let self = this;
      clearInterval(self.auto);
    },
    continueAuto: function() {
      let self = this;
      self.play();
    },
    doneThis: function() {
      let self = this;
      if (self.first_left === -self.swiper_data.length * self.item_width * 3) {
        self.first_left = self.swiper_data.length * self.item_width * 3;
        self.css_time = 0;
      } else if (
        self.second_left ===
        -self.swiper_data.length * self.item_width * 3
      ) {
        self.second_left = self.swiper_data.length * self.item_width * 3;
        self.css_time = 0;
      } else {
        self.first_left = self.first_left - self.item_width * 3;
        self.second_left = self.second_left - self.item_width * 3;
        self.css_time = 3;
      }
    },
    waitMomentDo: function() {
      let self = this;
      setTimeout(function() {
        self.css_time = 3;
        self.first_left = self.first_left + self.item_width * 3;
        self.second_left = self.second_left + self.item_width * 3;
      }, 100);
    },
    goPrev: function() {
      let self = this;
      clearInterval(self.auto);
      if (self.first_left === 0) {
        self.css_time = 0;
        self.second_left = -self.swiper_data.length * self.item_width * 3;
        self.waitMomentDo();
      } else if (self.second_left === 0) {
        self.css_time = 0;
        self.first_left = -self.swiper_data.length * self.item_width * 3;
        self.waitMomentDo();
      } else {
        self.first_left = self.first_left + self.item_width * 3;
        self.second_left = self.second_left + self.item_width * 3;
        self.css_time = 3;
      }
    },
    goNext: function() {
      let self = this;
      clearInterval(self.auto);
      self.doneThis();
    }
  }
};
</script>
<style lang="less" scoped>
.v-swiper-box {
  overflow: hidden;
  position: relative;
  z-index: 1000;
  width: 1200px;
  height: 150px;
  margin: 0 auto;
  background: #000;
  box-sizing: border-box;
}
.v-swiper-box__list-box {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  height: 150px;
  box-sizing: border-box;
  overflow: hidden;
  height: 150px;
}
.v-swiper {
  float: left;
}
.v-swiper li {
  float: left;
  background: #ddd;
  width: 190px;
  margin: 0 5px;
  height: 150px;
}
.v-swiper-box__btn {
  position: absolute;
  top: 50%;
  z-index: 1001;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  transform: translate(0, -50%);
}
.v-swiper-box__btn--prev {
  left: 0;
}
.v-swiper-box__btn--next {
  right: 0;
}
</style>
