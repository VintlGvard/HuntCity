var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];
var submitBtn = document.getElementById("submit");
var message = document.getElementById("message");
var fioInput = document.getElementById("fio");
var emailInput = document.getElementById("email");
var questionInput = document.getElementById("question");
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
submitBtn.onclick = function() {
    message.textContent = "Сообщение было отправлено!";
            fioInput.value = "";
    emailInput.value = "";
    questionInput.value = "";
}