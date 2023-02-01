
function changeTheme() {

    var themeCheckBox=document.getElementById("theme");
    var formContainer=document.getElementById("form-container");

    if(themeCheckBox.checked) {
        formContainer.className="dark-theme";
        document.querySelector("button").className="light-theme";
    }
    else{
        formContainer.className="light-theme";
        document.querySelector("button").className="dark-theme";
    }

}
