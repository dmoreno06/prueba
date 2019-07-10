require('../css/normalize.css');
require('../css/responseive.css');
require('../css/style.css');

AOS.init();
document.getElementById("idBtnEnviar").addEventListener("click",function(){
    let strName =document.getElementById('name').value;
    let strEmail =document.getElementById('email').value;
    let strSubject =document.getElementById('subject').value;
    let strMessage =document.getElementById('message').value;

    if(strName != "" && strEmail != "" && strSubject != "" && strMessage != ""){
        let datos ={
            n: strName,
            e: strEmail,
            s: strSubject,
            m: strMessage
        };

        axios.post('/api/contacto',datos)
            .then(function(response){
               document.getElementById('name').value=""; 
               document.getElementById('email').value="";
               document.getElementById('subject').value="";
               document.getElementById('message').value="";
               alert("Gracias por esctibirno, en breve te contactaremos.")
            }).catch(function(err){
                console.log(err);
            });
    }else{
        alert("Por favor rellenar todos los campos");
    }
});