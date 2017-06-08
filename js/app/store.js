/**
 * Created by shin on 2017/6/1.
 */
var store={
    stores:[
        /*'上海-建投书局',
        '上海-言几又',
        '北京-言几又',
        '北京-建设书局',
        '成都-言几又',
        '成都-方所',
        '杭州-建设书局',
        '南京-建设书局',
        '天津-言几又',
        '西安-言几又'*/
        '北京言几又书店(三里屯店)',
        '上海建投书局(浦江店)',
        '成都言几又书店(IFS旗舰店)'
    ],
    options:'',
    makeOptions:function(){
        if(store.options=='')
        {
            store.options='<option value="请选择门店">请选择门店</option>';
            for(var i=0;i<store.stores.length;i++)
            {
                store.options+="<option value='"+store.stores[i]+"'>"+store.stores[i]+"</option>";
            }
        };
        return store.options;
    }
}