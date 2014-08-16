function init() {
    var $alarm = $('#alarm').hide();
    var $alarm2 = $('#alarm-2').hide();
    var $shower = $('#shower').hide();
    $alarm.show().arctext({radius: 130});
    $alarm2.show().arctext({radius: 700});
    $shower.show().arctext({radius: 150, dir: -1});
}

$(document).ready(init);
