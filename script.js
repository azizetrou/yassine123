function facebook() {
    window.open("https://www.facebook.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=400,height=500");
}
function twitter() {
    window.open("https://www.twitter.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=400,height=500");
}
function snapchat() {
    window.open("https://www.snapchat.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=400,height=500");
}
function youtube() {
    window.open("https://www.youtube.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=400,height=500");
}
function instagram() {
    window.open("https://www.instagram.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=400,height=500");
}
function menu() {
    var x = document.getElementById("menu1");
        x.style.position = "absolute";
        x.style.width = "100%";
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
}