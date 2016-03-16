define(["coAjax", "jSouper", "lrz"], function(coAjax, jSouper) {

    function _upload_imgs(img_base64, callback) {
        coAjax.post("http://121.40.18.23:4100/upload/image/base64", {
            img_base64: img_base64
        }, function(img_info) {
            console.log(img_info)
            var img_url = "http://7xpxgs.com1.z0.glb.clouddn.com/" + img_info.key;
            //运行回调
            callback(null, 1, img_url);
        }).on("uploadProgress", function(event, position, total, percentComplete) {
            callback(null, percentComplete, null);
        });
    };

    var lrz_config = {
        width: 1280,
        quality: 1
    };

    return function(file, options, callback) {
        if (arguments.length < 3) {
            callback = options;
            options = null;
        }

        //图片处理进度事件
        (callback instanceof Function) || (callback = jSouper.$.noop);

        callback(null, 0, null);

        lrz(file, options || lrz_config, function(result) {
            //处理完成，上传
            _upload_imgs(result.base64, callback);
        });

    }
});
