/**
 * Created by shin on 2017/6/1.
 */
var main={
    swiper:null,
    init:function(){
        //console.log('start');
        $('.content').css('height',$(window).height()+"px");
        ccewx.init();
        main.swiper=new Swiper('#main',{
            initialSlide:0,
            speed:300,
            direction:'vertical',
            noSwipingClass:'stop-swiping',
            noSwiping : true,
            onSlideChangeEnd:function(sw)
            {
                //console.log(sw.activeIndex);
                pagemanager.handleChange(sw.activeIndex);
            }
        });
        var t=new TimelineMax();
        t.add(TweenMax.from('.head',.5,{top:-204,ease:"Back"}));
        t.add(TweenMax.from('.swiper-wrapper',.5,{scale:0,ease:"Back"}));
        $('.store').html(store.makeOptions());
        page4.init();
        pageCity.init();
        swsmap.init();
    }
}