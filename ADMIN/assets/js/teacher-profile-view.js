  // Retrieve the delete button element
  const deleteTeacherBtn = document.getElementById('deleteTeacherBtn');

  // Add a click event listener
  deleteTeacherBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Here you can write the code to handle the deletion
    // For example, you could display a confirmation dialog
    const confirmation = confirm("Are you sure you want to delete this teacher?");

    if (confirmation) {
      // If the user confirms, you can perform the deletion logic
      deleteTeacher();
    }
  });

  // Function to handle the deletion
  function deleteTeacher() {
    // Implement the logic to delete the teacher here
    // You can make an API request, update the database, or perform any necessary actions
    // For this example, we'll simply log a message to the console
    console.log('Teacher deleted successfully!');
  }

