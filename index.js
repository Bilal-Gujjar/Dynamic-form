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
                <input id = "deleted`+ count + `"   type="button" value="Delete" onclick="removeNewField(event)">
                </form>
        `
    var form = document.getElementById('car-form')
    form.innerHTML += html
   // console.log(form);
    //console.log(count);
}
var yy = document.getElementById("car-form");
console.log(yy);
//onclick function to remove form field 
function removeNewField() {
    var id = event.target.id
    console.log(id)
    var id = id.substring(7, id.length)
    console.log(id);
    var form = document.getElementById('fn' + id)
    form.remove()
}
//onclick function to remove form field
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
// document.querySelector("#ck").addEventListener("click", (e) => {
//     e.preventDefault();

// }, false);

//Remove the form field dynamically by using Id number
