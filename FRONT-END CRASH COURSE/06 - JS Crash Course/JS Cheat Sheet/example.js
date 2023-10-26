//FORM SCRIPT
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit); //submit edince onSubmit fonk çalışır

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value ===''){ //name ve email intputu boş ise
        msg.classList.add('error');//cssteki error classının stilini verdik
        msg.innerHTML = 'Please enter all fields'; //msg classından bir mesaj verdik
        setTimeout(() => msg.remove(), 3000); //mesajı 3saniye sonra göstermeyi bırak
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); //appendChild içine bir şey ekliyor
        userList.appendChild(li); //userList adlı ul e li yi ekliyoruz
        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}