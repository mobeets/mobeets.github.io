function init() {
	$(".item-comments").shorten({
        "showChars" : 200,
        "moreText"  : "[+]",
        "lessText"  : "[-]",
    });
}

$(document).ready(init);
