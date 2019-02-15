function ajax(url, method, success, sync) {

	if(window.XMLHttpRequest) {

		var oAjax = new XMLHttpRequest();
	} else {
		var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}

	var s = true;
	if(sync == undefined) {
		s = true;
	} else {
		s = sync;
	}

	oAjax.open(method, url, s);

	oAjax.send();

	oAjax.onreadystatechange = function() {

		if(oAjax.readyState == 4) {

			if(oAjax.status == 200) {

				success(oAjax.responseText);

			} else {

				alert("ajax error:"+oAjax.status);

			}
		};
	};
}