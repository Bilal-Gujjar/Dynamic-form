var count = 0
function addNewForm() {
    count += 1
    html = `  
                <form  id ="fn`+ count + `" >
                <h1> Car`+ count + ` </h1>
                <label> Car Name</label>
                <input id = "name`+ count + `"   type="text" name="name" placeholder="CarName">
                <label> Car Model</label>
                <input id = "email`+ count + `"   type="text" name="email" placeholder="Model">
                <label> Car Price</label>
                <input id = "phone`+ count + `"   type="text" name="phone" placeholder="Year">
                <label> Car Milage</label>
                <input id = "address`+ count + `"   type="text" name="address" placeholder="Mileage">
                <input id = "delete`+ count + `"   type="button" value="Delete" onclick="removeNewField()">
                </form>
        `
    var form = document.getElementById('car-form')
    form.innerHTML += html
    console.log(form);
    console.log(count);
}
var yy = document.getElementById("car-form");
console.log(yy);
//Remove the form field dynamically 
function removeNewField() {
    var form = document.getElementById('car-form')
    form.removeChild(document.getElementById('fn' + count))
    count -= 1
    console.log(form);
    console.log(count);
}
var data = []
function submit() {
    for (var i = 1; i <= count; i++) {
        var name = document.getElementById('name' + i).value
        if (name == "") {
            alert("name is empty no " + i);
            return false
        }
        var email = document.getElementById('email' + i).value
        if (email == "") {
            alert("Please enter email" )
            return false
        }
        var phone = document.getElementById('phone' + i).value
        if (phone == "") {
            alert("Please enter phone")
            return false
        }
        var address = document.getElementById('address' + i).value
        if (address == "") {
            alert("Please enter address")
            return false
        }
        var obj = { name, email, phone, address }
        data.push(obj)
        if (name, email, phone, address == false) {

        }
        localStorage.setItem("MultiFormData", JSON.stringify(data));

    }


}

//onsubmit prevent default
document.querySelector("#ck").addEventListener("click", (e) => {
    e.preventDefault();

}, false);
