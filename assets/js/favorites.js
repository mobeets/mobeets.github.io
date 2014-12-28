var years = new Array();
years['reads'] = [2012, 2013, 2014];
years['listens'] = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014];
var year = 2007;
var list = 'listens';

function update_buttons(list) {
    yrs = years[list];
    $('.btn-year').hide();
    for (var i = 0; i < yrs.length; i++) {
        $('.btn-year[data-year="' + yrs[i] + '"]').show();
    }
}

function update(list, year) {
    update_buttons(list);
    $('.btn-list').removeClass('btn-active');
    $('.btn-list').addClass('btn-inactive');
    $('.btn-list[data-list="' + list + '"]').removeClass('btn-inactive');
    $('.btn-list[data-list="' + list + '"]').addClass('btn-active');
    $('.btn-year').removeClass('btn-active');
    $('.btn-year').addClass('btn-inactive');
    $('.btn-year[data-year="' + year + '"]').addClass('btn-active');
    $('.btn-year[data-year="' + year + '"]').removeClass('btn-inactive');
    $('.list-group').hide();
    $('#' + list + '-' + year).show()
}

function update_year() {
    year = $(this).data('year');
    update(list, year);
}

function update_list() {
    list = $(this).data('list');
    update(list, year);
}

function init() {
    $('.btn-list').click(update_list);
    $('.btn-year').click(update_year);
    update('listens', 2007);
}

$(document).ready(init);
