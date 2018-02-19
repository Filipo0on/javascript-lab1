



function check_info() {

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let street = document.getElementById("street").value;
    let zipcode = document.getElementById("zipcode").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;
    let mailformat = /^([A-Za-z0-9_.\-]){1,200}@([A-Za-z0-9_.\-]){1,200}\.([A-Za-z]){2,6}$/;
    let numberformat = /^([0-9]){4,30}$/;

    if (firstname==="" || lastname==="" || street==="" || numberformat.test(zipcode) === false || city==="" || mailformat.test(email) === false) {

        alert("Please fill in the required fields correct");
        return false;
    }
else {

        return true;
    }


}



