function save_to_storage() {
    var box = document.getElementById("rem");
    if (box.checked != true)
        return;
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
}

function load_from_storage() {
    document.getElementById("user").value = localStorage.getItem("user");
    document.getElementById("pass").value = localStorage.getItem("pass");
}

function _toggle() {
    var p = document.getElementById("pass");
    if (p.getAttribute("type") == "text") {
        p.setAttribute("type", "password");
        document.getElementById("show_btn").innerHTML = "show";
    } else {
        p.setAttribute("type", "text");
        document.getElementById("show_btn").innerHTML = "hide";
    }
}

function do_validate() {
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    if (pass.value.length <= 6) {
        $("#p_alert").hide();

        return false;
    }
    save_to_storage();
    return true;
}
