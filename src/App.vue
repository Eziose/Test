<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-3">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title">Charts</h3>
              <span class="pull-right">
                        <!-- Tabs -->
                        <ul class="nav panel-tabs">
                            <li :class="[isPie ? 'active' : '']"><a href="#tab1" data-toggle="tab" @click="pie">Pie</a></li>
                            <li :class="[isBar ? 'active' : '']"><a href="#tab2" data-toggle="tab" @click="bar">Bar</a></li>
                            <li :class="[isDonut ? 'active' : '']"><a href="#tab3" data-toggle="tab" @click="donut">Donut</a></li>
                            <li :class="[isStacked ? 'active' : '']"><a href="#tab4" data-toggle="tab" @click="stacked">Stacked Bar</a></li>
                        </ul>
                    </span>
            </div>
            <div class="panel-body">
              <div class="tab-content">
                <div class="tab-pane active" id="tab1">
                  <div style="width: 300px;height: 200px; margin: 0 auto;">
                    <div style="margin: 0 50px;">
                      <div class="col-md-3">
                        <label>Label</label>
                        <div v-for="em in this.labelNewForChart">
                          <select v-model="labelForChart">
                            <option v-for="e in em" :value="e" v-if="e !== 'background'">{{e}}</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-3" style="margin-left:40px;">
                        <label>Data</label>
                        <div v-for="em in this.dataNewForChart">
                          <select v-model="dataForChart">
                            <option v-for="e in em" :value="e" v-if="e !== 'background' && e !== 'name' && e !== 'city'">{{ e }}</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <Pie :chart-data="datacollection" :options="options"></Pie>
                    <div class="text-center">
                      <button class="btn btn-info" @click="fillData()">Go!</button>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab2">
                  <div style="width: 300px;height: 200px; margin: 0 auto;">
                  <div style="margin: 0 50px;">
                    <div class="col-md-3">
                      <label>Label</label>
                      <div v-for="em in this.labelNewForChart">
                        <select v-model="labelForChart">
                          <option v-for="e in em" :value="e" v-if="e !== 'background'">{{e}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-3" style="margin-left:40px;">
                      <label>Data</label>
                      <div v-for="em in this.dataNewForChart">
                        <select v-model="dataForChart">
                          <option v-for="e in em" :value="e" v-if="e !== 'background' && e !== 'name' && e !== 'city'">{{ e }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <bar :chart-data="datacollection" :options="optionsByBar"></bar>
                  <div class="text-center">
                    <button class="btn btn-info" @click="fillData()">Go!</button>
                  </div>
                </div>
                </div>
                <div class="tab-pane" id="tab3">
                  <div style="width: 300px;height: 200px; margin: 0 auto;">
                    <div style="margin: 0 50px;">
                      <div class="col-md-3">
                        <label>Label</label>
                        <div v-for="em in this.labelNewForChart">
                          <select v-model="labelForChart">
                            <option v-for="e in em" :value="e" v-if="e !== 'background'">{{e}}</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-3" style="margin-left:40px;">
                        <label>Data</label>
                        <div v-for="em in this.dataNewForChart">
                          <select v-model="dataForChart">
                            <option v-for="e in em" :value="e" v-if="e !== 'background' && e !== 'name' && e !== 'city'">{{ e }}</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <Donut :chart-data="datacollection" :options="options"></Donut>
                    <div class="text-center">
                      <button class="btn btn-info" @click="fillData()">Go!</button>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab4">
                  <div style="width: 300px;height: 250px; margin: 0 auto;">
                    <div style="margin: 0 50px;">
                      <div class="col-md-3">
                        <label>Label</label>
                        <div v-for="em in this.labelNewForChart">
                          <select v-model="labelForChart" style="margin-bottom: 10px;">
                            <option v-for="e in em" :value="e" v-if="e !== 'background'">{{e}}</option>
                          </select>
                          <select v-model="label2ForChart">
                            <option v-for="e in em" :value="e" v-if="e !== 'background'">{{e}}</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-3" style="margin-left:40px;">
                        <label>Data</label>
                        <div v-for="em in this.dataNewForChart">
                          <select v-model="dataForChart">
                            <option v-for="e in em" :value="e" v-if="e !== 'background' && e !== 'name' && e !== 'city'">{{ e }}</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <StackedBar :chart-data="datacollectionByStacked" :options="optionsByStacked"></StackedBar>
                    <div class="text-center">
                      <button class="btn btn-info" @click="fillData()">Go!</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Pie from './pie.js'
  import Bar from './bar.js'
  import Donut from './donut.js'
  import StackedBar from './stackedBar'
  import { groupBy, sumBy, fill, forEach, map } from 'lodash'
export default {
  name: 'app',
  components: {
    Pie,
    Bar,
    Donut,
    StackedBar
  },
  data () {
    return {
      employees: [
        { name: "mike", salary: 204 , city: "LA", age: 90, background: "#172b4d" },
        { name: "mike", salary: 204 , city: "LA", age: 90, background: "#172b4d"},
        { name: "mike", salary: 3000  , city: "KR", age: 70, background: "#5e72e4"},
        { name: "max", salary: 405 , city: "New York", age: 55, background: "#f4f5f7" },
        { name: "harry", salary: 120 , city: "LA", age: 40, background: "#11cdef" },
        { name: "dax", salary: 115 , city: "Vegas", age: 23, background: "#2dce89" },
        { name: "dax", salary: 520 , city: "Vegas", age: 18, background: "#2dce89" },
        { name: "crack", salary: 120  , city: "Florida", age: 20, background: "#f5365c"},
        { name: "pack", salary: 1500  , city: "Vegas", age: 35, background: "#fb6340"}
      ],
      dataForChart: null,
      labelForChart: null,
      label2ForChart: null,
      datacollection: null,
      datacollectionByStacked: null,
      options: null,
      optionsByBar: null,
      optionsByStacked: null,
      dataNewForChart: [],
      labelNewForChart: [],
      labellabel: [],
      rows: [],
      label:[],
      labelStacked: [],
      dataStacked: [],
      data: [],
      isPie: true,
      isDonut: false,
      isBar: false,
      isStacked: false,
      background: []
    }
  },
  mounted () {
    this.filterBydropwodn()
  },
  methods: {
     filterBydropwodn () {
      let obj = {}
      this.employees.map(emp => {
        console.log(Object.keys(emp))
        obj = Object.keys(emp)

      })
      this.labelNewForChart.push(obj)
      this.dataNewForChart.push(obj)
    },
      fillData() {
          this.label = []
          this.labelStacked = []
          this.data = []
          this.dataStacked = []
          this.background = []
          let arr = this.employees
          const ans = _(arr).groupBy(this.labelForChart)
              .map((platform, n) => ({
                  [this.labelForChart]: n,
                  [this.dataForChart]: _.sumBy(platform, this.dataForChart),
                  background: _.sumBy(platform, 'background')
              }))
              .value()
          let arr_level1 = groupBy(arr, this.labelForChart);
          let arr_level2 = map(arr_level1, d => {
              return groupBy(d, this.label2ForChart)
          })
          let obgOp = _(arr_level2).map((outer, inner) => (
              map(outer, (data, label) => ({
                  [this.label2ForChart]: label,
                  [this.dataForChart]: _.sumBy(data, this.dataForChart),
                  background: _.sumBy(data, 'background')
              }))
          ))
              .value()
          console.log(obgOp, 'obgOp')
          console.log(Object.keys(arr_level1), 'level 1')
          console.log(arr_level2, 'level 2')
          obgOp.map(d => {
              map(d, (data, index) => {
                  this.labelStacked.push(`${data[this.label2ForChart]} - ${data[this.dataForChart]}`)
                  this.dataStacked.push(data[this.dataForChart])
                  if (data.background.length !== 7) {
                      this.background.push(data.background.substr(7, 7))
                  } else {
                      this.background.push(data.background)
                  }
              })
          })
          var Charts = {
              setOrder: ['danger', 'warning', 'success', 'primary', 'info'],
              colors: {
                  theme: {
                      'default': '#172b4d',
                      'primary': '#5e72e4',
                      'secondary': '#f4f5f7',
                      'info': '#11cdef',
                      'success': '#2dce89',
                      'danger': '#f5365c',
                      'warning': '#fb6340'
                  }
              }
          }
          var $employ_obj_type_barchar_data = {
              labels: Object.keys(arr_level1),
              datasets: []
          };
          let secondLabel = this.label2ForChart
          let firstLabel = this.labelForChart
          let dataForStacked = this.dataForChart
          forEach(groupBy(arr, secondLabel), function (key, value) {
              var $data = Array(Object.keys(arr_level1).length).fill(0);
              forEach(groupBy(key, firstLabel), function (_key, _index) {
                  if (_key.length > 0) {
                      $data[Object.keys(arr_level1).indexOf(_index)] = _.sumBy(_key, dataForStacked)
                  } else {
                      $data[Object.keys(arr_level1).indexOf(_index)] = _key.length;
                  }
              })
              $employ_obj_type_barchar_data.datasets.push({
                  label: value,
                  data: $data,
                  backgroundColor: Charts.colors.theme[Charts.setOrder[$employ_obj_type_barchar_data.datasets.length]]
              })
          })
          this.datacollectionByStacked = $employ_obj_type_barchar_data


          ans.map(d => {
              this.label.push(`${d[this.labelForChart]} - ${d[this.dataForChart]}`)
              this.labellabel.push(d[this.labelForChart])
              this.data.push(d[this.dataForChart])
              if (d.background.length !== 7) {
                  this.background.push(d.background.substr(7, 7))
              } else {
                  this.background.push(d.background)
              }
          })
          this.datacollection = {
              labels: this.label,
              datasets: [
                  {
                      label: this.dataForChart,
                      backgroundColor: this.background,
                      data: this.data
                  }
              ]
          }
          this.options = {
              tooltips: {
                  enabled: true,
                  callbacks: {
                      label: ((tooltipItems, data) => {
                          return data['labels'][tooltipItems['index']]
                      })
                  }
              }
          }

          this.optionsByStacked = {
              scales: {
                  xAxes: [{
                      stacked: true,
                      categoryPercentage: 0.5,
                      barPercentage: 1
                  }],
                  yAxes: [{
                      stacked: true
                  }]
              }
          }
          this.optionsByBar = {
              tooltips: {
                  enabled: true,
                  callbacks: {
                      label: ((tooltipItems, data) => {
                          return ''
                      })
                  }
              }
          }
      },
    bar () {
      this.isPie = false
      this.isDonut = false
      this.isBar = true
      this.isStacked = false
      jQuery('#tab1').removeClass('active')
      jQuery('#tab3').removeClass('active')
      jQuery('#tab4').removeClass('active')
      jQuery('#tab2').addClass('active')
    },
    pie () {
      this.isPie = true
      this.isDonut = false
      this.isBar = false
      this.isStacked = false
      jQuery('#tab3').removeClass('active')
      jQuery('#tab2').removeClass('active')
      jQuery('#tab4').removeClass('active')
      jQuery('#tab1').addClass('active')
    },
    donut () {
      this.isPie = false
      this.isDonut = true
      this.isBar = false
      this.isStacked = false
      jQuery('#tab2').removeClass('active')
      jQuery('#tab1').removeClass('active')
      jQuery('#tab4').removeClass('active')
      jQuery('#tab3').addClass('active')
    },
    stacked () {
      this.isPie = false
      this.isDonut = false
      this.isBar = false
      this.isStacked = true
      jQuery('#tab2').removeClass('active')
      jQuery('#tab1').removeClass('active')
      jQuery('#tab3').removeClass('active')
      jQuery('#tab4').addClass('active')
    }
  }
}
</script>

<style scoped>
  .panel-tabs {
    position: relative;
    bottom: 30px;
    clear:both;
    border-bottom: 1px solid transparent;
  }

  .panel-tabs > li {
    float: left;
    margin-bottom: -1px;
  }

  .panel-tabs > li > a {
    margin-right: 2px;
    margin-top: 4px;
    line-height: .85;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
    color: #ffffff;
  }

  .panel-tabs > li > a:hover {
    border-color: transparent;
    color: #ffffff;
    background-color: transparent;
  }

  .panel-tabs > li.active > a,
  .panel-tabs > li.active > a:hover,
  .panel-tabs > li.active > a:focus {
    color: #fff;
    cursor: default;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    background-color: rgba(255,255,255, .23);
    border-bottom-color: transparent;
  }
  .panel-body {
    height: 450px;
  }
</style>
