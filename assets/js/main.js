isLoggedIn();
function isLoggedIn(){
    var d=localStorage.getItem("logedIn")||"no";
    var currUrl = window.location.href;
    if(d!="yes"){
        if(!currUrl.includes("/reg/login.html")&& !currUrl.includes("/forget-password/index.html")){
            window.open("/login/reg/login.html","_self");
        }
    }
}
function logout(){
    alert("successfully loged out");
    localStorage.setItem("logedIn","no");
    isLoggedIn();
    // console.log(localStorage.getItem("logedIn"))
}