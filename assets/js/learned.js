let DEFAULT_TAG = '';
let tag = DEFAULT_TAG;

function clear_filters() {
    tag = DEFAULT_TAG;
    window.location.href = makeUpdateUrl(tag);
    update(tag);
    console.log('resetting.');
}

function show_filter_status() {
    var comment = '';
    if (tag.length > 0) {
        comment += 'tagged "' + tag + '"';
    }
    if (comment.length > 0) {
        clear_btn = ' <div class="btn-clear">Clear</div>';
        comment = 'Showing all entries ' + comment + clear_btn;  
    }
    $('#filter_status').html(comment);
    $('.btn-clear').click(clear_filters);
}

function hide_items_not_matching_attr(name, cur) {
    if (cur.length > 0) {
        let cItemSel = '.btn-' + name + '[data-' + name + '="' + cur + '"]';
        // find items without a child matching the description
        $('.media-item:not(:has(' + cItemSel + '))').hide();
    }
}

function update_btn_item(name, cur) {
    $('.btn-' + name).removeClass('btn-active');
    $('.btn-' + name).addClass('btn-inactive');
    $('.btn-' + name + '[data-' + name + '="' + cur + '"]').removeClass('btn-inactive');
    $('.btn-' + name + '[data-' + name + '="' + cur + '"]').addClass('btn-active');
}

function update(tag) {
    update_btn_item('tag', tag);
    $('.media-item').show();
    hide_items_not_matching_attr('tag', tag);
    show_filter_status();
}

function set_default_item(lochash, name, cur) {
    var val = lochash.substr(lochash.indexOf(name + '='))
      .split('&')[0]
      .split('=')[1];
    return val ? val : cur;
}

function set_default() {
    var lochash = location.hash.substr(1);
    tag = set_default_item(lochash, 'tag', tag);
}

function makeUpdateUrl(tag) {
    let url = "";
    if (tag.length > 0) url = "#tag=" + tag;
    return url;
}

function update_tag() {
    lasttag = $(this).data('tag');
    if (lasttag == tag) {
        tag = '';
    } else {
        tag = lasttag;
    }
    window.location.href = makeUpdateUrl(tag);
    update(tag);
}

function init() {
    $('.btn-tag').click(update_tag);
    set_default();
    update(tag);
    // $('.media-items').css('margin-left', '0px');
}

$(document).ready(init);
