const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});
localStorage.setItem("logedIn", "no");

function login() {
  var email = document.getElementById("emailLogin").value;
  var pass = document.getElementById("passLogin").value;
  const loginData = {
    email: email,
    password: pass
  };
  localStorage.setItem("email", email);
  fetch("https://senderr.in/API_main/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      // handle successful login
      console.log(data);
      if (data.success == "1") {
        localStorage.setItem("logedIn", "yes");
        localStorage.setItem("token", data.token);
        console.log(data.token);
        if (data.isAdmin == "1") {
          localStorage.setItem("isAdmin", "1");
          window.open("/ADMIN/dashboard.html", "_self");
        } else if (data.isAdmin == "0") {
          localStorage.setItem("isAdmin", "0");
          window.open("/user-profile.html", "_self");
        }

      } else {
        alert(data.message);
      }
    })
    .catch(error => {
      console.log(error);
      // handle error
    });

}

function register() {
  var name = document.getElementById("nameReg").value;
  var email = document.getElementById("emailReg").value;
  var mobile = document.getElementById("mobileReg").value;
  var password = document.getElementById("passwordReg").value;
  var designation = document.getElementById("designation").value;
  var department = document.getElementById("department").value;
  
  const registerData = {
    name: name,
    email: email,
    password: password,
    mobile: mobile,
    designation: designation,
    department: department,
    photo: "dg",
    signature: "fg"
  };
  console.log(registerData);


  fetch("https://senderr.in/API_main/register.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(registerData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      if (data.success == "1") {
        // handle successful login
        console.log(data);
        localStorage.setItem("email", email);
        window.open("/otp-verification.html", "_self");
      } else {

        alert(data.message);
      }

    })
    .catch(error => {
      console.log(error);
      // handle error
    });
}