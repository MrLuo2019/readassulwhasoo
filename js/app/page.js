/**
 * Created by shin on 2017/6/1.
 */
var form={
    formlink:'',
    testformlink:'http://sulwhasoo-resdassulwhasoo.chinacloudsites.cn/Sulwhasoo/SubmitUserInfo',
    customformlink:'http://readassulwhasoo.comeyes.cn/Sulwhasoo/SubmitUserInfo',
    onSubmitDone:function(){},
    submit:function(name,mobile,store){
        var _data={
                Name:encodeURIComponent(name),
                Mobile:mobile,
                Bookstore:encodeURIComponent(store),
                OpenID:wxmain.useropenid
            };
        console.log(_data);
        $.ajax({
            url:form.getFormLink(),
            type:'post',
            dataType:'json',
            data:_data,
            success:function(msg){
                form.onSubmitDone(msg);
            },
            error:function(error)
            {
                console.log(error);
            }


        })
    },
    getFormLink:function(){
        if(form.formlink) return form.formlink;
        var url=window.location.href;
        if(url.indexOf('sulwhasoo-resdassulwhasoo.chinacloudsites')>=0)
        {
            //测试地址
            form.formlink=form.testformlink;
        }
        else if(url.indexOf('readassulwhasoo.comeyes.cn')>=0){
            //正式地址
            form.formlink=form.customformlink;

        }
        else{
            form.formlink=form.testformlink;
        }
        return form.formlink;

    }

}
