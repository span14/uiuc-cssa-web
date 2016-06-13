/**
 * Credit to Tianyuan Zhang.
 * Revised by MoNeY Pro..
 */
//var urlParams;
//
//(window.onpopstate = function () {
//    var match,
//        pl     = /\+/g,  // Regex for replacing addition symbol with a space
//        search = /([^&=]+)=?([^&]*)/g,
//        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
//        query  = window.location.search.substring(1);
//    urlParams = {};
//    while (match = search.exec(query))
//        urlParams[decode(match[1])] = decode(match[2]);
//})();

//alert(urlParams["department"]);

//$(document).ready(function(){
//$.ajax({type: "GET",url: "data.csv", success: function(result){
    //    arrangeList(result,urlParams["department"]);
    //    //setPageNextPre(result,urlParams["department"]);
    //}});

//});

//function setPageNextPre(result,depName){
//    depList = printDepList(result);
//    index = depList.indexOf(depName);
//    var listContainer = document.getElementById("pageTurn");
//    var curpage = location.protocol + '//' + location.host + location.pathname;
//    var p;
//    if(index>0){
//        var pre = document.createElement("li");
//        var link2pre = document.createElement("a");
//        var namePre=  document.createTextNode('<< ' +depList[index-1]);
//        p = document.createElement("p");
//        link2pre.href = curpage  + '?department=' + depList[index-1];
//        p.appendChild(namePre);
//        link2pre.appendChild(p);
//        pre.appendChild(link2pre);
//        listContainer.appendChild(pre);
//    }
//    if(index<depList.length){
//        var next = document.createElement("li");
//        var link2next = document.createElement("a");
//        var nameNext= document.createTextNode(depList[index+1] + ' >>');
//        p = document.createElement("p");
//        link2next .href = curpage  + '?department=' + depList[index+1];
//        p.appendChild(nameNext);
//        link2next.appendChild(p);
//        next.appendChild(link2next);
//        listContainer.appendChild(next);
//    }
//
//
//}

var list;
function fillImage(department){
    $.ajax({
        type: "GET", url: "../assets/image/member/data.csv", success: function (result) {
        arrangeList(result,department);
        //setPageNextPre(result,urlParams["department"]);
    }});
}


function showComment() {
    //var row = getQueryString('id');
    //console.log(list[row][5]);
}

function printDepList(result){
    list = $.csv.toArrays(result);

    depList = [];
    for(i = 1;i<list.length;i++){
        if(depList.indexOf(list[i][4]) == -1){
            depList.push(list[i][4]);
        }
    }
    return depList;
}

function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

function arrangeList(result,departmentName){

    list = $.csv.toArrays(result);
//    console.log(list);
    var memberList = document.getElementById("memberList");
    var row = getQueryString('id');
    if (list[row] != undefined) {
        document.getElementById("name").innerHTML = "<h3>部长给" + list[row][1] + "的留言</h3>";
        if (list[row][5] == "")
            document.getElementById("comment").innerHTML = "部长暂时还没有给你留言。";
        else
            document.getElementById("comment").innerHTML = list[row][5];
    }
    //console.log(list[row][5]);
    //console.log(list[row][5]);
    for(i = 1;i<list.length;i++){
        if(list[i][4]!= departmentName)
            continue;
        var department = document.getElementById(departmentName);

        //Creating department title and list if not exist.
        if(department == null)
        {
            //var dpmTitle = document.createElement("h2");
            //dpmTitle.appendChild(document.createTextNode(list[i][4]));
            //memberList.appendChild(dpmTitle);
            department = document.createElement("ul");
            department.className = "rig columns-4";
            department.id = list[i][4];
            memberList.appendChild(department);
        }

        //Create list item and append it to correspongding department list.
        var link = document.createElement("a");
        //link.href = "../assets/image/member/photo/LJS_"+list[i][3]+".jpg";
        link.href = "./comment.html?id=" + i;
        var listitem = document.createElement("li");
        var memberImg = document.createElement("img");
        var p = document.createElement("h3");

        //check image exist
        var img_url = "../assets/image/member/thumbnail/thumb_LJS_" + list[i][3] + ".jpg";
        //var img_url = "../assets/image/member/photo/LJS_" + list[i][3] + ".jpg";
        memberImg.src = img_url;
        if(!UrlExists(img_url)){
            memberImg.src ="../assets/image/member/photo/blank.jpg";
        }
        memberImg.alt = list[i][1];
        var memberName = document.createTextNode(list[i][1]);
        p.appendChild(memberName);
        link.appendChild(memberImg);
        listitem.appendChild(link);
        listitem.appendChild(p);
        department.appendChild(listitem);
    }
}

