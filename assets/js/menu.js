function init() {
    $('#escapepad').click(function () {
        justHid = false;
        if ( $('#escapepad-label').is(':visible') ){ $('#escapepad-label').hide(); $('#escapepad-open').hide(); $('#escapepad-close').show(); justHid = true; }
        $('#contacts').toggle('slide', { direction: 'right' }, 400, function () { if ( !justHid ){ $('#escapepad-label').show(); $('#escapepad-open').show(); $('#escapepad-close').hide(); } });
    });
}

$(document).ready(init);
