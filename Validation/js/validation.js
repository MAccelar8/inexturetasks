// document.getElementById('exampleInputFile').addEventListener('change', handleFileSelect, false);

// function handleFileSelect(event){
//     console.log("FileName: " + document.getElementById('exampleInputFile').value);
//     const reader = new FileReader();
//     reader.onload = handleFileLoad;
//     reader.readAsText(event.target.files[0])
//   }

//   function handleFileLoad(event){
//     console.log("Information::\n")
//     console.log(event.target);
//     // document.getElementById('info-file').textContent = event.target.result;
//   }

function getFileData(fileObject){
    console.log(fileObject.value);
    var fileInfo;
    fileInfo = "Name : " + fileObject.files[0].name + " File-Extension : \n" + fileObject.files[0].type.split('/',)[1] + " Size : " + fileObject.files[0].size + " KB";
    document.getElementById("custom-file-label-id").textContent = fileInfo;
}


function validateEmail(EmailObject){
   var emailText = EmailObject.value.split('@',)
   emailError = '';
//    console.log(emailText[0])
//    console.log(emailText[1].split('.',)[0])
//    console.log(emailText[1].split('.',)[1])
//    console.log(emailText[0])
    if(emailText[0].length<3){
        
        emailError+="Too Short Username\n";
    }

    if(emailText[1].split('.',)[0].length<3){
        
        emailError+="Too Short SLD name\n";
    }
    if(emailText[1].split('.',)[1].length<2){
        
        emailError+="Too Short TLD name\n";
    }

    console.log("error: "+emailError)
    if(emailError==''){
        alert("valid")
    }else{
        alert(emailError);
    }
}
function validateForm() {
  var address, password;
  address = document.getElementById("inputAddress").value;
  let addresswithoutspaces = address.replace(/\s/g, "");
  if (addresswithoutspaces.length >= 10 && addresswithoutspaces.length < 201) {
    // alert("valid")
  } else {
    // alert("Not Valid")
  }

  password = document.getElementById("inputPassword").value;

  var lower = 0,
    capital = 0,
    special = 0,
    integr = 0;
  var errorMessage = '';
  specialarray = ["$", "@"];

  if (password.length >= 8 && password.length < 14) {
    for (var i = 0; i < password.length; i++) {
      if (password[i] >= "A" && password[i] <= "Z") {
          capital++;
        // capital = capital + password[i];
        // alert("Capital");
      } else if (password[i] >= "a" && password[i] <= "z") {
          lower++;
        // lower = lower + password[i];
        //   alert("Lower");
      } else if (!isNaN(password[i])) {
          integr++;
        // integr = integr + password[i];
        // alert("Integer");
      } else if (specialarray.includes(password[i])) {
          special++;
        // special = special + password[i];
        // alert("Special")
      } else {
        errorMessage += "Password contains not a valid Character"
      }
    }

    if(!(special>=1)){
       errorMessage += "Password must contain atleast one Special Character\n";
    }
    if(!(capital>=1)){
        errorMessage += "Password must contain atleast one Capital Character\n";
    }
    if(!(lower>=1)){
        errorMessage += "Password must contain atleast one Lower Character\n";
    }
    if(!(integr>=1)){
        errorMessage += "Password must contain atleast one Integer\n";
    }

    if(errorMessage==''){
        // alert("valid")
    }else{
        // alert(errorMessage);
    }
  }else{
    //   alert("Invalid Length");
  }


}



