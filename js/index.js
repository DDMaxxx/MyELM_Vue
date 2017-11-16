/**
 * Created by Administrator on 2017/5/22.
 */
$(function () {

    // 处理导航切换变色
    $(".shapNav a").click(function () {
        $(this).addClass("active");
        $(this).parent().siblings().find("a").removeClass("active");//先取父辈元素，再取同辈元素，去之中的a ，去除
    });

    $("dl:last").css("border-bottom","0px");

    $(".shopClass h3").click(function () {
        $(".shopClass_show").stop().slideToggle(400);
    })

    $(".shopClass_show .shopClass_item").hover(function () {
        // $(".shopClass_show .shopClass_item a").addClass('shopClass_item_a_hover');
        $(this).find('a').addClass('shopClass_item_a_hover');
        $(this).find('.aLink').addClass('shopClass_item_a_hover_alink');
        $(this).addClass('shopClass_item_hover');
        $('.shopClass_list').stop().fadeIn(400);
    },function () {
        $(this).find('a').removeClass('shopClass_item_a_hover');
        $(this).find('.aLink').removeClass('shopClass_item_a_hover_alink');
        $(this).removeClass('shopClass_item_hover');
        $('.shopClass_list').stop().fadeOut(400);
    })

    //处理banner index
    $(".banner_index li").click(function () {
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".imgBox").stop().animate({left:-810*index+"px"},500);
    })

})
