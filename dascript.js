

function validateFields() {
    //var errorMsg = "";
    //var corrMsg = "Thank you for your contribution!";
    var a = document.forms["checkoutForm"]["fname"].value;
    let b = document.forms["checkoutForm"]["lname"].value;
    let c = document.forms["checkoutForm"]["email"].value;
    
    if (a == "" || a == null) {
        alert("First name must be filled");
        //errorMsg = errorMsg + "First name must be filled <br>";
        return false;
    }
    if (b == "" || b == null) {
        alert("Last name must be filled");
        //errorMsg = errorMsg + "Last name must be filled <br>";
        return false;
    }
    if (c == "" || c == null) {
        alert("Email must be filled");
        //errorMsg = errorMsg + "Email must be filled <br>";
        return false;
    }
}