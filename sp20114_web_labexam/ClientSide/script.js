// =====SCRIPT USING JQuery=====

$(function () {
  AjaxGetRequest();
   handleDelete();
  $("#postBtn").click(handlePost);
  // For Update request
  $("#tBody").on("click", ".updateHandler", handleUpdate);

  $("#updateBtn").click(function () {
    var id = $("#idInput").val();
    var title = $("#titleInput").val();
    var body = $("#bodyInput").val();
    $.ajax({
      url: "http://127.0.0.1:4000/api/doctors" + id,
      data: {
        title,
        body,
      },
      method: "PUT",
      success: (response) => {
        console.log("update successful", response);
        AjaxGetRequest();
      },
    });
  });
});

function handleUpdate() {
  let editBtn = $(this);
  let parent = editBtn.closest(".oneRecipe");
  let upid = parent.attr("data-btn");
  console.log(upid);
  $.get("http://127.0.0.1:4000/api/doctors" + upid, function (response) {
    $("#idInput").val(response._id);
    $("#titleInput").val(response.title);
    $("#bodyInput").val(response.body);
  });

  console.log("update Successfully");
}



// Ajax is a genralize form of all methods

function AjaxGetRequest() {
  $.ajax({
    url: "http://127.0.0.1:4000/api/doctors",
    method: "GET",
    success: getFromApi,
  });
}

function handleDelete() {
  $("#tablBody").on("click", ".deleteBtn", handledel);
}

function handledel() {
  var btn = $(this);
  var parentDiv = btn.closest(".oneRecipe");
  var id = parentDiv.attr("data-btn");
  console.log(id);
  $.ajax({
    url: "http://127.0.0.1:4000/api/doctors" + id,
    method: "DELETE",
    success: function () {
      AjaxGetRequest();
    },
    error: function (response) {
      console.log(response);
    },
  });

  console.log("deleted successfully");
}

function handlePost() {
  var title = $("#titleInput").val();
  var body = $("#bodyInput").val();
  console.log(title, body);

  $.ajax({
    url: "http://127.0.0.1:4000/api/doctors",
    method: "POST",
    data: {
      title: title,
      body: body,
    },
    success: function () {
      AjaxGetRequest();
      console.log("post request successfull");
    },
    error: (e) => {
      console.log(`An error occured: ${e}`);
    },
  });
}

function getFromApi(response) {
//   console.log(response);
  $("#tablBody").empty();
  for (let i = 0; i < response.length; i++) {
    var res = response[i];
    $("#tablBody")
      .append(`<tr data-btn = ${res._id}>

              <th scope="row">1</th>
              <th scope="row">
                ${response[i].name}
              </th>
              <td>${response[i].speciality}</td>
              <td>${response[i].hospital}</td>
              <td>
                <a class="btn btn-warning " id="psotBtn">Edit</a>
                <a class="btn btn-danger deleteBtn">Delete</a>
              </td>

              
              
            </tr>`);
  }
}
