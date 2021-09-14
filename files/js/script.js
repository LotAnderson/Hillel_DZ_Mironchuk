let results = {
    email : undefined ,
    firstName : undefined ,
    lastName : undefined , 
    nickName : undefined ,
    password : undefined ,
    option  : undefined ,
    message : undefined ,
    confirm  : undefined ,
    file : undefined
}
let links = {
    email : document.getElementById(`email`) ,
    firstName : document.getElementById(`firstName`) ,
    lastName : document.getElementById(`lastName`) , 
    nickName : document.getElementById(`nickName`) ,
    password : document.getElementById(`password`) ,
    option  : document.getElementById(`option`) ,
    message : document.getElementById(`message`) ,
    file : document.getElementById(`file`) ,
    confirm  : document.getElementById(`confirm`) , 
    button : document.getElementById(`button`)
}
console.log(links.message)
console.log(form.email);
form.button.addEventListener(`click`,(event) => {
    event.preventDefault();
    results.email = links.email.value ;
    results.firstName = links.firstName.value ;
    results.lastName = links.lastName.value ;
    results.nickName = links.nickName.value ;
    results.password = links.password.value ;
    results.option = links.option.value ;
    results.message = links.message.value ;
    results.confirm = links.confirm.checked ;
    results.file = links.file.value ; 
    localStorage.setItem("requiredDataToBuildTheList", JSON.stringify(results));
    setTimeout(function(){
        location = 'file:///C:/Users/Admin/Desktop/Hillel_DZ_Mironchuk/files/list.html';
       }, 1);
    console.log(results)
    return true
})