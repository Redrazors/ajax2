/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var req;
var isIE;
var testDiv;

function init() {

    testDiv = document.getElementById("testDiv");
    doCompletion();
}

function doCompletion() {
    var url = "dataservlet?action=testaction";
    req = initRequest();
    req.open("GET", url, true);
    req.onreadystatechange = callback;
    req.send(null);
}

function initRequest() {

    if (window.XMLHttpRequest) {
        if (navigator.userAgent.indexOf('MSIE') != -1) {
            isIE = true;
        }
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        isIE = true;
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function callback() {

    if (req.readyState == 4) {
        if (req.status == 200) {
            parseMessages(req.responseXML);
        }
    }
}

function parseMessages(responseXML) {

    //var string = (new XMLSerializer()).serializeToString(responseXML); 
 ;
    // no matches returned
    if (responseXML == null) {
        return false;
    } else {

        var testData = responseXML.getElementsByTagName("testData")[0];

     
        var innerXml = responseXML.getElementsByTagName("innerXml")[0];
        var nodes = innerXml.childNodes[0];
        var testString = nodes.nodeValue;
        


        testDiv.innerHTML = testString;
        


    }
}

