/*----------------------------------------
 
 

----------------------------------------*/
function shoppableapplicationload(accountId, cdnUrl, appUrl, BaseURL, meta,myParam,newJS){


    var jQueryObject;
    if (newJS == true){
        jQueryObject  = jQuery.noConflict() ;
    }else{

        jQueryObject = jQuery;

    }
    /*

      document.body.innerHTML  += " <div style='display:none'><form id='image2form'><label>Title</label> <input type='text' name='Title'> </input> <label>Price</label> <input type='Price' name='Price'> </input> <label>ProductURL</label><input type='textarea' name='ProductURL'> </input><label>Comment</label><input type='textarea' name='comment'> </input><input type='submit' value='Tag'></input></form></div>";
      document.head.innerHTML  += "<style>.image-tag-wrapper {  z-index: 5;  position: relative;}.image-tag-wrapper .tagdiv {  position: absolute;  background-color: #E74C3C;  color: white;  z-index: 10;  cursor: default;  padding:0 10px;}.image-tag-wrapper .tagform-wrapper {  position: absolute;  background-color: #E74C3C;  color: white;  width: 200;  z-index: 10;  cursor: default;  padding:10px;}.image-tag-wrapper .tagform-wrapper a {  color: white;}.image-tag-wrapper.enabled {  cursor: crosshair;}			</style>";
    */
    var umPrefix_ = 'shopable_';
    var tab_comments = '\''+umPrefix_+'tab_comments\'';
    var tab_link = '\''+umPrefix_+'tab_link\'';
    var tab_checkout = '\''+umPrefix_+'tab_checkout\'';
    var tagForm = '<div style=""> <div id="'+umPrefix_+'image2form"> <a class="'+umPrefix_+'cancel-tag '+umPrefix_+'action"> <span class="'+umPrefix_+'hide-image-tag">x</span> </a> <div class="'+umPrefix_+'image-tag-header"> <div class="'+umPrefix_+'tab"> <button class="'+umPrefix_+'tablinks '+umPrefix_+'tab-comments" id="1" onclick="openCity(event, '+tab_comments+')"><i class="fa fa-comments"></i></button> <button class="'+umPrefix_+'tablinks" id="2" onclick="openCity(event, '+tab_link+')"><i class="fa fa-link"></i> </button> <button class="'+umPrefix_+'tablinks" id="3" onclick="openCity(event, '+tab_checkout+')"><i class="fa fa-cart-plus"></i></button> </div></div><div class="'+umPrefix_+'image-tag-body"> <form action="" method="" class="'+umPrefix_+'txt-left" enctype="multipart/form-data"> <input type="hidden" name="Type" id="Type" value="1"> <div id="'+umPrefix_+'tab_comments" class="'+umPrefix_+'tabcontent"> <div class="'+umPrefix_+'tag-form-group"> <div class="'+umPrefix_+'tag-input-label">Comments:</div><textarea class="'+umPrefix_+'tag-form-control" name="Comment" id="Comment" rows="4"></textarea> </div></div><div id="'+umPrefix_+'tab_link" class="'+umPrefix_+'tabcontent"> <div class="'+umPrefix_+'tag-form-group"> <input type="text" class="'+umPrefix_+'tag-form-control '+umPrefix_+'tag-input" name="Product_title" id="Product_title" placeholder="Title"> </div><div class="'+umPrefix_+'tag-form-group"> <input type="text" class="'+umPrefix_+'tag-form-control '+umPrefix_+'tag-input" name="ProductURL" id="ProductURL" placeholder="Url"> </div><div class="'+umPrefix_+'tag-form-group"> <input type="text" class="'+umPrefix_+'tag-form-control '+umPrefix_+'tag-input" name="description" id="description" placeholder="Description"> </div></div><div id="'+umPrefix_+'tab_checkout" class="'+umPrefix_+'tabcontent"> <div class="'+umPrefix_+'tag-form-group"> <input type="text" class="'+umPrefix_+'tag-form-control '+umPrefix_+'tag-input" name="checkout_title" id="checkout_title" placeholder="Title"> </div><div class="'+umPrefix_+'tag-form-group"> <input type="text" class="'+umPrefix_+'tag-form-control '+umPrefix_+'tag-input" name="Price" id="Price" placeholder="Price"> </div><div class="'+umPrefix_+'tag-form-group"> <input type="text" class="'+umPrefix_+'tag-form-control '+umPrefix_+'tag-input" name="CheckOutUrl" id="CheckOutUrl" placeholder="Checkout Url"> </div></div><div class="'+umPrefix_+'tag-form-action"> <input type="submit" id="'+umPrefix_+'submit_btn_link" class="'+umPrefix_+'form-btn" value="Submit"> </div></form> </div></div></div>';

    document.head.innerHTML += '<style>.'+umPrefix_+'form-title {text-align: left;padding-left: 5px;color: #ff5c28;font-weight: 500;}.'+umPrefix_+'form_fileds{padding: 7px !important;}.'+umPrefix_+'tagDetail>.'+umPrefix_+'action{top: -9px !important;}.'+umPrefix_+'tagDetail{z-index: 10; position: absolute; width: 150px; background: #ffffff; -webkit-box-shadow: 1px 1px 8px 0px rgba(241, 239, 239, 1); -moz-box-shadow: 1px 1px 8px 0px rgba(241, 239, 239, 1); box-shadow: 0px 0px 5px 0px rgba(241, 239, 239, 1); text-align: left; margin-left: 15px; margin-top: 5px; border-radius: 5px 0 5px 5px;}.'+umPrefix_+'image-tag-view-body{min-height: 30px; padding: 10px 5px 5px 5px;}.'+umPrefix_+'product-title{color: #FF5722; font-size: 20px; text-transform: capitalize;}.'+umPrefix_+'product-description{font-size: 12px; line-height: 16px; margin-top: 5px;}a.'+umPrefix_+'product-link{width: 70%; padding: 0; border: 1px solid #ff5722; color: #ffffff; background: #fb784e; cursor: pointer; box-shadow: inset 0 0 0 0 #ff5722; -webkit-transition: ease-out 0.4s; -moz-transition: ease-out 0.4s; transition: ease-out 0.4s; display: block; text-align: center; text-decoration: none; margin: 10px 20px 0;}a.'+umPrefix_+'product-link:hover{color: #ffffff; background: #000000; border: 1px solid #ff5722; transition: 2s ease; box-shadow: inset 100px 0 0 0 #ff5722;}.'+umPrefix_+'circle-ripple-edit{width: 20px; height: 20px; background-color: #efa59d; display: flex; align-items: center; justify-content: space-around; border-radius: 50%; box-sizing: border-box; animation: ripple 0.7s linear infinite; cursor: pointer;}.'+umPrefix_+'circle-ripple{width: 20px; height: 20px; background-color: #efa59d; display: flex; align-items: center; justify-content: space-around; border-radius: 50%; box-sizing: border-box; animation: ripple 0.7s linear infinite; cursor: pointer;}.'+umPrefix_+'circle-ripple-edit>i{color: #ffffff !important;}.'+umPrefix_+'circle-ripple>i{color: #ffffff !important;}@keyframes ripple{0%{box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.3);}100%{box-shadow: 0 0 0 1em rgba(255, 255, 255, 0.3), 0 0 0 15px rgba(255, 255, 255, 0.3);}}.'+umPrefix_+'tagDetail{display: none;}.'+umPrefix_+'image-tag-header{height: 25px;}.'+umPrefix_+'txt-left{text-align: left;}.'+umPrefix_+'image-tag-wrapper{z-index: 5; position: relative;}.'+umPrefix_+'image-tag-wrapper .'+umPrefix_+'tagdiv{position: absolute; color: #E74C3C; z-index: 10; cursor: default; padding: 0 10px;}.'+umPrefix_+'image-tag-wrapper.'+umPrefix_+'enabled{cursor: crosshair;}.'+umPrefix_+'tagform-wrapper{position: absolute; width: 150px; z-index: 10; cursor: default; background: #ffffff; -webkit-box-shadow: 1px 1px 8px 0px rgba(241, 239, 239, 1); -moz-box-shadow: 1px 1px 8px 0px rgba(241, 239, 239, 1); box-shadow: 0px 0px 5px 0px rgba(241, 239, 239, 1); border-radius: 5px; border: 1px solid #d4d4d4;}.'+umPrefix_+'action{position: relative; width: 21px; color: #FF5722; text-align: center; height: 21px; border: 1px solid #f1efef; border-radius: 50%; right: -9px; float: right; top: -15px; background: #fbf8f8; cursor: pointer; /* -webkit-box-shadow: 1px 1px 8px 0px rgba(241,239,239,1); */ -moz-box-shadow: 1px 1px 8px 0px rgba(241, 239, 239, 1); box-shadow: 0px 0px 5px 0px rgba(241, 239, 239, 1); z-index: 1;}span.'+umPrefix_+'hide-image-tag{position: relative; top: -4px;}/* Style the tab */ .'+umPrefix_+'tab{overflow: hidden; background: #f5f5f5; width: 100%; position: relative; top: -27px; border-bottom: 1px solid #f1f1f1;}/* Style the buttons inside the tab */ .'+umPrefix_+'tab button{background-color: inherit; float: left; border: none; outline: none; cursor: pointer; transition: 0.3s; font-size: 16px; width: 33.33%; height: 30px;}.'+umPrefix_+'tab button{border-right: 1px solid #FF5722;}.'+umPrefix_+'tab button:last-child{border-right: 0 solid #FF5722;}/* Change background color of buttons on hover */ .'+umPrefix_+'tab button:hover{background-color: #ddd;}/* Create an active/current tablink class */ .'+umPrefix_+'tab button.'+umPrefix_+'active{background-color: #FF5722; color: #ffffff;}/* Style the tab content */ .'+umPrefix_+'tabcontent{display: none; padding: 6px 12px;}.'+umPrefix_+'tag-form-group>.'+umPrefix_+'tag-form-control{width: 97%; border: 1px solid #e4e4e4; background: #ffffff !important; color: #171515!important; font-size: 12px; font-weight: 400; border-radius: unset; border-width: 0 0 1px 0; padding: 0;}textarea#Comment{border: 1px solid #e4e4e4 !important;}.'+umPrefix_+'tag-form-group>.'+umPrefix_+'tag-form-control.'+umPrefix_+'tag-input{height: 20px;}.'+umPrefix_+'tag-form-group>.'+umPrefix_+'tag-input-label{margin-bottom: 0; font-size: 12px; color: #ff5722;}.'+umPrefix_+'tag-form-action{text-align: right; margin: 0 16px 10px 0;}.'+umPrefix_+'form-btn{width: 50%; padding: 0 0 !important; border: 1px solid #ff5722 !important; color: #ffffff !important; background: #fb784e; cursor: pointer; box-shadow: inset 0 0 0 0 #ff5722; -webkit-transition: ease-out 0.4s; -moz-transition: ease-out 0.4s; transition: ease-out 0.4s; height: 30px !important; font-weight: unset !important; margin: unset !important;}.'+umPrefix_+'form-btn:hover{color: #ffffff; background: #000000; border: 1px solid #ff5722; transition: 2s ease; box-shadow: inset 0 0 0 50px #ff5722;}::placeholder{/* Chrome, Firefox, Opera, Safari 10.1+ */ font-size: 12px; color: #f89d80 !important;}:-ms-input-placeholder{/* Internet Explorer 10-11 */ font-size: 12px; color: #f89d80 !important;}::-ms-input-placeholder{/* Microsoft Edge */ font-size: 12px; color: #f89d80 !important;}</style>';

    const siteURL = document.location.origin;
    var pageURL = document.location.href;
    var url;
    var title;
    var imagesList = [];
    var serverImageList = [];
    var images = document.getElementsByTagName("img");
    forEachNode(images, function(elem) {
        imagesList.push({
            url: elem.currentSrc, //jQueryObject('#block' + max).val();
            title: elem.title, //jQueryObject('#floor' + max).val();

        })
    });

    function forEachNode(nodeList, func) {
        for (var i = 0, n = nodeList.length; i < n; i++) func(nodeList[i], i, nodeList);
    }
    //send images to server

    function PostImagesData(data){
        console.log(data);


        var apiurl = BaseURL + "/api/Shopable/GetImagesData";
        jQueryObject.ajax({
            type: "POST",
            async: false,
            url: apiurl,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: data, // serializes the form's elements.
            success: function(dataSuccess)
            {
                jQueryObject.each(dataSuccess, function(index, element) {
                    serverImageList.push({
                        Id: element.Id, //jQueryObject('#block' + max).val();
                        ImageURL: element.ImageURL, //jQueryObject('#block' + max).val();
                        Title: element.Title, //jQueryObject('#floor' + max).val();
                        SiteGroup: element.SiteGroup, //jQueryObject('#floor' + max).val();
                        XPosition : element.XPosition,
                        YPosition : element.YPosition,
                        Type : element.Type,
                        AccountId : element.AccountId,
                        Comment : element.Comment,
                        ProductURL : element.ProductURL,
                        SiteURL : element.SiteURL,
                        Price : element.Price,
                        CheckOutUrl : element.CheckOutUrl,
                        description : element.description,
                    })
                });
            }
        });
    }



    var data = {
        UserAccountId: accountId,
        ImageUrls:
        imagesList,
        SiteURL: siteURL

    };
    console.log(data);
    console.log(imagesList);
    data = JSON.stringify(data);
    PostImagesData(data)














    if  (myParam !== null){
        var offXX, offYY;


        (function() {
            var jQueryObject;
            var offX, offY, stopPropagation, tag;
            jQueryObject = jQuery;

            jQueryObject.fn.imageTag = function(options) {
                var _add_tags, _attatch_tagform_events, _check_required_fields, _createWrapper, _disable, _disable_all, _enable, _enable_all, _hide_tag, _hide_tag_all, _hide_tags, _hide_tags_all, _init, _initPlugin, _percentage_to_pixels, _pixels_to_percentage, _pixels_to_pixels, _remove_tag, _remove_tag_all, _remove_unsaved_elements, _set_enable, _show_tag, _show_tag_all, _show_tags, _show_tags_all,
                    _this = this;
                this.options = jQueryObject.extend({
                    enableTag: true,
                    tagForm: "<form><input type='text' name='name'></input> <input type='hidden' name ='x'/><input type='hidden' name ='y'/></form>",
                    onTag: function(form) {},
                    labelProperty: 'name',
                    idProperty: 'id',
                    propertyX: 'x',
                    propertyY: 'y',
                    distanceUnity: 'pixels',
                    requiredFields: ['name'],
                    tags: [],
                    showTagsWhenDisabled: true
                }, options);
                _initPlugin = function(el) {
                    var wrap;
                    wrap = _createWrapper(el);
                    if (wrap.data(umPrefix_+'image-tag-enabled')) {
                        wrap.addClass(umPrefix_+'enabled');
                    }
                    if (jQueryObject.fn.imagesLoaded) {
                        wrap.imagesLoaded(function() {
                            return _add_tags(wrap, _this.options.tags);
                        });
                    } else {
                        _add_tags(wrap, _this.options.tags);
                    }
                    if (!_this.options.showTagsWhenDisabled && !wrap.data(umPrefix_+'image-tag-enabled')) {
                        _hide_tags(wrap);
                    }
                    return jQueryObject(wrap).click(function(e) {
                        var offX, offY, stopPropagation, tag, tagform;
                        e.preventDefault();
                        e.stopPropagation();
                        if (!(e.offsetX || e.offsetY)) {
                            offX = e.pageX - jQueryObject(e.target).offset().left;
                            offY = e.pageY - jQueryObject(e.target).offset().top;
                        } else {
                            offX = e.offsetX;
                            offY = e.offsetY;
                        }
                        offXX = offX;
                        offYY = offY;

                        if (wrap.data(umPrefix_+'image-tag-enabled')) {
                            debugger
                            if(e.toElement.className == "fa fa-comments" || e.toElement.className == "fa fa-cart-plus" || e.toElement.className == "fa fa-link"){
                                jQueryObject('body').find('.'+umPrefix_+'tagform-wrapper').remove();
                                console.log("eIF : === " + JSON.stringify(e.target));
                                var currentClassName = e.toElement.className;
                                console.log("currentClassName.parent: === " + JSON.stringify(jQueryObject(e.target).closest('.shopable_tagdiv').attr('data-tag_id')));

                                var data_id = jQueryObject(e.target).closest('.shopable_tagdiv').attr('data-tag_id');
                                var EditTag =  serverImageList.find(element => element.Id  === parseInt(data_id));
                                console.log("EditTag: === " + JSON.stringify(EditTag.Type));
                                console.log("YPosition: === " + JSON.stringify(EditTag.YPosition));

                                if(EditTag.Type == 1){
                                    var updateForm = '<div id="shopable_image2form">\n' +
                                        '    <a class="shopable_cancel-tag shopable_action"> <span class="shopable_hide-image-tag">x</span> </a>\n' +
                                        '   \n' +
                                        '    <div class="shopable_image-tag-body">\n' +
                                        '        <form action="" method="" class="shopable_txt-left" enctype="multipart/form-data">\n' +
                                        '            <input type="hidden" name="Id" id="'+EditTag.Id+'" value="'+EditTag.Id+'">\n' +
                                        '            <div id="shopable_tab_comments" class="shopable_tabcontent" style="display: block;">\n' +
                                        '                <div class="shopable_tag-form-group">\n' +
                                        '                    <div class="shopable_tag-input-label">Comments:</div>\n' +
                                        '                    <textarea class="shopable_tag-form-control"' +
                                        ' name="Comment" id="Comment" rows="4">'+EditTag.Comment+'</textarea>\n' +
                                        '                </div>\n' +
                                        '            </div>\n' +
                                        '\n' +
                                        '            <div class="shopable_tag-form-action">\n' +
                                        '                <input type="submit" id="shopable_submit_btn_link" class="shopable_form-btn" value="Submit"> </div>\n' +
                                        '        </form>\n' +
                                        '    </div>\n' +
                                        '</div>';
                                }else if(EditTag.Type == 2){
                                    var updateForm = '<div id="shopable_image2form">\n' +
                                        '    <a class="shopable_cancel-tag shopable_action"> <span class="shopable_hide-image-tag">x</span> </a>\n' +
                                        '    <div class="shopable_image-tag-body"><div' +
                                        ' class="shopable_form-title">Link Tag</div>\n' +
                                        '        <form action="" method="" class="shopable_txt-left" enctype="multipart/form-data">\n' +
                                        '            <input type="hidden" name="Id" id="'+EditTag.Id+'" value="'+EditTag.Id+'">\n' +
                                        '            <div id="shopable_tab_link" class="shopable_form_fileds">\n' +
                                        '                <div class="shopable_tag-form-group">\n' +
                                        '                    <input type="text" class="shopable_tag-form-control' +
                                        ' shopable_tag-input" name="Title" id="Product_title"' +
                                        ' placeholder="Title" value="'+EditTag.Title+'"> </div>\n' +
                                        '                <div class="shopable_tag-form-group">\n' +
                                        '                    <input type="text" class="shopable_tag-form-control' +
                                        ' shopable_tag-input" name="ProductURL" id="ProductURL" placeholder="Url"  value="'+EditTag.ProductURL+'"> </div>\n' +
                                        '                <div class="shopable_tag-form-group">\n' +
                                        '                    <input type="text" class="shopable_tag-form-control' +
                                        ' shopable_tag-input" name="description" id="description" placeholder="Description"  value="'+EditTag.description+'"> </div>\n' +
                                        '            </div>\n' +
                                        '            <div class="shopable_tag-form-action">\n' +
                                        '                <input type="submit" id="shopable_submit_btn_link" class="shopable_form-btn" value="Submit"> </div>\n' +
                                        '        </form>\n' +
                                        '    </div>\n' +
                                        '</div>';
                                }else {
                                    var updateForm = '<div id="shopable_image2form">\n' +
                                        '    <a class="shopable_cancel-tag shopable_action"> <span class="shopable_hide-image-tag">x</span> </a>\n' +
                                        '    <div class="shopable_image-tag-body"><div' +
                                        ' class="shopable_form-title">Checkout' +
                                        ' Tag</div>\n' +
                                        '        <form action="" method="" class="shopable_txt-left" enctype="multipart/form-data">\n' +
                                        '            <input type="hidden" name="Id" id="'+EditTag.Id+'" value="'+EditTag.Id+'">\n' +
                                        '            <div id="shopable_tab_checkout" class="shopable_form_fileds">\n' +
                                        '                <div class="shopable_tag-form-group">\n' +
                                        '                    <input type="text" class="shopable_tag-form-control shopable_tag-input" name="Title" id="checkout_title" placeholder="Title" value="'+EditTag.Title+'"> </div>\n' +
                                        '                <div class="shopable_tag-form-group">\n' +
                                        '                    <input type="text" class="shopable_tag-form-control' +
                                        ' shopable_tag-input" name="Price" id="Price" placeholder="Price"' +
                                        ' value="'+EditTag.Price+'"> </div>\n' +
                                        '                <div class="shopable_tag-form-group">\n' +
                                        '                    <input type="text" class="shopable_tag-form-control shopable_tag-input" name="CheckOutUrl" id="CheckOutUrl" placeholder="Checkout Url" value="'+EditTag.CheckOutUrl+'"> </div>\n' +                                        '            </div>\n' +
                                        '            <div class="shopable_tag-form-action">\n' +
                                        '                <input type="submit" id="shopable_submit_btn_link" class="shopable_form-btn" value="Submit"> </div>\n' +
                                        '        </form>\n' +
                                        '    </div>\n' +
                                        '</div>';
                                }
                                tagform = jQueryObject('<div class="'+umPrefix_+'tagform-wrapper">').append(updateForm);

                                var offX = parseInt(EditTag.XPosition);
                                var offY = parseInt(EditTag.YPosition);
                                var imgWidth = parseInt(jQueryObject(this).width());
                                var imgHeight = parseInt(jQueryObject(this).height());
                                var widthDiff =  imgWidth - offX;
                                var heightDiff =  imgHeight - offY;
                                if(162 > widthDiff && 170 > heightDiff){
                                    var Newleft = imgWidth-162;
                                    var Newtop = imgHeight-170;
                                    tagform.css({
                                        top: Newtop,
                                        left: Newleft
                                    });
                                }else if(180 > heightDiff){
                                    var Newtop = imgHeight-180;
                                    tagform.css({
                                        top: Newtop,
                                        left: offX
                                    });
                                }else if(180 > widthDiff){
                                    var NewLeft = imgWidth-162;
                                    tagform.css({
                                        top: offY,
                                        left: NewLeft
                                    });
                                }else{
                                    tagform.css({
                                        top: offY,
                                        left: offX
                                    });
                                }
                                stopPropagation = function(e) {
                                    return e.stopPropagation();
                                };
                                tagform.click(stopPropagation);
                                jQueryObject(wrap).append(tagform);
                                _attatch_Edit_tagform_events(tagform);
                            }else
                                {
                                console.log("eELSE: === " + JSON.stringify(e.toElement.className));
                                tag = jQueryObject('<div class="'+umPrefix_+'tagdiv '+umPrefix_+'unsaved"></div>');
                                tag.css({
                                    top: offY,
                                    left: offX
                                });
                                _remove_unsaved_elements(wrap);

                                var imgWidth = jQueryObject(this).width();
                                var imgHeight = jQueryObject(this).height();
                                var widthDiff =  imgWidth - offX;
                                var heightDiff =  imgHeight - offY;
                                console.log("imgWidth: " + JSON.stringify(imgWidth) + "imgHeight: " + JSON.stringify(imgHeight));
                                console.log("offX: " + JSON.stringify(offX) + "offY: " + JSON.stringify(offY));
                                console.log("JSON-widthDiff: " + JSON.stringify(widthDiff) + "heightDiff: " + heightDiff);

                                jQueryObject('body').find('.'+umPrefix_+'tagform-wrapper').remove();
                                tagform = jQueryObject('<div class="'+umPrefix_+'tagform-wrapper">').append(tagForm);
                                //tagform.append('<a class="cancel-tag" href="#">Cancel</a>');

                                // jQueryObject('body').find('#tagform-wrapper').parent().css('z-index','6');
                                _attatch_tagform_events(tagform);
                                var imgWidth = jQueryObject(this).width();
                                var imgHeight = jQueryObject(this).height();
                                var widthDiff =  imgWidth - offX;
                                var heightDiff =  imgHeight - offY;
                                if(162 > widthDiff && 170 > heightDiff){
                                    var Newleft = imgWidth-162;
                                    var Newtop = imgHeight-170;
                                    tagform.css({
                                        top: Newtop,
                                        left: Newleft
                                    });
                                }else if(180 > heightDiff){
                                    var Newtop = imgHeight-180;
                                    tagform.css({
                                        top: Newtop,
                                        left: offX
                                    });
                                }else if(180 > widthDiff){
                                    var NewLeft = imgWidth-162;
                                    tagform.css({
                                        top: offY,
                                        left: NewLeft
                                    });
                                }else{
                                    tagform.css({
                                        top: offY,
                                        left: offX
                                    });
                                }
                                /*  tagform.css({
                                    top: offY + 20,
                                    left: offX
                                  });*/
                                stopPropagation = function(e) {
                                    return e.stopPropagation();
                                };
                                tag.click(stopPropagation);
                                tagform.click(stopPropagation);
                                jQueryObject(wrap).append(tag);
                                jQueryObject(wrap).append(tagform);
                                jQueryObject('.'+umPrefix_+'image-tag-wrapper').css('z-index','5');
                                wrap.css({
                                    zIndex: '6'
                                });
                                jQueryObject('#'+umPrefix_+'tab_comments').css("display", "block");
                                jQueryObject('.'+umPrefix_+'tab-comments').addClass(umPrefix_+'active');
                                jQueryObject('.'+umPrefix_+'tablinks').click(function(){
                                    var id = jQueryObject(this).attr("id");
                                    jQueryObject("#Type").val(id);
                                });
                                tagform.find("input[name=" + _this.options.labelProperty + "]").focus();
                                tagform.find("input[name=" + _this.options.propertyX + "]").val(eval("_pixels_to_" + _this.options.distanceUnity)(wrap, 'x', offX));
                                return tagform.find("input[name=" + _this.options.propertyY + "]").val(eval("_pixels_to_" + _this.options.distanceUnity)(wrap, 'y', offY));
                            }
                        }
                    });
                };
                _attatch_Edit_tagform_events = function(formWrap) {

                    debugger
                    var imageTag;
                    imageTag = _this;
                    formWrap.find('form').submit(function(e) {
                        var form, label;
                        e.preventDefault();
                        form = jQueryObject(this);
                        label = form.find("input[name=" + imageTag.options.labelProperty + "]").val();

                        if (_check_required_fields(formWrap)) {
                            debugger;
                            imageTag.options.onTag(form);
                            var form_array =  jQueryObject(this).serializeArray();
                            var EditTag =  serverImageList.find(element => element.Id  === parseInt(form_array[0].value));

                            var unindexed_array =  jQueryObject(this).serializeArray();
                            PostEdit(unindexed_array);
                            return formWrap.remove();
                        }
                    });
                    return formWrap.find('a.'+umPrefix_+'cancel-tag').click(function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        return _remove_unsaved_elements(formWrap.parent());
                    });
                };
                _attatch_tagform_events = function(formWrap) {

                    debugger
                    var imageTag;
                    imageTag = _this;
                    formWrap.find('form').submit(function(e) {
                        var form, label;
                        e.preventDefault();
                        form = jQueryObject(this);
                        label = form.find("input[name=" + imageTag.options.labelProperty + "]").val();
                        if (_check_required_fields(formWrap)) {
                            debugger;
                            imageTag.options.onTag(form);
                            var form_array =  jQueryObject(this).serializeArray();

                            var tagIcon = "";
                            if(form_array[0].value == 2){
                                tagIcon = '<div class="'+umPrefix_+'tagdiv" data-tag_id="'+ imageTag.context.currentSrc +'"><div' +
                                    ' class="'+umPrefix_+'circle-ripple-edit"><i class="fa fa-link"></i></div></div>'
                            }else if(form_array[0].value == 3){
                                tagIcon = '<div class="'+umPrefix_+'tagdiv" data-tag_id="'+ imageTag.context.currentSrc +'"><div' +
                                    ' class="'+umPrefix_+'circle-ripple-edit"><i class="fa fa-cart-plus"></i></div></div>'
                            }else{
                                tagIcon = '<div class="'+umPrefix_+'tagdiv" data-tag_id="'+ imageTag.context.currentSrc +'"><div' +
                                    ' class="'+umPrefix_+'circle-ripple-edit"><i class="fa fa-comments"></i></div></div>'
                            }

                            formWrap.parent().find('.'+umPrefix_+'tagdiv.'+umPrefix_+'unsaved').html(tagIcon);
                            formWrap.parent().find('.'+umPrefix_+'tagdiv.'+umPrefix_+'unsaved').removeClass(umPrefix_+'unsaved');
                            //  PostData(form);


                            var Title = "";
                            if(form_array[0].value == 2){
                                Title = form_array[2].value;
                            }else if(form_array[0].value == 3){
                                Title = form_array[5].value;
                            }else{
                                Title = "";
                            }

                            var html2 = '<input type="text" id="XPosition" size="20" name="XPosition" value="'+offXX+'" style="display:none" />';
                            var html3 = '<input type="text" id="YPosition" size="20" name="YPosition" value="'+offYY+'" style="display:none" />';
                            var html4 = '<input type="text" id="ImageURL" size="20" name="ImageURL" value="'+imageTag.context.currentSrc+'" style="display:none" />';
                            var html5 = '<input type="text" id="AccountId" size="20" name="AccountId" value="'+accountId+'" style="display:none" />';
                            var html6 = '<input type="text" id="SiteURL" size="20" name="SiteURL" value="'+siteURL+'" style="display:none" />';
                            var html7 = '<input type="text" id="Title" size="20" name="Title" value="'+Title+'" style="display:none" />';
                            jQueryObject(this).append(html2)
                            jQueryObject(this).append(html3)
                            jQueryObject(this).append(html4)
                            jQueryObject(this).append(html5)
                            jQueryObject(this).append(html6)
                            jQueryObject(this).append(html7)
                            var unindexed_array =  jQueryObject(this).serializeArray();



                            PostData(unindexed_array);
                            return formWrap.remove();
                        }
                    });
                    return formWrap.find('a.'+umPrefix_+'cancel-tag').click(function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        return _remove_unsaved_elements(formWrap.parent());
                    });
                };
                _check_required_fields = function(formWrap) {
                    var filled, selector;
                    filled = true;
                    selector = jQueryObject.map(_this.options.requiredFields, function(field) {
                        return "input[name=" + field + "]";
                    }).join(",");
                    jQueryObject(selector).each(function(index, el) {
                        if (jQueryObject(el).val().trim() === "") {
                            filled = false;
                        }
                        return true;
                    });
                    return filled;
                };
                _createWrapper = function(el) {
                    var wrap;
                    wrap = jQueryObject(el).wrap('<div class="'+umPrefix_+'image-tag-wrapper"/>').parent();
                    wrap.data(umPrefix_+'image-tag-enabled', _this.options.enableTag);
                    return wrap;
                };
                _remove_unsaved_elements = function(wrap) {
                    jQueryObject(wrap).find('.'+umPrefix_+'tagform-wrapper').remove();
                    return jQueryObject(wrap).find('.'+umPrefix_+'tagdiv.'+umPrefix_+'unsaved').remove();
                };
                _set_enable = function(el, enabled) {
                    jQueryObject(el).parent().data(umPrefix_+'image-tag-enabled', enabled);
                    if (enabled) {
                        return jQueryObject(el).parent().addClass(umPrefix_+'enabled');
                    } else {
                        return jQueryObject(el).parent().removeClass(umPrefix_+'enabled');
                    }
                };
                _enable = function(el) {
                    debugger
                    _set_enable(el, true);
                    return _show_tags(jQueryObject(el).parent());
                };
                _disable = function(el) {
                    _set_enable(el, false);
                    if (!_this.options.showTagsWhenDisabled) {
                        return _hide_tags(wrap);
                    }
                };
                _init = function() {
                    return _this.each(function(index, el) {
                        return _initPlugin(el);
                    });
                };
                _disable_all = function() {
                    return _this.each(function(index, el) {
                        return _disable(el);
                    });
                };
                _enable_all = function() {
                    return _this.each(function(index, el) {
                        return _enable(el);
                    });
                };
                _show_tags_all = function() {
                    return _this.each(function(index, el) {
                        return _show_tags(jQueryObject(el).parent());
                    });
                };
                _hide_tags_all = function() {
                    return _this.each(function(index, el) {
                        return _hide_tags(jQueryObject(el).parent());
                    });
                };
                _hide_tag_all = function(id) {
                    return _this.each(function(index, el) {
                        return _hide_tag(jQueryObject(el).parent(), id);
                    });
                };
                _show_tag_all = function(id) {
                    return _this.each(function(index, el) {
                        return _show_tag(jQueryObject(el).parent(), id);
                    });
                };
                _remove_tag_all = function(id) {
                    return _this.each(function(index, el) {
                        return _remove_tag(jQueryObject(el).parent(), id);
                    });
                };
                _hide_tags = function(wrapper) {
                    return wrapper.find('.'+umPrefix_+'tagdiv').hide();
                };
                _show_tags = function(wrapper) {
                    return wrapper.find('.'+umPrefix_+'tagdiv').show();
                };
                _show_tag = function(wrapper, id) {
                    debugger;
                    return wrapper.find('.'+umPrefix_+'tagdiv[data-tag_id=' + id + ']').show();
                };
                _hide_tag = function(wrapper, id) {
                    return wrapper.find('.'+umPrefix_+'tagdiv[data-tag_id=' + id + ']').hide();
                };
                _remove_tag = function(wrapper, id) {
                    return wrapper.find('.'+umPrefix_+'tagdiv[data-tag_id=' + id + ']').remove();
                };
                _add_tags = function(wrapper, tags) {
                    debugger
                    var imageSrc =  wrapper.context.src;
                    const search =  serverImageList.find(element => element.ImageURL === imageSrc);
                    var filtertags =  serverImageList.filter(word => word.ImageURL  === imageSrc);
                    console.log('JSON.stringify(filtertags):== '+JSON.stringify(filtertags));
                    if (search != undefined) {
                        filtertags.forEach( function(item) {
                            var tagIcon = '';
                            var tagDetail = '';
                            if(item.Type == 1){
                                tagIcon = '<div class="'+umPrefix_+'tagdiv" data-tag_id="'+ item.Id +'"><div class="'+umPrefix_+'circle-ripple-edit"><i class="fa fa-comments"></i></div></div>'
                            }else if(item.Type == 2){
                                tagIcon = '<div class="'+umPrefix_+'tagdiv" data-tag_id="'+ item.Id +'"><div class="'+umPrefix_+'circle-ripple-edit"><i class="fa fa-link"></i></div></div>'
                            }else if(item.Type == 3){
                                tagIcon = '<div class="'+umPrefix_+'tagdiv" data-tag_id="'+ item.Id +'"><div class="'+umPrefix_+'circle-ripple-edit"><i class="fa fa-cart-plus"></i></div></div>'
                            }
                            console.log("_this.options: " + JSON.stringify(_this.options));
                            var tag;
                            tag = jQueryObject(tagIcon + tagDetail);
                            tag.css({
                                top: eval("_" + _this.options.distanceUnity + "_to_pixels")(wrapper, 'y',parseInt(item.YPosition)),
                                left: eval("_" + _this.options.distanceUnity + "_to_pixels")(wrapper, 'x', parseInt(item.XPosition))

                            });
                            console.log("wrapper: " + JSON.stringify(wrapper));
                            debugger;
                            return wrapper.append(tag);
                        });

                    } else {
                        console.log('No result found');
                    }

                    /*return jQueryObject.each(tags, function(index, tagInfo) {
                        var tag;
                        // tag = jQueryObject("<div class='tagdiv' data-tag_id='" + tagInfo[_this.options.idProperty] + "'>" +
                        // (tagInfo[_this.options.labelProperty] || 'unnamed') + "</div>");
                        tag = jQueryObject('<div class="'+umPrefix_+'tagdiv" data-tag_id="' + tagInfo[_this.options.idProperty] + '">' + (tagInfo[_this.options.labelProperty] || "unnamed") + '</div>');
                        tag.css({
                            top: eval("_" + _this.options.distanceUnity + "_to_pixels")(wrapper, 'y', tagInfo[_this.options.propertyY]),
                            left: eval("_" + _this.options.distanceUnity + "_to_pixels")(wrapper, 'x', tagInfo[_this.options.propertyX])
                        });
                        debugger;
                        return wrapper.append(tag);
                    });*/
                };
                _pixels_to_percentage = function(wrapper, orientation, pixels) {
                    var lenght;
                    lenght = orientation === "x" ? wrapper.width() : wrapper.height();
                    return pixels / lenght;
                };
                _percentage_to_pixels = function(wrapper, orientation, percentage) {
                    var lenght;
                    lenght = orientation === "x" ? wrapper.width() : wrapper.height();
                    return lenght * percentage;
                };
                _pixels_to_pixels = function(wrapper, orientation, pixels) {
                    return pixels;
                };
                switch (options) {
                    case "disable":
                        return _disable_all();
                    case "enable":
                        return _enable_all();
                    case "show_tags":
                        debugger
                        return _show_tags_all();
                    case "hide_tags":
                        return _hide_tags_all();
                    case "show_tag":
                        return _show_tag_all.apply(this, Array.prototype.slice.call(arguments, 1));
                    case "hide_tag":
                        return _hide_tag_all.apply(this, Array.prototype.slice.call(arguments, 1));
                    case "remove_tag":
                        return _remove_tag_all.apply(this, Array.prototype.slice.call(arguments, 1));
                    default:
                        return _init();
                }
            };

        }).call(this);

        function PostData(formdata){
            console.log(formdata);


            var apiurl = BaseURL + "/api/Shopable/CreateTag";
            jQueryObject.ajax({
                type: "POST",
                url: apiurl,
                data: formdata, // serializes the form's elements.
                success: function(data)
                {
                    console.log(data)
                    //  alert(data); // show response from the php script.
                }
            });
        }

     function PostEdit(formdata){
                console.log(formdata);
                var apiurl = BaseURL + "/api/Shopable/UpdateTag";
                jQueryObject.ajax({
                    type: "POST",
                    url: apiurl,
                    data: formdata, // serializes the form's elements.
                    success: function(data)
                    {
                        console.log(data)
                        //  alert(data); // show response from the php script.
                    }
                });
            }










    } else  {



        (function() {
            var jQueryObject;
            var offX, offY, stopPropagation, tag;
            jQueryObject = jQuery;

            jQueryObject.fn.imageTag = function(options) {
                var _add_tags, _attatch_tagform_events, _check_required_fields, _createWrapper, _disable, _disable_all, _enable, _enable_all, _hide_tag, _hide_tag_all, _hide_tags, _hide_tags_all, _init, _initPlugin, _percentage_to_pixels, _pixels_to_percentage, _pixels_to_pixels, _remove_tag, _remove_tag_all, _remove_unsaved_elements, _set_enable, _show_tag, _show_tag_all, _show_tags, _show_tags_all,
                    _this = this;
                this.options = jQueryObject.extend({
                    enableTag: true,
                    tagForm: "<form><input type='text' name='name'></input> <input type='hidden' name ='x'/><input type='hidden' name ='y'/></form>",
                    onTag: function(form) {},
                    labelProperty: 'name',
                    idProperty: 'id',
                    propertyX: 'x',
                    propertyY: 'y',
                    distanceUnity: 'pixels',
                    requiredFields: ['name'],
                    tags: [],
                    showTagsWhenDisabled: true
                }, options);
                _initPlugin = function(el) {
                    var wrap;
                    wrap = _createWrapper(el);
                    if (wrap.data(umPrefix_+'image-tag-enabled')) {
                        wrap.addClass(umPrefix_+'enabled');
                    }
                    if (jQueryObject.fn.imagesLoaded) {
                        wrap.imagesLoaded(function() {
                            debugger
                            return _add_tags(wrap, _this.options.tags);
                        });
                    } else {
                        debugger
                        _add_tags(wrap, _this.options.tags);
                    }
                    if (!_this.options.showTagsWhenDisabled && !wrap.data(umPrefix_+'image-tag-enabled')) {
                        _hide_tags(wrap);
                    }
                    return jQueryObject(wrap).click(function(e) {
                        var offX, offY, stopPropagation, tag, tagform;
                        e.preventDefault();
                        e.stopPropagation();
                        if (!(e.offsetX || e.offsetY)) {
                            offX = e.pageX - jQueryObject(e.target).offset().left;
                            offY = e.pageY - jQueryObject(e.target).offset().top;
                        } else {
                            offX = e.offsetX;
                            offY = e.offsetY;
                        }
                        offXX = offX;
                        offYY = offY;


                    });
                };
                _attatch_tagform_events = function(formWrap) {

                    debugger
                    var imageTag;
                    imageTag = _this;

                    return formWrap.find('a.'+umPrefix_+'cancel-tag').click(function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        return _remove_unsaved_elements(formWrap.parent());
                    });
                };
                _check_required_fields = function(formWrap) {
                    var filled, selector;
                    filled = true;
                    selector = jQueryObject.map(_this.options.requiredFields, function(field) {
                        return "input[name=" + field + "]";
                    }).join(",");
                    jQueryObject(selector).each(function(index, el) {
                        if (jQueryObject(el).val().trim() === "") {
                            filled = false;
                        }
                        return true;
                    });
                    return filled;
                };
                _createWrapper = function(el) {
                    var wrap;
                    wrap = jQueryObject(el).wrap('<div class="'+umPrefix_+'image-tag-wrapper" style="cursor: default !important;"/>').parent();
                    wrap.data(umPrefix_+'image-tag-enabled', _this.options.enableTag);
                    return wrap;
                };
                _remove_unsaved_elements = function(wrap) {
                    jQueryObject(wrap).find('.'+umPrefix_+'tagform-wrapper').remove();
                    return jQueryObject(wrap).find('.'+umPrefix_+'tagdiv.'+umPrefix_+'unsaved').remove();
                };
                _set_enable = function(el, enabled) {
                    jQueryObject(el).parent().data(umPrefix_+'image-tag-enabled', enabled);
                    if (enabled) {
                        return jQueryObject(el).parent().addClass(umPrefix_+'enabled');
                    } else {
                        return jQueryObject(el).parent().removeClass(umPrefix_+'enabled');
                    }
                };
                _enable = function(el) {
                    debugger
                    _set_enable(el, true);
                    return _show_tags(jQueryObject(el).parent());
                };
                _disable = function(el) {
                    _set_enable(el, false);
                    if (!_this.options.showTagsWhenDisabled) {
                        return _hide_tags(wrap);
                    }
                };
                _init = function() {
                    return _this.each(function(index, el) {
                        return _initPlugin(el);
                    });
                };
                _disable_all = function() {
                    return _this.each(function(index, el) {
                        return _disable(el);
                    });
                };
                _enable_all = function() {
                    return _this.each(function(index, el) {
                        return _enable(el);
                    });
                };
                _show_tags_all = function() {
                    return _this.each(function(index, el) {
                        return _show_tags(jQueryObject(el).parent());
                    });
                };
                _hide_tags_all = function() {
                    return _this.each(function(index, el) {
                        return _hide_tags(jQueryObject(el).parent());
                    });
                };
                _hide_tag_all = function(id) {
                    return _this.each(function(index, el) {
                        return _hide_tag(jQueryObject(el).parent(), id);
                    });
                };
                _show_tag_all = function(id) {
                    debugger;
                    return _this.each(function(index, el) {
                        return _show_tag(jQueryObject(el).parent(), id);
                    });
                };
                _remove_tag_all = function(id) {
                    return _this.each(function(index, el) {
                        return _remove_tag(jQueryObject(el).parent(), id);
                    });
                };
                _hide_tags = function(wrapper) {
                    return wrapper.find('.'+umPrefix_+'tagdiv').hide();
                };
                _show_tags = function(wrapper) {
                    // return wrapper.find(".tagdiv").show();
                };
                _show_tag = function(wrapper, id) {
                    debugger;
                    return wrapper.find('.'+umPrefix_+'tagdiv[data-tag_id=' + id + ']').show();
                };
                _hide_tag = function(wrapper, id) {
                    return wrapper.find('.'+umPrefix_+'tagdiv[data-tag_id=' + id + ']').hide();
                };
                _remove_tag = function(wrapper, id) {
                    return wrapper.find('.'+umPrefix_+'tagdiv[data-tag_id=' + id + ']').remove();
                };
                _add_tags = function(wrapper, tags) {
                    debugger

                    var imageSrc =  wrapper.context.src;
                    const search =  serverImageList.find(element => element.ImageURL === imageSrc);
                    var filtertags =  serverImageList.filter(word => word.ImageURL  === imageSrc);

                    if (search != undefined) {



                        filtertags.forEach( function(item) {
                            var tagIcon = '';
                            var tagDetail = '';
                            if(item.Type == 1){
                                tagIcon = '<div class="'+umPrefix_+'tagdiv" data-tag_id="'+ item.ImageURL +'"><div class="'+umPrefix_+'circle-ripple"><i class="fa fa-comments"></i></div></div>'
                                tagDetail = '<div class="'+umPrefix_+'tagDetail"><a class="'+umPrefix_+'cancel-tag '+umPrefix_+'action"> <span class="'+umPrefix_+'hide-image-tag">x</span> </a><div class="'+umPrefix_+'image-tag-view-body">'+ item.Comment +'</div></div>'
                            }else if(item.Type == 2){
                                tagIcon = '<div class="'+umPrefix_+'tagdiv" data-tag_id="'+ item.ImageURL +'"><div class="'+umPrefix_+'circle-ripple"><i class="fa fa-link"></i></div></div>'
                                tagDetail = '<div class="'+umPrefix_+'tagDetail"><a class="'+umPrefix_+'cancel-tag '+umPrefix_+'action"> <span' +
                                    ' class="'+umPrefix_+'hide-image-tag">x</span> </a><div class="'+umPrefix_+'image-tag-view-body"> <div' +
                                    ' class="'+umPrefix_+'product-title">'+ item.Title +'</div><div class="'+umPrefix_+'product-description">'+ item.description +'</div><a href="'+ item.ProductURL +'" class="'+umPrefix_+'product-link" target="_blank">View</a> </div></div>'
                            }else if(item.Type == 3){
                                tagIcon = '<div class="'+umPrefix_+'tagdiv" data-tag_id="'+ item.ImageURL +'"><div class="'+umPrefix_+'circle-ripple"><i class="fa fa-cart-plus"></i></div></div>'
                                tagDetail = '<div class="'+umPrefix_+'tagDetail"><a class="'+umPrefix_+'cancel-tag '+umPrefix_+'action"> <span ' +
                                    'class="'+umPrefix_+'hide-image-tag">x</span> </a><div class="'+umPrefix_+'image-tag-view-body"> <div ' +
                                    'class="'+umPrefix_+'product-title">'+ item.Title+'</div><div class="'+umPrefix_+'product-description">' +
                                    '<b>Rs.'+ item.Price +'</b></div><a href="'+ item.CheckOutUrl+'" class="'+umPrefix_+'product-link">Checkout</a>' +
                                    ' </div></div>'
                            }
                            console.log("_this.options: " + JSON.stringify(_this.options));

                            var tag;
//          tag = jQueryObject("<div class = 'tagdiv ' data-tag_id='" + item.ImageURL + "'>" + item.Title  + "</div>");
                            tag = jQueryObject(tagIcon + tagDetail);
                            tag.css({
                                top: eval("_" + _this.options.distanceUnity + "_to_pixels")(wrapper, 'y',parseInt(item.YPosition)),
                                left: eval("_" + _this.options.distanceUnity + "_to_pixels")(wrapper, 'x', parseInt(item.XPosition))

                            });

                            console.log("wrapper: " + JSON.stringify(wrapper));



                            debugger;
                            return wrapper.append(tag);
                        } );





                    } else {
                        console.log('No result found');
                    }

                };
                _pixels_to_percentage = function(wrapper, orientation, pixels) {
                    var lenght;
                    lenght = orientation === "x" ? wrapper.width() : wrapper.height();
                    return pixels / lenght;
                };
                _percentage_to_pixels = function(wrapper, orientation, percentage) {
                    var lenght;
                    lenght = orientation === "x" ? wrapper.width() : wrapper.height();
                    return lenght * percentage;
                };
                _pixels_to_pixels = function(wrapper, orientation, pixels) {
                    return pixels;
                };
                switch (options) {
                    case "disable":
                        return _disable_all();
                    case "enable":
                        return _enable_all();
                    case "show_tags":
                        debugger
                        return _show_tags_all();
                    case "hide_tags":
                        return _hide_tags_all();
                    case "show_tag":
                        return _show_tag_all.apply(this, Array.prototype.slice.call(arguments, 1));
                    case "hide_tag":
                        return _hide_tag_all.apply(this, Array.prototype.slice.call(arguments, 1));
                    case "remove_tag":
                        return _remove_tag_all.apply(this, Array.prototype.slice.call(arguments, 1));
                    default:
                        return _init();
                }
            };

        }).call(this);



    }

    forEachNode(document.images, function(elem) {
        jQueryObject(elem).imageTag({tagForm: tagForm, labelProperty:'title'});
    });
    jQueryObject('.'+umPrefix_+'circle-ripple').click(function(){

        var offX = jQueryObject(this).parent().css('left');
        var offY = jQueryObject(this).parent().css('top');
        var imgContainerX = jQueryObject(this).parent().parent().find('img').width();
        var imgContainerY = jQueryObject(this).parent().parent().find('img').height();
        var dataContainerX = parseInt(jQueryObject(this).parent().next('.'+umPrefix_+'tagDetail').width()) + 25;
        var dataContainerY = parseInt(jQueryObject(this).parent().next('.'+umPrefix_+'tagDetail').height()) + 15;
        var diff_img_OffX = parseInt(imgContainerX) - parseInt(offX);
        var diff_img_OffY = parseInt(imgContainerY) - parseInt(offY);
        var diff_data_diff_img_OffX = parseInt(dataContainerX) - parseInt(diff_img_OffX);
        var diff_data_diff_img_OffY = parseInt(dataContainerY) - parseInt(diff_img_OffY);
        var orignalPositionX = parseInt(offX) - parseInt(diff_data_diff_img_OffX);
        var orignalPositionY = parseInt(offY) - parseInt(diff_data_diff_img_OffY);
        if(diff_data_diff_img_OffX < 0){
            orignalPositionX = offX;
        }
        if(diff_data_diff_img_OffY < 0){
            orignalPositionY = offY;
        }
        jQueryObject(this).parent().next('.'+umPrefix_+'tagDetail').css({
            left: orignalPositionX,
            top: orignalPositionY
        });

        jQueryObject('body').find('.'+umPrefix_+'tagDetail').hide();
        jQueryObject('body').find('.'+umPrefix_+'image-tag-wrapper').css('z-index','5');
        jQueryObject(this).parent().parent().css('z-index','6');
        jQueryObject(this).parent().next('.'+umPrefix_+'tagDetail').css('z-index','11');
        jQueryObject(this).parent().next('.'+umPrefix_+'tagDetail').show();
    })
    jQueryObject('.'+umPrefix_+'tagDetail>.'+umPrefix_+'action').click(function(){
        jQueryObject(this).parent().parent().css('z-index','5')
        jQueryObject(this).parent().hide();
    })
    jQueryObject('.shopable_product-link').click(function(){
        window.open(jQueryObject(this).attr('href'));
    })
    $('.shopable_product-link').click(function(){
        window.open('http://jsonviewer.stack.hu/');
    })
}
function openCity(evt, cityName) {
    var umPrefix_ = 'shopable_';
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName(umPrefix_+'tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName(umPrefix_+'tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' '+umPrefix_+'active', "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += ' '+umPrefix_+'active';
}