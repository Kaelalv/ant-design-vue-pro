<template>
  <div>
    <Chart :option="chartOption" style="height: 200px;" />
  </div>
</template>

<script>
import random from "lodash/random";
import Chart from "../../components/Chart";
import { setInterval, clearInterval } from 'timers';

export default {
  components: {
    Chart
  },
  data() {
    return {
      chartOption:{
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.chartOption.series[0].data = this.chartOption.series[0].data.map(() => random(100));
      // 不用深度监听时，需要使用手动改变chartOption(数据大的话，使用深度监听会比较耗能)
      this.chartOption = {...this.chartOption}
    }, 3000)
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style></style>
