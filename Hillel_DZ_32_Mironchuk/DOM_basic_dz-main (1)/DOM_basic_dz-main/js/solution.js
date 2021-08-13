    let elements = document.querySelectorAll('#ulId > ul');
    let svoistva = document.querySelector(`#ulId`).attributes
    let attributesValueArray = [];
    let attributesNamesArray = [];
    for(svoistvo of svoistva){
        attributesValueArray.push(svoistvo.value);
        attributesNamesArray.push(svoistvo)
    }
    document.querySelector(`#` + attributesValueArray[0]).lastElementChild.innerHTML = `Hello World, Im Lot`
    document.querySelector(`#` + attributesValueArray[0]).firstElementChild.setAttribute(`data-my-name`, `Lot`)
    document.querySelector(`#` + attributesValueArray[0]).removeAttribute(`data-dog-tail`)


    //Task 2
    let array2 = [ 1 , 2 , 3 , 4 , 5 , [ 1.1 , 1.2 , 1.3 , 1.4 , 1.5 , [ 2.1 , 2.2 , 2.3 , 2.4 , 2.5 , [ 3.1 , 3.2 , 3.3 , 3.4 , 3.5 , [ 4.1 , 4.2 , 4.3 , 4.4 , 4.5 , [ 5.1 , 5.2 , 5.3 , 5.4 , 5.5 , [ 6.1 , 6.2 , 6.3 , 6.4 , 6.5]]]]]]];
    (function generateList(arr){
        let i = 0 ;
        function recurcion(arr){
                document.write(`<ul>`)
            for(let element of arr){
                if (Array.isArray(element) === true){
                    i++;
                    return recurcion(element)
                }
                else document.write(`<li>`+element+`</li>`)
               
            }
        }
        recurcion(arr)
        for (let n = 0 ; n<= i; n++){
            document.write(`</ul>`)
        }
    })(array2)

    //Task 3
function veryUsefulTable(){
    document.write(`<table border="4"><tr>`)
    for(let i = 1 ; i <= 100 ; i++ ){
        document.write(`<td> ${i} </td`);
        if( i % 10 == 0 ){
            document.write(`</tr><tr>`)
        }
    }
    document.write(`</tr></table>`)

    return console.log(`;)`)
};
veryUsefulTable()