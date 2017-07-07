define('ftr',['util'], function(util){
    function doFtr() {
        console.log("this is in ftr");
        console.log(util.add(2,3));
        console.log("will doFtr");
    };
    function isFtrDone() {
        console.log("had done ftr");
        return true;
    };
    return {
        doFtr : doFtr,
        isFtrDone : isFtrDone
    };
});