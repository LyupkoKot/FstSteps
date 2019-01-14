function showContent(evt, linkName){
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i=0;i<tabContent.length;i++){
        tabContent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " active";


}