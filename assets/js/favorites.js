var years = new Array();
years['books'] = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
years['music'] = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
years['all'] = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
years['movies'] = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
years['misc'] = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021];
var year = 2023;
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
