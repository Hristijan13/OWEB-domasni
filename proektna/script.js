function like(index) {
  var likesSpan = document.getElementById("likes-" + index);
  var currentLikes = parseInt(likesSpan.innerHTML);
  likesSpan.innerHTML = currentLikes + 1;
}

function dislike(index) {
  var dislikesSpan = document.getElementById("dislikes-" + index);
  var currentDislikes = parseInt(dislikesSpan.innerHTML);
  dislikesSpan.innerHTML = currentDislikes + 1;
}

function addComment(index) {
  var commentInput = document.getElementById("comment-input-" + index);
  var commentsList = document.getElementById("comments-list-" + index);
  var newCommentText = commentInput.value;

  if (newCommentText !== "") {
    var newComment = document.createElement("p");
    newComment.setAttribute("class", "comment");
    newComment.innerHTML = newCommentText;
    commentsList.appendChild(newComment);
    commentInput.value = "";
  }
}

window.onload = function () {
  var surveyForm = document.getElementById("survey-form");

  if (surveyForm) {
    surveyForm.onsubmit = function (event) {
      event.preventDefault();

      var name = document.getElementById("visitor-name").value;
      var feedback = document.getElementById("feedback").value;

      var rating = "";
      var ratingOptions = document.getElementsByName("rating");
      for (var i = 0; i < ratingOptions.length; i++) {
        if (ratingOptions[i].checked) {
          rating = ratingOptions[i].value;
          break;
        }
      }

      var message =
        "Ви благодариме за повратните информации, " + name + "!\n\n";
      message += "Ја оценивте вашата посета како: " + rating + "\n";
      message += "Вашите импресии: " + feedback;

      alert(message);

      var resultsDiv = document.getElementById("survey-results");
      resultsDiv.innerHTML =
        "<h2>Ви благодариме!</h2><p>Вашата анкета е успешно испратена.</p>";
    };
  }

  const loggedInUser = localStorage.getItem("loggedInUsername");
  console.log(loggedInUser);
  if (loggedInUser) {
    const header = document.querySelector(".site-header");
    const title = header.querySelector(".logo");
    title.innerText = `Добредојде, ${loggedInUser}!`;
    const headerButtons = header.querySelectorAll("a");
    const loginButton = headerButtons[4];
    loginButton.href = "#";
    loginButton.innerText = `Одјави се`;
    loginButton.addEventListener("click", function () {
      localStorage.removeItem("loggedInUsername");
      window.location.reload();
    });
  }
};
