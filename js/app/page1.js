/**
 * Created by shin on 2017/6/1.
 */
    var pagemanager={
    handleChange:function(index)
    {
        console.log(index);
        switch(index)
        {
            case 0:break;
            case 1:
                trackEvent('kv','01_slip');
                break;
            case 2:
                trackEvent('knowmore','02_slip');
                break;
            case 3:
                trackEvent('intro','03_slip');
                break;
        }
    }
}
var page1={
    init:function(){

    }
}
var page2={
    init:function(){

    }
}
var page3={
    init:function(){

    }
};
var page4={
    init:function(){
        $('.form .submit').bind('click',page4.handleClickSubmit);
        $('.submitfail .submit').bind('click',page4.handleClickFailSubmit);
        $('.name').bind('change',function(){
            //console.log('namechange');
            trackEvent('info','04_name');
        });
        $('.mobile').bind('change',function(){
            //console.log('namechange');
            trackEvent('info','05_number');
        });
        /*$('.address').bind('change',function(){
            //console.log('namechange');
            trackEvent('info','06_address');
        });*/
        $('.store').bind('change',function(){
            //console.log('namechange');
            trackEvent('info','07_bookstore');
        })
        $('.actrule').bind('click',function(){
            trackEvent('info','09_rule');
        });
        $('.back').bind('click',function(){
            $('.actrulepage').fadeOut();
            trackEvent('info','10_closerule');
        });
        $('.actrule').bind('click',function(){
            $('.actrulepage').fadeIn();
            trackEvent('info','09_rule');
        });
    },
    handleClickSubmit:function()
    {

        var name=$('.name').val();
        var mobile=$('.mobile').val();
        // var address=$('.address').val();
        var store=$('.store').find('option:selected').val();
        console.log(store);
        var telreg=/^1[34578]\d{9}$/;
        if(!name)
        {
            alert('请输入您的姓名');
            return;
        }
        if(!telreg.test(mobile))
        {
            alert('请正确输入您的电话号码');
            return;
        }
        /*if(!address)
        {
            alert('请填写您的地址');
            return;
        }*/
        if(!store || store=='请选择门店')
        {
            alert('请选择您要参加的书店')
            return;
        };
        trackEvent('info','08_submit',mobile);
        form.onSubmitDone=page4.handleSubmitDone;
        form.submit(name,mobile,store);
    },
    handleSubmitDone:function(msg){
        console.log(msg);
        if(msg['isSuccess']==true)
        {
            //提交成功
            $('.form').hide();
            $('.submitdone').fadeIn();
            trackEvent('info','11_success');
        }
        else
        {
            $('.form').hide();
            $('.submitfail').fadeIn();
            alert(msg['errMsg']);
            trackEvent('info','12_fail');
        }
    },
    handleClickFailSubmit:function(){
        $('.submitfail').hide();
        $('.form').fadeIn();
    }
};
var pageCity={
    folder:'images/pagecity/',
    citys:[{city:'北京',background:'beijing.jpg',stores:
        [
            {storename:'言几又',address:[{add:'北京市朝阳区南三里屯路1号1-13A',loc:'39.93191_116.45507'}]},
            {storename:'建投书局',address:[{add:'东城区广渠门内大街16号环境大厦一层',loc:'39.89333_116.4325'}]},
        ]},
        {city:'上海',background:'shanghai.jpg',stores:
        [
            {storename:'建投书局',address:[{add:'虹口区公平路18号8栋嘉昱大厦一层',loc:'31.25047_121.50847'}]},
            {storename:'言几又',address:[{add:'上海市黄浦区湖滨路150号湖滨大道购物中心B1—E03单元',loc:'31.22062_121.4792'},
                                        {add:'上海市世纪大道百联世纪购物中心4F',loc:'31.22955_121.52785'}
            ]}
        ]},
        {city:'成都',background:'chengdu.jpg',stores:[
            {storename:'言几又',address:[{add:'成都市锦江区红星路3段1号成都国际金融中心LG223',loc:'30.65462_104.08037'}]},
            {storename:'方所',address:[{add:'纱帽街8号成都远洋太古里负1层',loc:'30.65282_104.08367'}]}
        ]},
        {city:'南京',background:'nanjing.jpg',stores:[
            {storename:'建投书局',address:[{add:'鼓楼区汉中路金陵饭店一层5号商铺',loc:'32.04261_118.78248'}]}
        ]},
        {city:'杭州',background:'hangzhou.jpg',stores:[
            {storename:'建投书局',address:[{add:'西湖区教工路18号欧美中心A座一层',loc:'30.27269_120.13661'}]}
        ]},
        {city:'西安',background:'xian.jpg',stores:[
            {storename:"言几又",address:[{add:'西安市莲湖区丰禾路251号鑫苑大都汇3楼',loc:'34.28306_108.89399'}]}
        ]},
        {city:'天津',background:'tianjin.jpg',stores:[
            {storename:'言几又',address:[{add:'南开区南门外大街2号天津大悦城购物中心北区3F-C08-C36号',loc:'39.13529_117.18062'}]}
        ]}],
    init:function(){
        var stream="";
        for(var i=0;i<pageCity.citys.length;i++)
        {
            var cityItem=pageCity.citys[i];
            stream+='<div class="listItem '+cityItem.city+'" style="background:url('+pageCity.folder+cityItem.background+')" index="'+i+'"></div>';

        }
        $(".citylist").html(stream);
        console.log(stream);
        $('.listItem').on('click',pageCity.handleClickItem);
        $('.mapclose').on('click',pageCity.closeMap);
        $('.listItemback').on('click',pageCity.handleClickBack)
    },
    handleClickItem:function(){

        var index=$(this).attr('index');
        var info=pageCity.citys[index]['stores'];
        //console.log(pageCity.citys[index]['city'],info);
        //console.log(index);
        pageCity.showStores(pageCity.citys[index]['city'],info);
    },
    handleClickBack:function(){
        $('.cityInfoDis').fadeOut();
    },
    showStores:function (city,info){
        var storedis='<p class="name" style="font-weight:bold!important;">'+city+'</p>';
        var icons="";
        var storelab={len:0};
        for(var i=0;i<info.length;i++)
        {
            storedis+=' <p class="booker">';
            storedis+=' <p class="bookername">'+info[i]['storename']+'</p>';
            if(!storelab[info[i]['storename']])
            {
                storelab[info[i]['storename']]=1;
                if(storelab['len']==1)
                {
                    icons+='<img src="images/pagecity/and.png" class="cc">';
                    $('.icons').css('width','310px');
                }
                else {
                    $('.icons').css('width','131px');
                }

                switch(info[i]['storename'])
                {
                    case '言几又':
                        icons+='<img src="images/pagecity/yanyouji.jpg" >';
                        break;
                    case '方所':
                        icons+='<img src="images/pagecity/fangsuo.jpg" >';
                        break;
                    case '建投书局':
                        icons+='<img src="images/pagecity/jianshe.png" >';
                        break;
                }


                storelab['len']++;
            }
            for(var j=0;j<info[i]['address'].length;j++){
                storedis+='<p class="bookeritem" loc="'+info[i]['address'][j]['loc']+'">'+info[i]['address'][j]['add']+'</p>';
            }
            storedis+="</p>";
        }
        $('.infos').html(storedis);
        //icons=icons.replace('<img src="images/pagecity/and.png" class="cc">',"");
        $('.icons').html(icons);
        $('.cityInfoDis').fadeIn();
        $(".bookeritem").on('click',pageCity.showMap);
    },
    showMap:function()
    {
        var loc=$(this).attr('loc');
        swsmap.lookAt(loc);
        $('.map').show();
    },
    closeMap:function()
    {
        $('.map').hide();
    }
}
    /**
     * <p class="name">南京</p>
     <p class="booker">
     <p class="bookername">言又几</p>
     <p class="bookeritem">asdasdasdasd</p>
     </p>
     */
