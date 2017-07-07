//
/**
 * path from extension
 */
var iframeUrl = chrome.extension.getURL('toolbar.html');
let util = chrome.extension.getURL('lib/util');
let ftr = chrome.extension.getURL('lib/ftr');
let lqpu = chrome.extension.getURL('lib/lqpu');

require.config({
    paths: {
        "util" : util,
        "ftr" : ftr
    }
});

require(['util', 'ftr', 'lqpu'], function (util, ftr, lqpu){
    console.log(util.add(1,1));

    //ftr test
    ftr.doFtr();
    if(ftr.isFtrDone()) {
        console.log("ok, we had done the ftr");
    }

    //lqpu test
    lqpu.doLqpu("this case should do lqpu");

    //custom toolbar
    var height = '20px';
    var iframe = '<iframe src="'+iframeUrl+'" id="customer_toolbar" style="height:'+ height +'"></iframe>';

    $('html').append(iframe);
    $('body').css({
    '-webkit-transform' : 'translateY('+height+')'
    });
});




document.addEventListener('selectionchange', function() {
    var selection = window.getSelection().toString().trim();
    chrome.runtime.sendMessage({
        request: 'updateContextMenu',
        selection: selection
    });
});

document.addEventListener('contextmenu', function() {
    chrome.runtime.sendMessage({
        request: 'addContextMenu'
    });
});

