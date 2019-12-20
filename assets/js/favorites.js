var years = new Array();
years['books'] = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
years['music'] = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
years['all'] = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
years['movies'] = [2016, 2017, 2018, 2019];
years['misc'] = [2013, 2014, 2015, 2016, 2017, 2018];
var year = 2019;
var list = 'all';

function init() {
    $('.btn-list').click(update_list);
    $('.btn-year').click(update_year);
    $('.btn-img').click(toggle_images);
    // $('.list-img').toggle(); // images hidden by default
    set_default();
    update(list, year);
}

$(document).ready(init);
