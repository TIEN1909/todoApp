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
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("click", function () {
        const listItem = checkbox.parentElement;
        if (checkbox.checked) {
          listItem.classList.add("completed");

          document.querySelector("#completed").innerHTML += `
                <li class="post">
                    <input type="checkbox" id="task-1" checked>
                    <label for="task-1" id="post__name">${
                      document.querySelector("#app__add .app__input").value
                    }</label>
                    <button class="post__delete">x</button>
                </li>
        `;
          var current_tasks = document.querySelectorAll(".post__delete");
          for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
              this.parentNode.remove();
            };
          }
        } else {
          listItem.classList.remove("completed");
        }
      });
    });
  }
};
// ---------------------------
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
