
//   var raw=`<tr>
//   <td><img src="/profile/rd.png" class="abc" alt="John Doe's Photo" width="100px" height="100px"></td>
//   <td><img src="/profile/rd.png" alt="John Doe's Signature" width="100px" height="50px"></td>
//   <td>Jane Doe</td>
//   <td>Bengali</td>
//   <td>92760</td>
//   <td>Asst.Teacher</td>
//   <td>jane.doe@email.com</td>
//   <td>987-654-3210</td>
//   <td><button class="accept">Accept</button> <button class="reject">Reject</button></td>
// </tr>`;
getNewApplicant()
var email=localStorage.getItem("email");
var token=localStorage.getItem("token"); 
function getNewApplicant() {
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
     
        console.log(data);
        
        
       
       
   
    })
    .catch(error => {
      console.log(error);
      // handle error
    });
}