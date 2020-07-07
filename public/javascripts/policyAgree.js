const autoCheck = function(){
    const allagree = document.querySelector(".allAgree");
    
    if(allagree.checked){
        document.querySelector(".nesAgree").checked = true;
        document.querySelector(".adAgree").checked = true;
    }else{
        document.querySelector(".nesAgree").checked = false;
        document.querySelector(".adAgree").checked = false;
    }
}