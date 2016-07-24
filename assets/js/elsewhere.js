function initEscapePad() {
    $('#escapepad').click(function () {
        justHid = false;
        if ( $('#escapepad-label').is(':visible') ){ 
            $('#escapepad-label').hide();
            $('#escapepad-open').hide();
            $('#escapepad-close').show();
            justHid = true;
        }
        $('#contacts').toggle('slide', { direction: 'right' }, 400, function () {
            if ( !justHid ){
                $('#escapepad-label').show();
                $('#escapepad-open').show();
                $('#escapepad-close').hide();
            }
        });
    });
}


function filterItemsByVal(filterVal) {
    if(filterVal == 'all') {
        $('.items a.hidden').fadeIn('fast').removeClass('hidden');
    } else {
        $('.items a').each(function() {            
            if(!$(this).hasClass('group-' + filterVal)) {
                $(this).fadeOut('fast').addClass('hidden');
            } else {
                $(this).fadeIn('fast').removeClass('hidden');
            }
        });
    }
}

function filterItems() {
    $('.nav a.active').removeClass('active');
    $(this).addClass('active');
    
    // only works for one space, I think
    var filterVal = $(this).text().toLowerCase().replace(' ','-');
    filterItemsByVal(filterVal);
}

function filterItemsFromHash() {
    filterVal = window.location.hash.substring(1);
    $('.nav a.active').removeClass('active');
    cur = $('.nav a:contains("' + filterVal + '")');
    cur.addClass('active');
    filterItemsByVal(filterVal);
}

function init() {
    initEscapePad();
    $('.nav a').click(filterItems);
    if(window.location.hash) {
        filterItemsFromHash();
    }
}

$(document).ready(init);
