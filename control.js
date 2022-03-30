let i = 0
document.getElementById("dd-btn").addEventListener("click", function () {
    document.getElementById("nav-dropdown").style.display = "flex"
    i = 2
})
document.getElementById("dd-btn").addEventListener("mouseover", function () {
    if (i == 0) {
        document.getElementById("nav-dropdown").style.display = "flex"
        i = 1
    }
})
document.getElementById("nav-dropdown").addEventListener("mouseover", function () {
    document.getElementById("nav-dropdown").style.display = "flex"
})
document.getElementById("dd-btn").addEventListener("mouseout", function () {
    if (i == 1) {
        document.getElementById("nav-dropdown").style.display = "none"
        i = 0
    }
})
window.onclick = function (event) {
    if (!event.target.matches('#dd-btn')) {
        document.getElementById("nav-dropdown").style.display = "none"
        i = 0
    }
}
var len = (document.getElementsByClassName("correct").length)
document.getElementById("submit").addEventListener("click", function () {
    var score = 0
    for (var k = 0; k < len; k++) {
        document.getElementsByClassName("correct")[k].parentNode.classList.add("green")
        if (document.getElementsByClassName("correct")[k].checked) {
            score = score + 1
        }
    }
    for (var j = 0; j < len2; j++) {
        if ((document.getElementsByClassName("option")[j].checked) && (document.getElementsByClassName("option")[j].parentNode.classList.contains("green") == false)) {
            document.getElementsByClassName("option")[j].parentNode.classList.add("red")
        }
    }
    var score_string1 = "score: "
    var total_score = len * 10
    var slash = "/"
    document.getElementById("score").children[0].innerText = score_string1 + (score * 10) + slash + total_score
    document.getElementById("reset").innerText = "play again"
    document.getElementById("submit").style.display = "none"
    document.getElementById("score").style.display = "block"
})
var len2 = document.getElementsByClassName("option").length
function reset() {
    console.log(document.getElementsByClassName("option"))
    for (j = 0; j < len2; j++) {
        document.getElementsByClassName("option")[j].checked = false
        document.getElementsByClassName("option")[j].parentNode.classList.remove("red")
    }
    document.getElementById("score").style.display = "none"
    document.getElementById("submit").style.display = "block"
    document.getElementById("reset").innerText = "reset"
    for (k = 0; k < len; k++) {
        document.getElementsByClassName("correct")[k].parentNode.classList.remove("green")
    }
}
window.onload = reset()
document.getElementById("reset").addEventListener("click", reset)
