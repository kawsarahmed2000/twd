isLoggedIn();
function isLoggedIn(){
    var d=localStorage.getItem("logedIn")||"no";
    var isAdmin=localStorage.getItem("isAdmin")||"0";
    var currUrl = window.location.href;
    if(d!="yes"){
        if(isAdmin=="0"){
            window.open("/login/reg/login.html","_self");
        }
        // if(!currUrl.includes("/login.html")&& !currUrl.includes("/forget-password/index.html")){
        //     window.open("/ADMIN/login/index.html","_self");
        // }
    }
}