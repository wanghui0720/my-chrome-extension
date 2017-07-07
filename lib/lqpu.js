define('lqpu', ['util'], function(util) {
    //TODO
    function doLqpu( lqpu_str ) {
         console.log("will doLqpu " + lqpu_str);
    };
    /**
     *   isLqpuDone 
     *   1 success
     *   0 failed
     */
    function isLqpuDone() {
        console.log(" isLqpuDone ");
    };
    return {
        doLqpu : doLqpu
    };
});