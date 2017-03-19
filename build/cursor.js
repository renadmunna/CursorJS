var cursor=function(cursorRef){
  if(cursorRef.type=="img"){cursorRef.url=cursorRef.filePath;}
  else if(cursorRef.type=="svg"){
    if(cursorRef.hasOwnProperty("svgElement")){
      cursorRef.url="data:image/svg+xml;base64,"+btoa((new XMLSerializer).serializeToString(cursorRef.svgElement));
    }
	else if(cursorRef.hasOwnProperty("svgString")){
	  var tempDomElement=document.createElement('div');
      tempDomElement.innerHTML=cursorRef.svgString;
	  //console.log(tempDomElement.firstChild);
	  cursorRef.url="data:image/svg+xml;base64,"+btoa((new XMLSerializer).serializeToString(tempDomElement.getElementsByTagName("svg")[0]));
	}
    else if(cursorRef.hasOwnProperty("filePath")){
	  var xhr=new XMLHttpRequest();
      xhr.open("GET",cursorRef.filePath);
      xhr.send();
      xhr.onreadystatechange=function() {
        if (xhr.readyState===XMLHttpRequest.DONE && xhr.status===200) {
		  var tempDomElement=document.createElement('div');
          tempDomElement.innerHTML=xhr.responseText;
		  cursorRef.url="data:image/svg+xml;base64,"+btoa((new XMLSerializer).serializeToString(tempDomElement.getElementsByTagName("svg")[0]));
		  cursorRef.domElement.style["cursor"]="url("+cursorRef.url+"),auto";
        }
      };
	}
  }
  if(cursorRef.url!=undefined && cursorRef.url!=null && cursorRef.url!=""){
    cursorRef.domElement.style["cursor"]="url("+cursorRef.url+"),auto";
  }
};