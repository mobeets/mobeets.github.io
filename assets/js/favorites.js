var list = 'all';

function init() {
    $('.btn-list').click(update_list);
    $('.btn-year').click(update_year);
    $('.btn-img').click(toggle_images);
    $('.list-img').toggle(); // images hidden by default
    set_default();
    update(list, year);
}

$(document).ready(init);
