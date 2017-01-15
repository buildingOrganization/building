/**
 * Created by dtx on 17/1/8.
 */
var objectDetail = {
    _init : function () {
        this.index = $.getQueryParams().index
        this.data = objectData[this.index]
        this._renderPage()
        this._brandEvent()
    },
    _brandEvent : function () {
        var that = this
        $('.center').delegate('.img','click',function () {
            that._initSwiper($(this))
        })
        $('body').on('click',function (e) {
            var $el = $(e.target);
            if ($el[0].className != 'slideImg' && $el[0].className != 'swiper-button-next'&& $el[0].className != 'swiper-button-prev'&&$el.parents('.slideContainer').length>0|| $el[0].className == 'slideContainer') {
                $('.slideContainer').hide()
                $('body').css('overflow','auto')
            }
        })
        $(window).resize(function () {
            $('.slideContainer').css('height',$('body').css('height'))
        })
    },
    _renderPage : function () {
        var dom = ''
        $('.mainImg').append("<img class='img' index='0' src='"+this.data.img[0]+"'>")
        $.each(this.data.img,function (i, item) {
            if(i>0){
                dom += "<li><img class='img' index='"+i+"' src='"+item+"'></li>"
            }
        })
        $('.subImg').append(dom)
        $('.name').text(this.data.name)
        $('.area').text(this.data.area)
        $('.date').text(this.data.date)
        $('.des').html(this.data.description)
    },
    _initSwiper : function ($ele) {
        $('.swiper-wrapper').html("");
        $('.slideContainer').css('height',$('body').css('height')).show()
        var index = $ele.attr('index')
        var dom = "<div class='swiper-slide'><div class='imgContainer'><img class='slideImg' src='"+this.data.img[index]+"'></div></div>"
        $.each(this.data.img,function (i, item) {
            if(i!=index){
                dom += "<div class='swiper-slide'><div class='imgContainer'><img class='slideImg' src='"+item+"'></div></div>"
            }
        })
        $('.swiper-wrapper').append(dom)
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            // width : window.innerWidth
        })
        $('body').css('overflow','hidden')
    }
}._init()

$(document).ready(function() {
    $('.pgwSlideshow').pgwSlideshow();
});