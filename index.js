var count = 0
function addNewForm() {
    count += 1
    html = `  
                <form  id ="fn`+ count + `" >
                <h1> Car`+ count + ` </h1>
                <label> Car Name</label>
                <input id = "name`+ count + `"   type="text" name="name" placeholder="CarName">
                <span id = "ns`+count+`"></span>
                <label> Car Model</label>
                <input id = "email`+ count + `"   type="text" name="email" placeholder="Model">
                <span id = "ms`+count+`"></span>
                <label> Car Price</label>
                <input id = "phone`+ count + `"   type="text" name="phone" placeholder="Year">
                <span id = "ys`+count+`"></span>
                <label> Car Milage</label>
                <input id = "address`+ count + `"   type="text" name="address" placeholder="Mileage">
                <span id = "ts`+count+`"></span>
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

var data = []



function valid() {
    //dynamic form validation and error message in span tag
    for (var i = 1; i <= count; i++) {
        var name = document.getElementById('name' + i).value
        var email = document.getElementById('email' + i).value
        var phone = document.getElementById('phone' + i).value
        var address = document.getElementById('address' + i).value
        var name_error = document.getElementById('ns' + i)
        var email_error = document.getElementById('ms' + i)
        var phone_error = document.getElementById('ys' + i)
        var address_error = document.getElementById('ts' + i)
        if (name == "") {
            name_error.innerHTML = "****Car Name is required****"
        } else {
            name_error.innerHTML = ""
        }
        if (email == "") {
            email_error.innerHTML = "***Model is missing****"
        } else {
            email_error.innerHTML = ""
        }
        if (phone == "") {
            phone_error.innerHTML = "****Phone is required****"

        } else {
            phone_error.innerHTML = ""
        }
        if (address == "") {
            address_error.innerHTML = "****Address is required****"
        } else {
            address_error.innerHTML = ""
        }
    }
    if (name == "" || email == "" || phone == "" || address == "") {
        return false
    } else {
        return true
    }
}





function submit() {
    if (valid() == true) {
        for (var i = 1; i <= count; i++) {
            var name = document.getElementById('name' + i).value
            var email = document.getElementById('email' + i).value
            var phone = document.getElementById('phone' + i).value
            var address = document.getElementById('address' + i).value
            var obj = { name, email, phone, address }
            data.push(obj)
        }
        localStorage.setItem("MultiFormData", JSON.stringify(data));
        alert("Data Saved")
        
    }
    

}



//after all validation before submit
