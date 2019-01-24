function ajax(url,method,success,error){

	if(window.XMLHttpRequest) {

		var oAjax = new XMLHttpRequest();
	} else {
		var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}

	oAjax.open(method,url, true);

	oAjax.send();

	oAjax.onreadystatechange = function() { 

		if(oAjax.readyState == 4) { 
			
			if(oAjax.status == 200) { 
				
				success(oAjax.responseText);

			} else {

				error();

			}
		};
	};
}