var tab_cn = ["首页","活动",["成员","执行会",["部门介绍","学生事务部","本科生部","研究生部",
"文体部","职业发展部","外联部","宣传部","财政部","网络技术部","人力资源部"],
["子社团介绍","香槟影楼","光子映画","JF乐团","镜源舞社"],"明日之星"],
["关于我们","文化及视野","联系我们"],"论坛"];

var tab_en = ["HOME", "EVENTS", ["MEMBERS","Board",["Divisions","Student Affair",
"Undergrad","Graduate","Sports & Recreation","Career Service",
"Public Relations","Publicity","Treasure","Web & Technology","Human Resource"]
,["Clubs","UIUC Photography","Photon Pictures","Jasmine Field","Imaginasian"],
"Star Members"],["ABOUT","Vision","Contact"],"FORUM"];

function getEN() {
    document.getElementById("tab_home").innerHTML = tab_en[0];
    document.getElementById("tab_events").innerHTML = tab_en[1];

    document.getElementById("tab_memb").innerHTML = tab_en[2][0];
       document.getElementById("tab_board").innerHTML = tab_en[2][1];
    document.getElementById("tab_div").innerHTML = tab_en[2][2][0];
    document.getElementById("tab_sa").innerHTML = tab_en[2][2][1];
    document.getElementById("tab_undergrad").innerHTML = tab_en[2][2][2];
    document.getElementById("tab_grad").innerHTML = tab_en[2][2][3];
    document.getElementById("tab_sr").innerHTML = tab_en[2][2][4];
    document.getElementById("tab_cs").innerHTML = tab_en[2][2][5];
    document.getElementById("tab_pr").innerHTML = tab_en[2][2][6];
    document.getElementById("tab_publi").innerHTML = tab_en[2][2][7];
    document.getElementById("tab_tre").innerHTML = tab_en[2][2][8];
    document.getElementById("tab_it").innerHTML = tab_en[2][2][9];
    document.getElementById("tab_hr").innerHTML = tab_en[2][2][10];
    document.getElementById("tab_sub").innerHTML = tab_en[2][3][0];
    document.getElementById("tab_pho").innerHTML = tab_en[2][3][1];
    document.getElementById("tab_pp").innerHTML = tab_en[2][3][2];
    document.getElementById("tab_jf").innerHTML = tab_en[2][3][3];
    document.getElementById("tab_dance").innerHTML = tab_en[2][3][4];
    document.getElementById("tab_star").innerHTML = tab_en[2][4];
    document.getElementById("tab_ab").innerHTML = tab_en[3][0];
    document.getElementById("tab_vision").innerHTML = tab_en[3][1];
    document.getElementById("tab_cont").innerHTML = tab_en[3][2];
    document.getElementById("tab_bbs").innerHTML = tab_en[4];
};
getEN();
