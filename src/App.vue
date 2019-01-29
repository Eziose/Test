<template>
  <div id="app">
    <div class="text-center">
      <img src="./assets/logo1.png" class="logo" alt="logo-main">
      <div class="container">
        <div class="wrapper">
          <div class="row">
            <div class="col-md-4 currency-stops-info">
              <byFilter @checkedTicketByFilter="checkedTicketByFilter"/>
            </div>
            <div class="col-md-8">
              <div class="row card-info" v-for="ticket in checkedTicket">
                <div class="col-md-4 btn-logo">
                  <div class="logo-card">
                    <img src="./assets/logo.png" alt="company">
                  </div>
                  <div class="btn-buy">
                    <button class="btn btn-orange">Купить<br/> {{ticket.price}}</button>
                  </div>
                </div>
                <div class="col-md-8 total-info">
                  <div class="col-md-4 time-zona">
                    <h4 class="time">{{ ticket.departure_time }}</h4>
                    <p class="city">{{ ticket.origin }}, {{ ticket.origin_name }}</p>
                    <p class="date">{{ ticket.departure_date }}</p>
                  </div>
                  <div class="col-md-4 time-zona">
                    <h6 class="count-stops">{{ ticket.stops }} пересадка</h6>
                    <div>
                      <hr>
                      <img src="./assets/plane.png" class="image-plane" alt="logo-plane">
                    </div>
                  </div>
                  <div class="col-md-4 time-zona-return">
                    <h4 class="time-return">{{ ticket.arrival_time }}</h4>
                    <p class="city-return">{{ticket.destination}}, {{ticket.destination_name}}</p>
                    <p class="date-return">{{ ticket.arrival_date }}</p>
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
import byFilter from './assets/components/filter'
import axios from 'axios'
export default {
  name: 'app',
  components: {byFilter},
  data () {
    return {
      data: null,
      currency: "RUB",
      checked: 4,
      usd: 66,
      eur: 75,
      isRUB: {
        currency: 'RUB',
        isActive: true
      },
      isUSD: {
        currency: 'USD',
        isActive: false
      },
      isEUR: {
        currency: 'EUR',
        isActive: false
      },
      rub: 0.63
    }
  },
  mounted() {
    this.getTicket()
  },
  computed : {
    sortedArray: function () {
      function compare(a, b) {
        if (a.price < b.price)
          return -1;
        if (a.price > b.price)
          return 1;
        return 0;
      }

      return this.data.sort(compare);
    },
    checkedTicket: function () {
      if (this.data) {
        if (this.checked === 4) {
          return this.sortedArray
        } else {
          return this.sortedArray.filter(t => t.stops === this.checked)
        }
      }
    }
  },
  methods: {
    checkedTicketByFilter(data) {
      this.checked = data
    },
    getTicket() {
      axios.get('https://raw.githubusercontent.com/Eziose/test/master/src/tickets.json')
              .then(res => {
                this.data = res.data.tickets
              })
              .catch(err => {
                console.log(err)
              })
    }
    /*currencies(cur, titleCur) {
      this.data.map(i => {
        if (titleCur === this.isUSD.currency && this.isRUB.isActive === true) {
          i.price = `${((parseInt(i.price) / (cur)).toFixed(0))}`
          return this.isUSD.isActive === true
        }
        if (titleCur === this.isEUR.currency && this.isRUB.isActive === true) {
          i.price = `${((parseInt(i.price) / (cur)).toFixed(0))}`
          this.isEUR.isActive === true
        }
        if (titleCur === this.isRUB.currency && this.isEUR.isActive === true) {
          i.price = `${(parseInt(i.price)* (76.6)).toFixed(0)}`
          this.isRUB.isActive === true
        }

        if (titleCur === 'USD' && this.isFrom === 'RUB') {
          i.price = `${((parseInt(i.price) / (cur)).toFixed(0))}`
          return this.isFrom = 'USD'
        }
        if (titleCur === 'USD' && this.isFrom === 'EUR') {
          i.price = `${((parseInt(i.price) * (1.14)).toFixed(0))}`
          return this.isFrom = 'EUR'
        }
        if (titleCur === 'EUR' && this.isFrom === 'RUB') {
          i.price = `${((parseInt(i.price) / (cur)).toFixed(0))}`
          return this.isFrom = 'EUR'
        }
        if (titleCur === 'EUR' && this.isFrom === 'USD') {
           i.price = `${((parseInt(i.price) * (0.87)).toFixed(0))}`
           return this.isFrom = 'EUR'
        }
        if (titleCur === 'RUB' && this.isFrom === 'USD') {
          i.price = `${(parseInt(i.price)* (67)).toFixed(0)}`
          return this.isFrom = 'RUB'
        }
        if (titleCur === 'RUB' && this.isFrom === 'EUR') {
          i.price = `${(parseInt(i.price)* (76.6)).toFixed(0)}`
          return this.isFrom = 'RUB'
      })
      return this.data
    }*/
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
  .logo {
    margin-bottom: 50px;
  }
  .wrapper {
    width: 860px;
    margin: 0 auto;
  }
input[type=checkbox]:after {
  background-color: #fff;
}

  .card-info {
    padding: 0;
    border-radius: 5px;
    background-color: #fff;
    margin-bottom: 20px;
  }
  .logo-card {
    padding: 26px 0;
  }
  .btn-buy {
    padding-bottom: 25px;
  }
  .btn-orange {
    background-color: #FF6D00;
    color: #fff;
    border: none !important;
    width: 160px;
    height: 55px;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }
  .btn-logo {
    border-right: 1px solid #ECEFF1;
  }
  .time-zona {
    padding: 0;
  }
  .city {
    font-size: 11px;
    margin-bottom: 5px;
    text-align: left;
    font-family: 'Open Sans', sans-serif;
  }
  .time {
    text-align: left;
    margin-top: 26px;
    margin-bottom: 12px;
    font-size: 32px;
    font-family: 'Open Sans', sans-serif;
  }
  .date {
    font-size: 11px;
    color: #8B9497;
    text-align: left;
    font-family: 'Open Sans', sans-serif;
  }
  .count-stops {
    font-family: 'Open Sans', sans-serif;
    font-size: 10px;
    margin-top: 32px;
    margin-bottom: 0;
    color: #8B9497;
    text-transform: uppercase;
  }
  hr {
    margin-top: 8px;
  }
  .image-plane {
    position: absolute;
    top:45px;
    right: -10px;
  }
.city-return {
  font-size: 11px;
  margin-bottom: 5px;
  text-align: right;
  font-family: 'Open Sans', sans-serif;
}
.time-return {
  text-align: right;
  margin-top: 26px;
  margin-bottom: 12px;
  font-size: 32px;
  font-family: 'Open Sans', sans-serif;
}
.date-return {
  font-size: 11px;
  color: #8B9497;
  text-align: right;
  font-family: 'Open Sans', sans-serif;
}
.time-zona-return {
  padding: 0;
}
  .total-info {
    padding-right: 10px;
    padding-left: 10px;
  }
.currency-stops-info {
  padding-right: 0;
}
</style>
