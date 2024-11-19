let age = document.querySelector("#age");
let btn = document.querySelector("#btnAge")

btn.addEventListener("click", ()=>{
    //coersion esplicita
    let ageNumber = Number(age.value);
    console.log(typeof ageNumber);
})


 let rubrica = {
    'contatti' : [
    {
        'nome' : 'Marco',
        'telefono' : 321412421,
    },
    {
        'nome' : 'Anna',
        'telefono' : 34153151,
    },
    {
        'nome' : 'Giampietro',
        'telefono' : 34565463,
    }
],
    'totContacts': function(){
        tot.innerHTML = this.contatti.length;
    },
    // resete del corpo della tabella
    tBody.innerHTML = "",
    'addContact': function(nameContact, phoneNumber){
        this.contatti.push({
            'nome' : 'Marco',
            'telefono' : 321412421,
            })
        }
    
 }

//un callback è una funzione passata come parametero
let tBody = document.querySelector('tbody');
let tot = document.querySelector("#tot");
let btnShow = document.querySelector("#btnShow");
let table = document.querySelector(".table");
let isHidden = false;


rubrica.contacts.forEach((contact) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <th scope="row">${contact.nome}</th>
    <td>${contact.telefono}
    
    </td>
    `
    tBody.appendChild(tr);
});

rubrica.totContacts();

btnShow.addEventListener("click", ()=>{
    if (!isHidden) {
        table.classList.add("d-none");
        btnShow.innerHTML = `Mostra <i class="bi bi-eye-fill"></i>`
        isHidden = true;
    }else{
        table.classList.remove("d-none");
        btnShow.innerHTML = `Nascondi <i class="bi bi-eye-slash-fill"></i>`
        isHidden = false;
    }})
    
    
    let inputName = document.querySelector("#inputName");
    let inputNumber = document.querySelector("#inputNumber")
    let btnAdd = document.querySelector("#btnAdd");

