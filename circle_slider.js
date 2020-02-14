$(function () {
    var $circle = $('#circle'),
        $handler = $('#handler'),
        $p = $('#test'),
        handlerW2 = $handler.width() / 2,
        rad = $circle.width() / 2,
        offs = $circle.offset(),
        elPos = {
            x: offs.left,
            y: offs.top
        },
        mHold = 0,
        PI2 = Math.PI / 180;
    $handler.mousedown(function () {
        mHold = 1;
    });
    $(document).mousemove(function (e) {
        if (mHold) {
            var mPos = {
                x: e.pageX - elPos.x,
                y: e.pageY - elPos.y
            },
            atan = Math.atan2(mPos.x - rad, mPos.y - rad),
                deg = -atan / PI2 + 180,
                perc = (deg * 256 / 360) | 0,
                X = Math.round(rad * Math.sin(deg * PI2)),
                Y = Math.round(rad * -Math.cos(deg * PI2));
            $handler.css({
                left: X + rad - handlerW2,
                top: Y + rad - handlerW2,
                transform: 'rotate(' + deg + 'deg)'
            });
            $circle.css({
                borderColor: "hsl(" + (perc * 360 / 256 - 100) + ",100%,50%)"
            });
            $p.html(perc).css({
                color: "hsl(" + (perc * 360 / 256 - 100) + ",100%,50%)"
            });
        }
    }).mouseup(function () {
        mHold = 0;
    });
});
