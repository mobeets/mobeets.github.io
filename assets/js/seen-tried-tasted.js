var years = new Array();
years['misc'] = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021];
var year = 2021;
var list = 'misc';

function init() {
    $('.btn-year').click(update_year);
    set_default();
    update(list, year);
}

$(document).ready(init);
