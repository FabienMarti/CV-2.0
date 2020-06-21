$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});
//Change la flèche de sens au besoin
function changeArrow(i){
    if(i.classList.contains('fa-arrow-left')){
        i.setAttribute('class', 'fa-arrow-right');
    }else{
        i.setAttribute('class', 'fa-arrow-left');
    }
}