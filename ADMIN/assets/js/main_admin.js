isLoggedIn();
function isLoggedIn(){
    var d=localStorage.getItem("logedIn")||"no";
    var isAdmin=localStorage.getItem("isAdmin");
    var currUrl = window.location.href;
    if (d == "yes" && isAdmin == "1"){
        // if(isAdmin=="0"){
        //     window.open("/login.html","_self");
        // }
        // if(!currUrl.includes("/login.html")&& !currUrl.includes("/forget-password/index.html")){
        //     window.open("/ADMIN/login/index.html","_self");
        // }
    }else{
        window.open("/login.html", "_self");
    }
}