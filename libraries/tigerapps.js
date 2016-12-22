// @author Grace Guan. @edited 12/21/16. made with love in CA.
$(".pounce").hover(function() {
    $(".hometext-pounce").stop().stop().fadeOut('fast', function() {
        $(".hovertext-pounce").stop().stop().fadeIn('fast');
    });
}, function() {
	$(".hovertext-pounce").stop().fadeOut('fast', function() {
        $(".hometext-pounce").stop().stop().fadeIn('fast');
    });
});
$(".trade").hover(function() {
    $(".hometext-trade").stop().stop().fadeOut('fast', function() {
        $(".hovertext-trade").stop().stop().fadeIn('fast');
    });
}, function() {
	$(".hovertext-trade").stop().fadeOut('fast', function() {
        $(".hometext-trade").stop().fadeIn('fast');
    });
});
$(".rooms").hover(function() {
    $(".hometext-rooms").stop().fadeOut('fast', function() {
        $(".hovertext-rooms").stop().fadeIn('fast');
    });
}, function() {
	$(".hovertext-rooms").stop().fadeOut('fast', function() {
        $(".hometext-rooms").stop().fadeIn('fast');
    });
});
$(".recal").hover(function() {
    $(".hometext-recal").stop().fadeOut('fast', function() {
        $(".hovertext-recal").stop().fadeIn('fast');
    });
}, function() {
	$(".hovertext-recal").stop().fadeOut('fast', function() {
        $(".hometext-recal").stop().fadeIn('fast');
    });
});
$(".tigerbook").hover(function() {
    $(".hometext-tigerbook").stop().fadeOut('fast', function() {
        $(".hovertext-tigerbook").stop().fadeIn('fast');
    });
}, function() {
	$(".hovertext-tigerbook").stop().fadeOut('fast', function() {
        $(".hometext-tigerbook").stop().fadeIn('fast');
    });
});
$(".fbsearch").hover(function() {
    $(".hometext-fbsearch").stop().fadeOut('fast', function() {
        $(".hovertext-fbsearch").stop().fadeIn('fast');
    });
}, function() {
	$(".hovertext-fbsearch").stop().fadeOut('fast', function() {
        $(".hometext-fbsearch").stop().fadeIn('fast');
    });
});
$(".easypce").hover(function() {
    $(".hometext-easypce").stop().fadeOut('fast', function() {
        $(".hovertext-easypce").stop().fadeIn('fast');
    });
}, function() {
	$(".hovertext-easypce").stop().fadeOut('fast', function() {
        $(".hometext-easypce").stop().fadeIn('fast');
    });
});