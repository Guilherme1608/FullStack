$(document).ready(function () {
  // Initialize tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Example of dynamically loading content into the modal
  $("#exampleModal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var recipient = button.data("whatever"); // Extract info from data-* attributes

    var modal = $(this);
    modal.find(".modal-title").text("New Order for " + recipient);
    modal.find(".modal-body input").val(recipient);
  });

  // Add a button click event
  $(".btn-primary").on("click", function () {
    alert("Button clicked!");
  });
});
