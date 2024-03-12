function validation()
{
    let x = document.forms["form"]["us"].value
    if (x == ""){
        alert("fill the username field")
        return false
    }
}