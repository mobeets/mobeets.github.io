var years = new Array();
years['tracked-all'] = [2015];
years['tracked-books'] = [2015];
years['tracked-movies'] = [2015];
var year = 2015;
var list = 'tracked-all';

function init() {
    $('.btn-list').click(update_list);
    $('.btn-year').click(update_year);
    set_default();
    update(list, year);
}

function makeUpdateUrl(list, year) {
    return "/listed/media-tracked/#year=" + year + "&list=" + list;
}

function update_year() {
    year = $(this).data('year');
    window.location.href = makeUpdateUrl(list, year);
    update(list, year);
}
function update_list() {
    list = $(this).data('list');
    window.location.href = makeUpdateUrl(list, year);
    update(list, year);
}

$(document).ready(init);
