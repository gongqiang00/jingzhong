/**
 * Created by Dell on 2017/9/7.
 */
$(document).ready(function(){
    var n=0;
    var Tupi=$(".banner ul li");
    for(var i=0;i<Tupi.length;i++){
        if(i==0){
            $(".pageN").append("<a class='cur'></a>")
        }else{
            $(".pageN").append("<a></a>")
        }
    }
    $(".pageN a").click(function(){
        var index=$(this).index();
        $(this).addClass("cur").siblings().removeClass("cur");
        $(this).parent().siblings("ul").children("li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    });
    $(".rightBtn").click(function(){
        n++;
        if(n>Tupi.length-1){
            n=0;
        }
        $(this).siblings("ul").children("li").eq(n).fadeIn(1000).siblings().fadeOut(1000);
        $(this).siblings(".pageN").children("a").eq(n).addClass("cur").siblings().removeClass("cur");

    });
    $(".leftBtn").click(function(){
        n--;
        if(n<0){
            n=Tupi.length-1;
        }
        $(this).siblings("ul").children("li").eq(n).fadeIn(1000).siblings().fadeOut(1000);
        $(this).siblings(".pageN").children("a").eq(n).addClass("cur").siblings().removeClass("cur");
    });
    function lunbo(){
        n++;
        if(n>Tupi.length){
            n=0;
        }
        Tupi.eq(n).fadeIn(1000).siblings().fadeOut(1000);
        $(".pageN").children("a").eq(n).addClass("cur").siblings().removeClass("cur")
    }
    var t=setInterval(lunbo,2000);
    $(".banner").hover(function(){
        clearInterval(t)
    },function(){
        t=setInterval(lunbo,2000);

    });




});
$(document).ready(function(){
    var a=0;
    var pic=$(".new-pic ul li");

    $(".buttn a").click(function(){
        var index=$(this).index();
        $(this).addClass("cur").siblings().removeClass("cur");
        $(this).parent().siblings("ul").children("li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    });
    function lb(){
        a++;
        if(a<pic.length){
            a=0;
        }
        pic.eq(a).fadeIn(1000).siblings().fadeOut(1000);
        $(".btn").children("a").eq(a).addClass("cur").siblings().removeClass("cur")
    }
    var time=setInterval(lb,2000);
    $(".news-cont").hover(function(){
        clearInterval(time)
    },function(){
        time=setInterval(lb,2000);
    })
});