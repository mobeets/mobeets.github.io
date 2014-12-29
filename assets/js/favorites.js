Array.prototype.exists = function (x) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == x) return true;
    }
    return false;
}

var years = new Array();
years['books'] = [2012, 2013, 2014];
years['music'] = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014];
years['all'] = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014];
var year = 2014;
var list = 'all';

function set_default() {
    var lochash = location.hash.substr(1);
    var setyear = lochash.substr(lochash.indexOf('year='))
                  .split('&')[0]
                  .split('=')[1];
    var setlist = lochash.substr(lochash.indexOf('list='))
                  .split('&')[0]
                  .split('=')[1];
    if (setlist && setlist in years) { list = setlist; }
    if (setyear && years[list].exists(setyear)) { year = setyear; }
}

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
    if (list === 'all') {
        $("div[id$=" + year + "]").show();
    }
    else {
        $('#' + list + '-' + year).show();
    }

    if (!years[list].exists(year))
    {
        year = years[list][Math.floor(Math.random() * years[list].length)];
        update(list, year);
    }
}

function update_year() {
    year = $(this).data('year');
    window.location.href = "/favorites.html#year=" + year + "&list=" + list;
    update(list, year);
}

function update_list() {
    list = $(this).data('list');
    window.location.href = "/favorites.html#year=" + year + "&list=" + list;
    update(list, year);
}

function toggle_images() {
    $('.list-img').toggle();
    if($('.list-img').is(':visible')) {
        console.log('1');
        $('.btn-img').html('Hide images');
    } else {
        console.log('2');
        $('.btn-img').html('Show images');
    }
    console.log('here');
}

function init() {
    $('.btn-list').click(update_list);
    $('.btn-year').click(update_year);
    $('.btn-img').click(toggle_images);
    $('.list-img').toggle(); // images hidden by default
    set_default();
    update(list, year);
}

$(document).ready(init);
