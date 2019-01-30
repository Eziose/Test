<template>
    <div class="container currency-wrapper">
        <h5 class="text-left currency-text">Валюта</h5>
        <div class="row currency">
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-secondary active">
                    <input type="radio" name="options" id="option1" value="RUB" autocomplete="off" checked> RUB
                </label>
                <label class="btn btn-secondary btn-secondary2">
                    <input type="radio" name="options" id="option2" value="USD" autocomplete="off"> USD
                </label>
                <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option3" value="EUR" autocomplete="off"> EUR
                </label>
            </div>
        </div>
        <h5 class="text-left currency-text">Количество пересадок</h5>
        <div class="row checkbox-hover">
            <div class="col-md-1 col-sm-1 col-xs-1">
                <input type="radio" :value="4" v-model="checked" class="input-checkbox-stops">
            </div>
            <div class="row col-md-6 col-sm-9 col-xs-9 about-stops">
                <label class="form-check-label checkbox-info">
                    Все
                </label>
                <a href="" class="only-a"><p class="only-p"><span class="only-span"></span></p></a>
            </div>
        </div>
        <div class="row checkbox-hover">
            <div class="col-md-1 col-sm-1 col-xs-1">
                <input type="radio" :value="0" @change="checkedProps" v-model="checked" class="input-checkbox-stops">
            </div>
            <div class="row col-md-6 col-sm-9 col-xs-9 about-stops">
                <label class="form-check-label checkbox-info">
                    Без пересадок
                </label>
                <a href="" class="only-a"><p class="only-p"><span class="only-span"></span></p></a>
            </div>
        </div>
        <div class="row checkbox-hover">
            <div class="col-md-1 col-sm-1 col-xs-1">
                <input type="radio" @change="checkedProps" :value="1" v-model="checked"
                       class="input-checkbox-stops">
            </div>
            <div class="row col-md-6 col-sm-9 col-xs-9 about-stops">
                <label class="form-check-label checkbox-info">
                    1 пересадка
                </label>
                <a href="" class="only-a"><p class="only-p"><span class="only-span"></span></p></a>
            </div>
        </div>
        <div class="row checkbox-hover">
            <div class="col-md-1 col-sm-1 col-xs-1">
                <input type="radio" :value="2" @change="checkedProps" v-model="checked" class="input-checkbox-stops">
            </div>
            <div class="row col-md-6 col-sm-9 col-xs-9 about-stops">
                <label class="form-check-label checkbox-info">
                    2 пересадки
                </label>
                <a href="" class="only-a"><p class="only-p"><span class="only-span"></span></p></a>
            </div>
        </div>
        <div class="row checkbox-hover">
            <div class="col-md-1 col-sm-1 col-xs-1">
                <input type="radio" :value="3" @change="checkedProps" v-model="checked" class="input-checkbox-stops">
            </div>
            <div class="row col-md-6 col-sm-9 col-xs-9 about-stops">
                <label class="form-check-label checkbox-info">
                    3 пересадки
                </label>
                <a href="" class="only-a"><p class="only-p"><span class="only-span"></span></p></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "byFilter",
        data() {
            return {
                checked: 4
            }
        },
        methods: {
            checkedProps() {
                this.$emit('checkedTicketByFilter', this.checked)
            }
        }
    }

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');

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

    .btn-group-toggle {
        border: 1px solid #D2D5D6;
        border-radius: 5px;
    }

    .btn.active {
        background-color: #20a9ff;
        color: #fff;
    }

    label.btn-secondary:hover {
        background-color: rgba(133, 242, 255, 0.32);
    }

    label.btn-secondary {
        padding-left: 18px;
        padding-right: 18px;
    }

    label.btn-secondary2 {
        border-right: 1px solid #D2D5D6;
        border-left: 1px solid #D2D5D6;
    }

    .currency {
        height: 40px;
        width: 204px;
        margin: 0;
        border-radius: 5px;
        text-decoration: none;
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

    .only-a {
        position: absolute;
        right: -65px;
        text-decoration: none;
    }

    .checkbox-hover:hover p.only-p:after {
        content: 'только'
    }

    .checkbox-hover {
        padding: 2px 0;
    }

    .checkbox-hover:hover {
        background-color: #F1FCFF;
    }

    @media (max-width: 767px) and (min-width: 736px) {

    }

    @media (max-width: 768px) {
        .currency-wrapper {
            width: 180px;
            margin-left: 10px;
        }

        label.btn-secondary {
            padding-left: 10px;
            padding-right: 10px;
        }

        .currency {
            width: 155px;
        }

        .currency-text {
            font-size: 11px;
        }
    }

    @media (max-width: 812px) and (min-width: 769px) {
        .currency-wrapper {
            width: 190px;
            margin-left: 10px;
        }

        label.btn-secondary {
            padding-left: 10px;
            padding-right: 10px;
        }

        .currency {
            width: 155px;
        }

        .currency-text {
            font-size: 11px;
        }
    }

    @media (max-width: 374px) and (min-width: 320px) {
        .currency-wrapper {
            width: 96%;
            margin-left: -2px;
            margin-bottom: 15px;
        }

        label.btn-secondary[data-v-0410ed5e] {
            padding-left: 20px;
            padding-right: 20px;
        }

        .currency {
            width: 250px;
        }
    }

    @media (max-width: 376px) and (min-width: 375px) {
        .currency-wrapper {
            width: 342px;
            margin-left: 0;
            margin-bottom: 15px;
        }

        label.btn-secondary[data-v-0410ed5e] {
            padding-left: 25px;
            padding-right: 25px;
        }

        .currency {
            width: 290px;
        }
    }

    @media (max-width: 414px) and (min-width: 377px) {
        .currency-wrapper {
            width: 96%;
            margin-left: 0;
            margin-bottom: 15px;
        }

        label.btn-secondary[data-v-0410ed5e] {
            padding-left: 25px;
            padding-right: 25px;
        }

        .currency {
            width: 335px;
        }
    }

    @media (max-width: 660px) and (min-width: 568px) {
        .currency-wrapper {
            width: 100%;
            margin-left: 5px;
            margin-bottom: 15px;
        }

        label.btn-secondary[data-v-0410ed5e] {
            padding-left: 25px;
            padding-right: 25px;
        }

        .currency {
            width: 100%;
        }
    }
</style>