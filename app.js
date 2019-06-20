function shopableLoader(cdnUrl, appUrl, apiUrl) {
	debugger
  const urlParams = new URLSearchParams(window.location.search);

const myParam = urlParams.get('shopable_Auth');
  debugger
	var meta = {};
	var dm = document.getElementsByTagName("meta");
	for (var i = 0; i < dm.length; i++) {
		var property = dm[i].getAttribute("property");
		if (property && (property = property.split("shopable:")[1])) meta[property] = dm[i].getAttribute("content");
	}
	if (meta.disabled !== undefined) return false;

	var accountId = null;

	var sc = document.getElementsByTagName("script");
	for (var i = 0; i < sc.length; i++) {
		if (sc[i].src.indexOf(cdnUrl +"/app.js#") > -1) {
			accountId = sc[i].src.split("#").pop();
			break;
		}
	}

	if (!accountId) accountId = document.querySelector("script[src='" + cdnUrl + "js/jquery-image-tag.js']").dataset.account;

	

	var s = document.createElement("script");
	s.defer = true;
	s.src = appUrl;
	s.type = "text/javascript";
	s.onload = function() {
		var jqueryfile = document.createElement("script");
		jqueryfile.defer = true;
		jqueryfile.src = "https://shopable.s3.us-east-2.amazonaws.com/jquery.1.8.3.min.js";
		jqueryfile.type = "text/javascript";
		jqueryfile.onload = function() {
		
		window.shoppableapplicationload(accountId, cdnUrl, appUrl, apiUrl, meta,myParam);
		
		};
		document.getElementsByTagName("head")[0].appendChild(jqueryfile);
    // window.shoppableapplicationload(accountId, cdnUrl, appUrl, apiUrl, meta,myParam);
    
	};
	document.getElementsByTagName("head")[0].appendChild(s);


	
}
window.shopableLoader("http://localhost/shopablejquery", "http://localhost/ShopablejQuery/jquery-image-tag.js", "http://shapable.us-east-2.elasticbeanstalk.com");




  
       
       

