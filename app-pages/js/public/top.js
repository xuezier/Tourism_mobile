(function() {
    /*
     * Title-Map
     */
    eventManager.after("AppReady", function() {
        var _set_title = Path.setTitle;
        Path.setTitle = function() {
            App.set("$Loc.document_title", _set_title());
        };
        App.set("$Loc.document_title", Path.document_title);
    });
    // 上传图片
    window.upload_image = function(file, dtd) {
        require(["/js/tools/image_upload.js"], function(image_upload) {
            image_upload(file, function(err, precentComplete, url) {
                if (precentComplete == 1) {
                    dtd.resolve(url);
                    console.log("url,", url)
                    alert("success", "上传成功");
                };
            });
        });
        return dtd;
    };
    // 导航栏样式
    // App.set("drag.top", 0);
    // var boxTop = 0, // top position of moving box
    //     startx, // starting x coordinate of touch point
    //     starty = 0, // starting y coordinate of touch point
    //     dist = 0, // distance traveled by touch point
    //     touchobj = null // Touch object holder

    // App.set('drag.scroll', function(e) {
    //     // native_alert(this);
    //     var dist = this.scrollTop - starty // calculate dist traveled by touch point
    //         // move box according to starting pos plus dist
    //         // with lower limit 0 and upper limit 380 so it doesn't move outside track:
    //     var top = boxTop + dist;
    //     // var pre_top = App.get("drag.top");
    //     App.set("drag.top", top);
    //     App.set("drag.top_range", Math.max(Math.min(-top, 0), -130));
    //     // App.set("drag.duration", Math.abs(top - pre_top) * 100);
    //     return false;
    // });
    // document.body.onscroll = App.get("drag.scroll");
    // App.set('drag.touchmove', function(e) {
    //     touchobj = e.changedTouches[0] // reference first touch point for this event
    //     var dist = parseInt(touchobj.clientY) - starty // calculate dist traveled by touch point
    //         // move box according to starting pos plus dist
    //         // with lower limit 0 and upper limit 380 so it doesn't move outside track:
    //     var top = boxTop + dist;
    //     App.set("drag.top", top);
    //     console.log("QAQ", top)
    //     App.set("drag.top_range", Math.max(Math.min(-top, 0), -130));
    //     // return false;
    // });
    // App.set('drag.touchmove', App.get("drag.scroll"));



}());
