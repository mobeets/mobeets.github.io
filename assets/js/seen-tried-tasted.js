var years = new Array();
years['misc'] = [2013, 2014, 2015, 2016];
var year = 2016;
var list = 'misc';

function init() {
    $('.btn-year').click(update_year);
    set_default();
    update(list, year);
}

$(document).ready(init);
