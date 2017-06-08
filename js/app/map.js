var swsmap={
    map:null,
    marker:null,
    init:function(){
        var center = new qq.maps.LatLng(39.916527,116.397128);
        swsmap.map=new qq.maps.Map(document.getElementById('mapcontent'),{
            center: center,
            zoom: 20}
        ),
            swsmap.marker=new qq.maps.Marker({
                position:center,
                map:swsmap.map
            })
    },
    lookAt:function(loc)
    {
        var aa=loc.split('_');
        var lat=aa[0];
        var lng=aa[1];
        var pos=new qq.maps.LatLng(lat, lng)
        swsmap.map.panTo(pos);
        swsmap.marker.setPosition(pos);
    }
}