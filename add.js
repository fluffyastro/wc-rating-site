const x = document.getElementById("x")
const y = document.getElementById("y")
const namee = document.getElementById("name")
const title = document.getElementById("title")
const desc = document.getElementById("desc")
const submit = document.getElementById("submit")

let list = []

submit.addEventListener("click", function (params) {
    let list_temp = []
    list_temp[0] = x.value
    list_temp[1] = y.value
    list_temp[2] = namee.value
    if (title.value == "") {
        list_temp[3] = "Majd a régi itt lesz"
        
    }

})
