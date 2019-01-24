function add(  ){
	var div=document.createElement('div');
	div.setAttribute("role","presentation");
	div.setAttribute("class","dropdown");
	var button=document.createElement('button');
	button.setAttribute("class","btn btn-default dropdown-toggle");
	button.setAttribute("data-toggle","dropdown");
	button.setAttribute("role","button");
	button.setAttribute("aria-haspopup","true");
	button.setAttribute("aria-expanded","false");
	button.setAttribute("value","操作");
	var span=document.createElement('span');
	span.setAttribute("class","caret");
	var ul=document.createElement('ul');
	ul.setAttribute("class","dropdown-menu");
	var li=document.createElement('li');
	var a=document.createElement('a');
	a.href="#compile";
	a.innerHTML="添加";
	a.setAttribute("role","button");
	a.setAttribute("class","compile");
	a.setAttribute("data-toggle","modal");
	a.setAttribute("data-target","#compile");
	
	a.appendChild(li);
	ul.appendChild(li);
	button.appendChild(span);
	div.appendChild(button);
	div.appendChild(ul);
	
}





