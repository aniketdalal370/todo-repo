function newItem(url) {
	  var item = document.getElementById('input').value;
	  console.log(item);
	  var request = new XMLHttpRequest();

      request.open('POST', url,true);
      request.responseType='json';
      var userObj = {name:item};
      request.setRequestHeader("Content-Type", "application/json");
      request.send(JSON.stringify(userObj));
       request.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                  loadDoc('http://localhost:8080/demo/all',myFunction);
          }
        };
      document.getElementById('input').value="";
}

document.body.onkeyup = function(e){
    if(e.keyCode == 13){
        newItem('http://localhost:8080/demo/add');
    }
}

function removeItem(e) {
  var tt =e.target.innerHTML;
  var aa = e.target;
  var id1 = aa.getAttribute("idAttr");
  console.log(id1);
  var userObj = {id:id1,name:tt};
  deleteEntry('http://localhost:8080/demo/delete',userObj);
  console.log(tt);
  var n = e.target.parentElement.removeChild(e.target);
  console.log(n);
}

function deleteEntry(url,userObj,xhttp){
  var drequest = new XMLHttpRequest();
  drequest.open('POST',url,true);
  drequest.responseType='json';
  drequest.setRequestHeader("Content-Type", "application/json");
  drequest.send(JSON.stringify(userObj));
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function loadDoc(url, cFunction) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function myFunction(xhttp) {
    console.log(xhttp.responseText);
    var json1 =JSON.parse(xhttp.responseText);
    var json2 =xhttp.responseText;
    var i;
    var farr;
    var ol = document.getElementById("lis");
    ol.textContent ="";
    for(i=0;i<json1.length;i++){
            var oli = document.createElement('li');
            oli.setAttribute("idAttr",json1[i].id);
            farr = json1[i].name;
            oli.appendChild(document.createTextNode(farr));
            ol.appendChild(oli);
            oli.onclick = removeItem;
    }
}
function getIds(xhttp){
var ui = xhttp.responseText;
var ni = new Array();
ni = JSON.parse(ui);
return ni;
}
