/**
 * Created by shin on 2017/6/1.
 */



function trackEvent(action,label,label2)
{
    //_smq.push(['custom','kv','01_slip']);
    if(!window._smq) return;
    ga('send','event','Sulwhasoo',action,label);
    if(!label2)
    {
        _smq.push(['custom',action,label]);

    }
    else
    {
        _smq.push(['custom',action,label,label2]);
    }

}