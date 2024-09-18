function ayushi(){
    let name=document.getElementById("name").value
    let contact=document.getElementById("contact").value
   
    let email=document.getElementById("email").value
   

    if(name==""){
        alert("plese fill all the detail")
        document.getElementById("name").focus()
        return false;

    }

    else if(contact==""){
        alert("plese fill all the detail")
        document.getElementById("contact").focus()
        return false;
    }
    else if(email==""){
        alert("plese fill all the detail")
        document.getElementById("email").focus()
        return false;
    }

    else if(contact.length<10|| contact.length>10){
        alert("digit check")
    return false;}


    else if(isNaN(contact)){
        alert("enter valid contact input")
        document.getElementById("contact").focus()
        return flase;

    }
    else if(!(email.includes('@'))){
        alert("enter valid email input")
        document.getElementById("email").focus()
        return flase;
    }
} 

// for dark mode
function ayu(){
    document.body.classList.toggle('dark')
}
// for qr generator
$(document).ready(function() {
    $('#generate-btn').click(function() {
        const text = $('#text-input').val();
        $('#qrcode').empty(); // Clear previous QR code
        if (text) {
            $('#qrcode').qrcode(text);
        } else {
            alert("Please enter a valid text or URL.");
        }
    });
});
