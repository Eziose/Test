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
            <div class="col-md-1">
                <input type="radio" :value="4" v-model="checked" class="input-checkbox-stops">
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
                <input type="radio" :value="0" @change="checkedProps" v-model="checked" class="input-checkbox-stops">
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
                <input type="radio" @change="checkedProps" :value="1" v-model="checked"
                       class="input-checkbox-stops">
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
                <input type="radio" :value="2" @change="checkedProps" v-model="checked" class="input-checkbox-stops">
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
                <input type="radio" :value="3" @change="checkedProps" v-model="checked" class="input-checkbox-stops">
            </div>
            <div class="row col-md-6 about-stops">
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

</style>