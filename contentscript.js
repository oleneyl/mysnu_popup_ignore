

if(document.cookie.search("20150112") == -1){
    /*
    console.log(document.getElementsByName("mainFrame")[0]);
    console.log(document.getElementsByName("mainFrame")[0].contentWindow);
    console.log(document.getElementsByName("mainFrame")[0].contentWindow.layerPopupClose);
    document.getElementsByName("mainFrame")[0].contentWindow.layerPopupClose();
    */
    var todayDate = new Date();
	todayDate.setDate(todayDate.getDate() + 365);
	document.cookie = "20150112" + "=" + escape( "no" ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
	console.log("20150112" + "=" + escape( "no" ) + "; path=/; expires=" + todayDate.toGMTString() + ";");
}

/*
	function setCookieLayer(name, value, expiredays){
			var todayDate = new Date();
		 	todayDate.setDate(todayDate.getDate() + expiredays);
		 	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" +
		 	todayDate.toGMTString() + ";"
	}

*/