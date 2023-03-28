$(document).ready(function() {
    $('#employeeForm').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "submit_employee.php", // Replace with the URL to submit the form data
        data: $(this).serialize(),
        success: function(response) {
          alert(response); 
        },
        error: function(xhr, ajaxOptions, thrownError) {
          alert(xhr.status);
          alert(thrownError);
        }
      });
    });
  });
  