

getNewApplicant()

document.getElementById("mainTable").style.display = "none";
function getNewApplicant() {
  var email = localStorage.getItem("email");
  var token = localStorage.getItem("token"); 
  console.log(token); 
  const profileData = {
    email: "ahmedkawsar202949@gmail.com"
  };

  fetch("https://senderr.in/API_main/newRgistrationUserList.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(profileData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      // handle successful profile retrieval
      console.log(data.data)
      var table = document.getElementById("newAppliation");
      table.innerHTML==""
      var k=0;
      data.data.forEach(element => {
      
        if (element.isOtpVerified == "1") {
          k++
          
          var row = `<tr>
            <td><img src="${element.photo}" class="abc" alt="${element.name}'s Photo" width="100px" height="100px"></td>
            <td><img src="${element.signature}" alt="${element.name}'s Signature" width="100px" height="50px"></td>
            <td>${element.name}</td>
            <td>${element.department}</td>
            <td>${element.teacherId}</td>
            <td>${element.designation}</td>
            <td>${element.email}</td>
            <td>${element.mobile}</td>
            <td><button class="accept">Accept</button> <button class="reject">Reject</button></td>
          </tr>`;
          table.innerHTML += row;
        }
      });
      if(k==0){
        alert("Data not available!")
        document.getElementById("mainTable").style.display="none";
      }else{
        document.getElementById("mainTable").style.display = "block";
      }
   
    })
    .catch(error => {
      console.log(error);
      // handle error
    });
}