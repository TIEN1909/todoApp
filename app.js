const push = document.querySelector(".app__btn");
push.onclick = function () {
  if (document.querySelector("#app__add .app__input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#posts").innerHTML += `
                <li class="post">
                    <input type="checkbox" id="task-1">
                    <label for="task-1" id="post__name">${
                      document.querySelector("#app__add .app__input").value
                    }</label>
                    <button class="post__delete">
                    x
                </button>
                </li>
                
        `;

    var current_tasks = document.querySelectorAll(".post__delete");
    for (var i = 0; i < current_tasks.length; i++) {
      //   console.log("id", i);
      current_tasks[i].onclick = function () {
        // loại bỏ phần tử cha khi nhấn vào nut post__delete
        this.parentNode.remove();
      };
    }
  }

  //   xử lý sự kiện mỗi khi hoàn thành
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // lặp qua các checkbox và thêm sự kiện click vào mỗi checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", function () {
      // tìm phần tử li chứa checkbox đó
      const listItem = checkbox.parentElement;
      // kiểm tra checkbox đã được chọn hay chưa
      if (checkbox.checked) {
        // nếu đã được chọn, thêm lớp CSS để đánh dấu chức năng đã hoàn thành
        listItem.classList.add("completed");
      } else {
        // nếu chưa được chọn, xóa lớp CSS để loại bỏ đánh dấu đã hoàn thành
        listItem.classList.remove("completed");
      }
    });
  });
};
