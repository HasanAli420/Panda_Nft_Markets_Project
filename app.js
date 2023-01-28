

document.getElementById("manuBar").addEventListener('click', function(){
    document.getElementById("sideBar").classList.add('active')
});

document.getElementById("closeSide").addEventListener('click', function(){
    document.getElementById("sideBar").classList.remove('active')
});