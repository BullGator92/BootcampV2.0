// Initialize Firebase



var config = {
  apiKey: "AIzaSyDrByFzhj9Ak_lZ54uoZEGTcTWKmsWw5LQ",
  authDomain: "project-1-calendar-52aaa.firebaseapp.com",
  databaseURL: "https://project-1-calendar-52aaa.firebaseio.com",
  projectId: "project-1-calendar-52aaa",
  storageBucket: "project-1-calendar-52aaa.appspot.com",
  messagingSenderId: "237185498286"
};
firebase.initializeApp(config);
var database = firebase.database();

$(".submit-btn").on("click", function () {
  event.preventDefault();
  var saveTitle = $("#save-title").val();
  var saveURL = $("#save-url").val();
  console.log(saveTitle);
  console.log(saveURL);


  var newPage = {
    saveTitle: saveTitle,
    saveURL: saveURL,
  };

  database.ref().push(newPage);


  $("#save-title").val("");
  $("#save-url").val("");

})

database.ref().on("child_added", function (childSnapshot) {
  // console.log(childSnapshot.val());
console.log(childSnapshot)
console.log(childSnapshot.key)
  var saveTitle = childSnapshot.val().saveTitle;
  var saveURL = childSnapshot.val().saveURL;

  var newRow = $("<tr>").append(
    $("<td>").html(`<a href="${saveURL}">${saveTitle}</a>`),
    $("<td>").html(`<a class="btn-floating waves-effect delete-btn waves-light btn-small red">
            <i class="material-icons" >remove</i>
        </a>`),
  );

  newRow.attr("id", childSnapshot.key)

  $(".tableSaves > tbody").append(newRow);
});

$("tbody").on('click', '.delete-btn', function () {
  var delRow = $(this).closest("tr").attr("id")
  console.log(delRow)
  database.ref().child(delRow).remove()
  location.reload();
  
    
});
// database.ref().on("value", function (childSnapshot) {
//   console.log("on the right track")
//   });






