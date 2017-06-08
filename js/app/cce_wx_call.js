/**
 * Created by shin on 2017/6/1.
 */
/*===================CCE类库DEMO脚本（多平台调用）===================*/
/*
 * 多平台关键信息
 * */
var PlatformConfig = {
    // CK公众号
    conghui2:{
        appid:'wx22daff85f1881f06',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/conghui2/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_conghui2',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_conghui2'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/conghui2/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    // CK公众号
    ck1:{
        appid:'wx612e4beb99eab278',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/ck1/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_ck1',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_ck1'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/ck1/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    // CK服务号
    ck2:{
        appid:'wx1e1669faca2531d7',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/ck2/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_ck2',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_ck2'                                          // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/ck2/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    // 阿玛尼服务号
    armani2:{
        appid:'wxc2efec250f2952a3',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/armani2/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_armani2',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_armani2'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/armani2/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    // 三鲜服务号
    sanxian2:{
        appid:'wx28dc081cc2a6ce3c',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/sanxian2/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_sanxian2',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_sanxian2'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/sanxian2/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    // 微软服务号
    microsoft2:{
        appid:'wx810ba6463f0039e5',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/microsoft2/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_microsoft2',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_microsoft2'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/microsoft2/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    // Whoo服务号
    whoo2:{
        appid:'wx139148f14dae4dbf',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/whoo2/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_whoo2',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_whoo2'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/whoo2/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    // 雪花秀服务号
    sulwhasoo2:{
        appid:'wx67ee2d62de3fc1e3',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/sulwhasoo2/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_sulwhasoo2',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_sulwhasoo2'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/sulwhasoo2/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    // 魅力惠服务号
    mei2:{
        appid:'wx213cb2cb01598f78',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/mei2/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_mei2',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_mei2'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/mei2/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    // 魅力惠服务号
    lac2:{
        appid:'wxcc14ed3b11cd36a2',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/lac2/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_lac2',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_lac2'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/lac2/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    // 中粮家佳康服务号
    joycome2:{
        appid:'wxabf3767cd626136b',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/joycome2/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_joycome2',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_joycome2'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/joycome2/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    // 天坤物流服务号
    seedeer2:{
        appid:'wxad573cfdc2a3fc06',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/seedeer2/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_seedeer2',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_seedeer2'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/seedeer2/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    // 欧莱雅订阅号
    lorealparis1:{
        appid:'wxabf3767cd626136b',
        oauth:{
            wechatOauthUrl:'https://px02331.wetalk.im/connect/oauth2/authorize2',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/lorealparis1/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_lorealparis1',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_lorealparis1'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/lorealparis1/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    // 巴黎欧莱雅服务号
    lrl:{
        appid:'wx8e0f1950ce4817cd',
        oauth:{
            wechatOauthUrl:'https://px02331.wetalk.im/connect/oauth2/authorize2',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wx-proxy.lorealparis.com.cn/sns/oauth2/shortcut/lrl/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_lrl',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_lrl'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy-loreal.comeyes.com:8304/sns/sign/jssdk/lrl/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    // 美宝莲服务号
    mbl:{
        appid:'wxe83ff6a0b1fae2ef',
        oauth:{
            wechatOauthUrl:'https://px02331.wetalk.im/connect/oauth2/authorize2',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://proxy.maybellinechina.com/sns/oauth2/shortcut/mbl/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_mbl',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_mbl'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy-maybelline.comeyes.com:8105/sns/sign/jssdk/mbl/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    //羽西服务号
    yuesai:{
        appid:'wx3da25538d92fe6ee',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wx-proxy.yuesai.com/sns/oauth2/shortcut/yuesai/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_mbl',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_mbl'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wx-proxy.yuesai.com:8003/sns/sign/jssdk/yuesai/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    //飞利浦务号
    philips2:{
        appid:'wxfcf79065f79c0fd8',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/philips2/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_philips2',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_philips2'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/philips2/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    //迪士尼小镇 服务号
    disneytown2:{
        appid:'wx1385f9b296c3d5f3',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/disneytown2/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_disneytown2',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_disneytown2'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/disneytown2/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    //魔镜 服务号
    mirror2:{
        appid:'wx8aa765bf5a092bd3',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/mirror2/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_mirror2',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_mirror2'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/mirror2/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    //暴风TV 服务号
    bftv2:{
        appid:'wx54ae20fe84cb8d34',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/bftv2/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_bftv2',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_bftv2'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/bftv2/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    },
    //暴风TV 服务号
    hera2:{
        appid:'wxba711c4f8d44c201',
        oauth:{
            wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',           // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
            cceOauthUrl:'http://wxproxy.comeyes.com/sns/oauth2/shortcut/hera2/',    // CCE授权一级回调URL（根据平台信息获取）
            storge: {
                validateKey: 'wechat_oauth_validate_hera2',                                       // 用于存储的验证参数key（一般为cookie的key值）
                userDataKey: 'wechat_oauth_user_hera2'                                           // 用于存储授权后用户信息的key（一般为cookie的key值）
            }
        },
        jssdk: {
            signature: {
                url: 'http://wxproxy.comeyes.com:8087/sns/sign/jssdk/hera2/'                 // 获取签名信息的API（根据平台信息获取）
            }
        }
    }
}

/*
 * 创建经过CCE封装Wechat使用对象
 * 详情默认配置请在 wechat.js 中的 wechatDefaultOptions 对象查看
 * */
var options = {
    debug:false,                                                    // Debug为true时，会开启CCE的Debug模式和 微信官方类库的Debug模式；上线时切记关闭
    appid:'',                                                       // 公众号APPID（根据平台信息获取）
    // 授权相关参数对象
    oauth:{
        wechatOauthUrl:'https://open.weixin.qq.com/connect/oauth2/authorize',               // 微信官方授权URL（有类似wetalk代理时，设置为代理的URL）
        cceOauthUrl:'',                                             // CCE授权一级回调URL（根据平台信息获取）
        redirect_uri:window.location.href,                          // 设置授权成功后的自定义回调URL，一般为当前页（可带参数）
        redirect_uri_query:{p1:'v1',p2:'v2'},                       // 对象会以参数形式追加到 redirect_uri上，设置后如果与URL中已有参数重复，会进行覆盖，并在授权成功后回传
        validateQueryKey:'k',                                       // 重要！！！用于授权回调时与Cookie中的参数校验，确保非伪造回调，注意不要与其他参数名重复，重复会覆盖同名参数
        scope:'snsapi_userinfo',                                    // 微信授权参数，可在回调时传回，注意：state参数在urlencode之后不能超过128字节
        state:'ssssss',                                             // 微信授权参数，遵循微信官方标准
        beforeRedirect:function(url){                              // 授权跳转之前事件，回传即将跳转的URL，return false可终止跳转动作
            /*document.writeln(url);
             return false;*/
        }
    },
    // JSSDK相关参数，执行jssdkConfig后会自动获取签名，并执行wx.config，之后的操作可在 wx.ready中执行，wx.error中捕获错误
    jssdk:{
        signature:{
            url:'',                                                 // 获取签名信息的API（根据平台信息获取）
            retryTime:3,                                            // 获取签名失败后最大重试次数
            autoConfig:true                                        // 获取签名成功后，是否自动进行wx.config
        },
        // 需要使用的微信JSSDK API集合，参考：http://mp.weixin.qq.com/wiki/11/74ad127cc054f6b80759c40f77ec03db.html#.E9.99.84.E5.BD.952-.E6.89.80.E6.9C.89JS.E6.8E.A5.E5.8F.A3.E5.88.97.E8.A1.A8
        // 建议只设定需要的API，提高加载速度
        jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ'
        ]
    }
}

 var  ccewx={
     init:function(){

         var key = $.cce.getQueryString('key') || 'sulwhasoo2';
         if(key && PlatformConfig[key]){
             var platformOptions = PlatformConfig[key];
             var wechat = new $.cce.wechat($.extend(true,options,platformOptions));

             /*
              主动调用oauth方法
              未授权时，会自动跳转授权
              回调后会自动存储，并返回对象 oauthObj = {openid:'',user:{},state:'',query:{}}，其中user对象在 snsapi_userinfo时返回 微信官方数据
              oauthObj.state 为 state参数回传（对象形式）
              oauthObj.query 为 redirect_uri 中的参数回传，对象形式返回
              */
             wechat.jssdkConfig();
             return;

             var oauthObj = wechat.oauth();

             if(oauthObj){

                 //alert('oauth success, openid:'+oauthObj.openid + ', nickname:'+oauthObj.user.nickname);
                 $.cce.debug('Oauth Success','OauthObj',oauthObj,true);
                 // wxmain.useropenid=oauthObj.openid;
                 window.wn_openid=oauthObj.openid;
                 if(wxmain)
                 {
                     wxmain.useropenid=oauthObj.openid;
                 }
             }
             /*
              主动调用签名设置
              调用后与微信官方jssdk相同使用方式
              */
             wechat.jssdkConfig();
         }
         else{
             alert('key 错误');
         }
     }
 }

wx.ready(function () {
    wx.onMenuShareTimeline({
        title: '书写人“参”，阅见更好的自己', // 分享标题
        link: 'http://readassulwhasoo.comeyes.cn/wap/?utm_source=wxshare', // 分享链接
        imgUrl: 'http://readassulwhasoo.comeyes.cn/wap/images/share.jpg', // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        },
        fail: function (res) {
            //alert("分享失败，请重新尝试");
        }
    });
    wx.onMenuShareAppMessage({
        title: '书写人“参”，阅见更好的自己', // 分享标题
        desc: '雪花秀携手 ELLE打造「十全十美阅读地标」，静待爱读书的你。', // 分享描述
        link: 'http://readassulwhasoo.comeyes.cn/wap/?utm_source=wxshare', // 分享链接
        imgUrl: 'http://readassulwhasoo.comeyes.cn/wap/images/share.jpg', // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
});
/*===================CCE类库DEMO脚本（多平台调用）===================*/