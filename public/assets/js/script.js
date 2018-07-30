$(document).ready(function() {
    
    $(".devour").on("click", function(event) {
      event.preventDefault();
  
      var burger_id = $(this).children(".burger_id").val();
      $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
  
    });

    $("#create").on("click", function(event) {
      event.preventDefault();
      console.log("create..");
      var newBurger = {
        burger_name: $(".newBurger").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/burgers/create", {
        method: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("added new burger");
          location.reload();
        }
      );
    });












  });
  