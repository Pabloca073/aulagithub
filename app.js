'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme')
    
    var className = document.body.className;
    if(className == "light-theme"){
        this.extContent = "Dark";
    }else{
        this.textContent = "Light";
    }
    console.log('current classe name: ' + className);
});