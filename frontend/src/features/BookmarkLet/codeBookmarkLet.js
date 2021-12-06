javascript: (function () {
  var title = document.title;
  var bodyTag = document.getElementsByTagName("body")[0];
  var url = window.location.href;

  const renderHtml = (title) => {
    var dialogHtml = `<dialog>
    <input id="titleBookmark" type="text" value="${title}">
    <br>    <br>
    <select id="categoryBookmark" name="category"></select>
    <br>    <br>
    <button type="button" id="submitBookmark">Submit</button>
    <button type="button" id="cancelBookmark">Cancel</button>
    </dialog>`;
    bodyTag.innerHTML += dialogHtml;
  };

  renderHtml(title);
  const addOptionSelect = (name, id) => {
    var html = `<option ${
      id === 1 ? "selected" : ""
    } value="${id}">${name}</option>`;
    document.getElementById("categoryBookmark").innerHTML += html;
  };
  document.getElementById("categoryBookmark").innerHTML = "";
  const getCategory = () => {
    fetch("http://localhost:8000/api/v1/category/")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          addOptionSelect(item.categoryName, item.id);
        });
      });
  };
  getCategory();
  var dialogTag = document.getElementsByTagName("dialog")[0];
  const closeDialog = () => {
    dialogTag.close();
    dialogTag.remove();
  };
  const postBookmark = (data) => {
    fetch("http://localhost:8000/api/v1/bookmark/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        closeDialog();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  function handleSubmit() {
    var valueInput = document.getElementById("titleBookmark").value;
    var valueSelect = document.getElementById("categoryBookmark").value;
    if (!valueInput) {
      valueInput = title;
    }
    var data = {
      title: valueInput,
      url: url,
      category: valueSelect,
    };
    postBookmark(data);
  }
  var btnSub = document.getElementById("submitBookmark");
  var btnCan = document.getElementById("cancelBookmark");
  btnSub.addEventListener("click", handleSubmit);
  btnCan.addEventListener("click", closeDialog);

  dialogTag.showModal();
})();
