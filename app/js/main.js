/**
 * Created by dtx on 17/1/1.
 */
var main = {
    _init : function () {
        if(document.body.clientWidth<=800){
            this._showMenu()
        }else{

        }
        this._brandEvent()
    },
    _brandEvent : function () {
        var that = this
        $(window).resize(function () {
            if(document.body.clientWidth<=800){
                that._showMenu()
            }else{
                $('.menuContainer').remove()
                $('.titleContainer').find('p').find('a').show();
            }
        })
        $('.titleContainer').delegate('.menuContainer','click',function () {
            if($('.menuBtnContainer').find('a').css('display')=='block'){
                $('.menuBtnContainer').find('a').css('display','none')
                $('.menuBtnContainer').css({'border-top':'none','top':'0','transition':'top 0.5s'})
            }else{
                $('.menuBtnContainer').find('a').css('display','block')
                $('.menuBtnContainer').css({'border-top':'1px solid #aaa','top':'125px','transition':'top 0.5s'})
            }
        })
        $('body').on('click',function (e) {
            var $el = $(e.target);
            if($el.parents('.menuBtnContainer').length==0&&$el[0].className!='showBtn'){
                $('.menuBtnContainer').find('a').css('display','none')
            }
        })
    },
    _showMenu : function () {
        if(!$('.menuContainer').length){
            $('.titleContainer').find('p').find('a').hide();
            $('.titleContainer').append("<div class='menuContainer clearfix'><span class='showBtn'></span></div>")
        }
    }
}._init()
