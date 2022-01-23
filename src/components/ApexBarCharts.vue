<template>
  <div id="chart">
    <apexchart type="bar" height="250" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'ApexColumn',
  components: {
    apexchart: VueApexCharts
  },
  props: ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'des'],
  data () {
    return {
      series: [
        {
          data: [
            80,
            70,
            90,
            50,
            75,
            40,
            50,
            80,
            90,
            70,
            75,
            85
          ]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            }
          },
          toolbar: {
            show: false
          }
        },
        colors: [
          '#34C759',
          '#3290ED',
          '#9D53F2',
          '#77B5F2',
          '#FEB019',
          '#26ABA4'
        ],
        plotOptions: {
          bar: {
            distributed: true,
            borderRadius: 4
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'Mei',
            'Jun',
            'Jul',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Des'
          ],
          labels: {
            style: {
              colors: [
                '#34C759',
                '#3290ED',
                '#9D53F2',
                '#77B5F2',
                '#FEB019',
                '#26ABA4'
              ],
              fontSize: '12px'
            }
          }
          // axisBorder: {
          //   show: false
          // },
          // axisTicks: {
          //   show: false
          // }
        },
        grid: {
          show: true // you can either change hear to disable all grids
          // xaxis: {
          //   lines: {
          //     show: false // or just here to disable only x axis grids
          //   }
          // },
          // yaxis: {
          //   lines: {
          //     show: false // or just here to disable only y axis
          //   }
          // }
          //   row: {
          //     colors: 'blue',
          //     opacity: 1
          //   },
          //   column: {
          //     colors: 'red',
          //     opacity: 0.5
          //   }
        }
      }
    }
  }
}
</script>

<style>
</style>
