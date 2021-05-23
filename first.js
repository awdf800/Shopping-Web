var i = 1;
$(".shopingCar .add a").click(function () {
    if (i == 0) {
        $(".shopingCar").animate({ right: "0px" }, 500);
        i = 1;
    } else if (i == 1) {
        $(".shopingCar").animate({ right: "-540px" }, 500);
        window.setTimeout("window.location='index.html'", 500);
        i = 0;
    }
});

$(".thing_list ul li p a").click(function () {
    $(this).css("background", "green");

    var img = $(this).parent().siblings("img").attr("src");
    var txt = $(this).parent().siblings("p.top_name").html();
    var money = $(this).siblings("span").html();
    $(".lieb").append("<blockquote><blockquote><img style='float:left' src=' " + img + "width='150' height='150'  /> <p style='float:left'>" + txt + "</p><p style='float:right'>" + money + "</p></blockquote></blockquote>");
        play(event);
});
function play(event){
     var s_left=event.clientX;
     var s_top=event.clientY;
     var e_left=$(".shopingCar .add a").offset().left;
     var e_top=$(".shopingCar .add a").offset().top;
     var _this=$(event.target);
     var img=_this.parent().siblings("img").attr("src");
     var flying= $("<img src='" + img + "' width='50' style='border-radius:50%'/>");
    flying.fly({
        start: {
            left: s_left,
            top: s_top
        },

        end: {
            left: e_left,
            top: e_top
        },

        onEnd: function () {
            flying.fadeOut("slow", function () {
                $(this).remove();
            });
        }
    })
}