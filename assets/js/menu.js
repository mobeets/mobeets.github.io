function onKeyDown(event) {
    console.log(event.key);
    console.log(event.keyCode);
    if(event.keyCode == 115 || event.key == 's') {
        $('#stars').toggle();
    }
    if(event.keyCode == 99 || event.key == 'c') { // "c"
        window.location.href = "/colophon.html";
    }
    if(event.keyCode == 104 || event.key == 'h') { // "h"
        window.location.href = "/";
    }
}

function init() {
    $('#escapepad').click(function () {
        justHid = false;
        if ( $('#escapepad-label').is(':visible') ){ $('#escapepad-label').hide(); $('#escapepad-open').hide(); $('#escapepad-close').show(); justHid = true; }
        $('#contacts').toggle('slide', { direction: 'right' }, 400, function () { if ( !justHid ){ $('#escapepad-label').show(); $('#escapepad-open').show(); $('#escapepad-close').hide(); } });
    });
    $("body").keypress(onKeyDown);
}

$(document).ready(init);
