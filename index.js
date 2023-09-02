function seterror(id,error){
     element=document.getElementById(id);
     element.getElementByclass("formerror")[0].innerHTML=error
}

function validateForm()   {
    // var returnval= true;
    var name= document.forms['myform']["first_name"].value;
    // if(name.length<5){
    //     seterror("name","length of name is too short");
    //     returnval= false;
    // }
    // return returnval;
    console.log(name);
    return false;
}