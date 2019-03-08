<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title">Charts</h3>
              <span class="pull-right">
                        <!-- Tabs -->
                        <ul class="nav panel-tabs">
                            <li :class="[isPie ? 'active' : '']"><a href="#tab1" data-toggle="tab" @click="pie">Pie</a></li>
                            <li :class="[isBar ? 'active' : '']"><a href="#tab2" data-toggle="tab" @click="bar">Bar</a></li>
                            <li :class="[isDonut ? 'active' : '']"><a href="#tab3" data-toggle="tab" @click="donut">Donut</a></li>

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
                    <Pie :chart-data="datacollection"></Pie>
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
                  <bar :chart-data="datacollection"></bar>
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
                    <Donut :chart-data="datacollection"></Donut>
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
  import { groupBy, sumBy } from 'lodash'
export default {
  name: 'app',
  components: {
    Pie,
    Bar,
    Donut
  },
  data () {
    return {
      employees: [
        { name: "mike", salary: 204 , city: "LA", age: 90, background: "#334344" },
        { name: "mike", salary: 3000  , city: "KR", age: 70, background: "#7cd6a1"},
        { name: "max", salary: 405 , city: "New York", age: 55, background: "#234522" },
        { name: "harry", salary: 120 , city: "Montana", age: 40, background: "#755665" },
        { name: "dax", salary: 115 , city: "Vegas", age: 23, background: "#2ecdf2" },
        { name: "crack", salary: 120  , city: "Florida", age: 20, background: "#f2ba2c"},
        { name: "pack", salary: 1500  , city: "Vegas", age: 35, background: "#8c1d17"}
      ],
      dataForChart: null,
      labelForChart: null,
      datacollection: null,
      dataNewForChart: [],
      labelNewForChart: [],
      rows: [],
      label:[],
      data: [],
      isPie: true,
      isDonut: false,
      isBar: false,
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
    fillData () {
      this.label = []
      this.data = []
      this.background = []
      let arr = this.employees
      const ans = _(arr).groupBy(this.labelForChart)
              .map((platform, n) => ({
                [this.labelForChart]: n,
                [this.dataForChart]: _.sumBy(platform, this.dataForChart),
                background: _.sumBy(platform, 'background')
              }))
              .value()
      console.log(ans, 'empoo')
      ans.map(d => {
        this.label.push(d[this.labelForChart])
        this.data.push(d[this.dataForChart])
        if (d.background.length !== 7) {
          this.background.push(d.background.substr(7,7))
        } else {
          this.background.push(d.background)
        }
      })
      /*this.employees.map(d => {
        console.log(d[this.labelForChart], 'd[this.labelForChart]')
        this.label.push(d[this.labelForChart])
        this.data.push(d[this.dataForChart])
        console.log(this.data, 'data')
        this.background.push(d.background)
      })*/
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
    },
    bar () {
      this.isPie = false
      this.isDonut = false
      this.isBar = true
      jQuery('#tab1').removeClass('active')
      jQuery('#tab3').removeClass('active')
      jQuery('#tab2').addClass('active')
    },
    pie () {
      this.isPie = true
      this.isDonut = false
      this.isBar = false
      jQuery('#tab3').removeClass('active')
      jQuery('#tab2').removeClass('active')
      jQuery('#tab1').addClass('active')
    },
    donut () {
      this.isPie = false
      this.isDonut = true
      this.isBar = false
      jQuery('#tab2').removeClass('active')
      jQuery('#tab1').removeClass('active')
      jQuery('#tab3').addClass('active')
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
    height: 400px;
  }
</style>
