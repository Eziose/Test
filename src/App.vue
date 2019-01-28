<template>
  <div id="app">
    <div class="text-center">
    <img src="./assets/logo1.png" class="logo">
    <div class="container">
      <div class="wrapper">
      <div class="row">
        <div class="col-md-4 currency-stops-info">
          <div class="container currency-wrapper">
            <h5 class="text-left currency-text">Валюта</h5>
            <div class="row currency">
              <div>
              <a class="col-md-4 currency-rub">RUB</a>
            </div>
            <div>
              <a class="col-md-4 currency-usd">USD</a>
            </div>
            <div>
              <a class="col-md-4 currency-eur">EUR</a>
            </div>
            </div>
            <h5 class="text-left currency-text">Количество пересадок</h5>
              <div class="row checkbox-hover">
                <div class="col-md-1">
                  <input type="checkbox" class="input-checkbox-stops">
                </div>
                <div class="row col-md-6 about-stops">
                  <label class="form-check-label checkbox-info">
                    Все
                  </label>
                  <a href="" class="only-a"><p class="only-p"><span class="only-span"></span></p></a>
                </div>
              </div>
              <div class="row checkbox-hover">
                <div class="col-md-1">
                  <input type="checkbox" class="input-checkbox-stops">
                </div>
                <div class="row col-md-6 about-stops">
                  <label class="form-check-label checkbox-info">
                    Без пересадок
                  </label>
                  <a href="" class="only-a"><p class="only-p"><span class="only-span"></span></p></a>
                </div>
              </div>
            <div class="row checkbox-hover">
              <div class="col-md-1">
                <input type="checkbox" class="input-checkbox-stops">
              </div>
              <div class="row col-md-6 about-stops">
                <label class="form-check-label checkbox-info">
                  1 пересадка
                </label>
                <a href="" class="only-a"><p class="only-p"><span class="only-span"></span></p></a>
              </div>
            </div>
              <div class="row checkbox-hover">
                <div class="col-md-1">
                  <input type="checkbox" class="input-checkbox-stops">
                </div>
                <div class="row col-md-6 about-stops">
                  <label class="form-check-label checkbox-info">
                    2 пересадки
                  </label>
                  <a href="" class="only-a"><p class="only-p"><span class="only-span"></span></p></a>
                </div>
              </div>
              <div class="row checkbox-hover">
                <div class="col-md-1">
                  <input type="checkbox" class="input-checkbox-stops">
                </div>
                <div class="row col-md-6 about-stops">
                  <label class="form-check-label checkbox-info">
                    3 пересадки
                  </label>
                  <a href="" class="only-a"><p class="only-p"><span class="only-span"></span></p></a>
                </div>
              </div>
            </div>
            </div>
        <div class="col-md-8 card-info">
            <div class="col-md-5 btn-logo">
              <div class="logo-card">
                <img src="./assets/logo.png">
              </div>
              <div class="btn-buy">
                <button class="btn btn-orange">Купить<br/>  за 21 032 ​₽</button>
              </div>
            </div>
          <div class="col-md-7 total-info">
            <div class="col-md-4 time-zona">
              <h4 class="time">09:25</h4>
              <p class="city">VVO, Владивосток</p>
              <p class="date">9 окт 2018, Пт</p>
            </div>
            <div class="col-md-4 time-zona">
              <h6 class="count-stops">1 пересадка</h6>
              <div>
                <hr><img src="./assets/plane.png" class="image-plane">
              </div>
            </div>
            <div class="col-md-4 time-zona-return">
              <h4 class="time-return">09:25</h4>
              <p class="city-return">VVO, Владивосток</p>
              <p class="date-return">9 окт 2018, Пт</p>
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
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
  .logo {
    margin-bottom: 50px;
  }
  .wrapper {
    width: 820px;
    margin: 0 auto;
  }
  .currency-wrapper {
    width: 232px;
    height: 334px;
    background: #fff;
    border-radius: 5px;
  }
  .currency-text {
    font-size: 12px;
    text-transform: uppercase;
    color: #4A4A4A;
    margin: 0;
    padding: 20px 0 15px 0;
    font-family: 'Open Sans', sans-serif;
  }
  .currency {
    border: 1px solid #D2D5D6;
    height: 40px;
    width: 204px;
    padding: 10px;
    margin: 0;
    border-radius: 5px;
    text-decoration: none;
  }
  .currency-usd {
    border-left: 1px solid #D2D5D6;
    border-right: 1px solid #D2D5D6;
  }
  .currency-rub, .currency-usd, .currency-eur {
    text-decoration: none;
  }
.currency-rub:hover, .currency-usd:hover, .currency-eur:hover {
  color: #164d7f;
  cursor: pointer;
}
  .checkbox-info {
    font-weight: normal;
  }
  .about-stops {
    padding: 0;
    padding-left: 12px;
    text-align: left;
    font-size: 13px;
    color: #4A4A4A;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
  .input-checkbox-stops {
    width: 15px;
    height: 15px;
    margin: 2px 0 0;
    border-radius: 5px;
    background-color: #fff;
  }
input[type=checkbox]:after {
  background-color: #fff;
}
  .checkbox-hover {
    padding: 2px 0;
  }
  .checkbox-hover:hover {
    background-color: #F1FCFF;
  }
  .currency-stops-info {
    padding-right: 0;
  }
  .card-info {
    padding: 0;
    background-color: #fff;
    border-radius: 5px;
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
    border-color: none !important;
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
.only-a {
  position: absolute;
  right: -65px;
  text-decoration: none;
}
  .total-info {
    padding-right: 10px;
    padding-left: 10px;
  }
  .checkbox-hover:hover p.only-p:after {
    content: 'только'
  }
</style>
