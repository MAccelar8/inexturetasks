function formValidate() {
  // console.log("Form Loaded");
  if (
    !validateFnRequired(document.getElementById("inputFirstName")) &&
    !validateLnRequired(document.getElementById("inputLastName")) &&
    !validateAddress(document.getElementById("inputAddress")) &&
    !validatePhoneNumber(document.getElementById("inputPhone")) &&
    !validateEmail(document.getElementById("exampleInputEmail")) &&
    !confirmPassword(document.getElementById("inputConfirmPassword"))
  ) {
    document.getElementById("submit-button").disabled = false;
    document.getElementById("submit-button").classList.remove("disabled");
  } else {
    document.getElementById("submit-button").disabled = true;
    document.getElementById("submit-button").classList.add("disabled");
  }
}

function validateFnRequired(requiredObject) {
  // console.log("alert Meesas")
  if (requiredObject.value == "") {
    document.getElementById("fn-required-alert").style.display = "block";
    document.getElementById("fn-required-alert").innerHTML =
      "This Field is required";
    // alert("Required Fiel")

    return 1;
  }

  for (i = 0; i < requiredObject.value.length; i++) {
    if (
      !((requiredObject.value[i] >= "A" && requiredObject.value[i] <= "Z") ||
      (requiredObject.value[i] >= "a" && requiredObject.value[i] <= "z"))
    ) {
      document.getElementById("fn-required-alert").style.display = "block";
      document.getElementById("fn-required-alert").innerHTML =
        "Firstname should'nt contain characters other than alphabets";
      return 1;
    }
  }

  document.getElementById("fn-required-alert").style.display = "none";
  return 0;

  // else if (

  // ) {
  //   document.getElementById("fn-required-alert").style.display = "block";
  //   document.getElementById("fn-required-alert").innerHTML =
  //     "Firstname should'nt contain spaces";
  //   // alert("Required Fiel")

  //   return 1;
  // } else {

  // }
}

function validateLnRequired(requiredObject) {
  if (requiredObject.value == "") {
    document.getElementById("ln-required-alert").style.display = "block";
    document.getElementById("ln-required-alert").innerHTML =
      "This Field is required";
    return 1;
  }

  for (i = 0; i < requiredObject.value.length; i++) {
    if (
      !((requiredObject.value[i] >= "A" && requiredObject.value[i] <= "Z") ||
      (requiredObject.value[i] >= "a" && requiredObject.value[i] <= "z"))
    ) {
      document.getElementById("ln-required-alert").style.display = "block";
      document.getElementById("ln-required-alert").innerHTML =
        "Lastname should'nt contain characters other than alphabets";
      return 1;
    }
  }

  document.getElementById("ln-required-alert").style.display = "none";
  return 0;

  // else if (requiredObject.value.includes(" ")) {
  //   document.getElementById("ln-required-alert").style.display = "block";
  //   document.getElementById("ln-required-alert").innerHTML =
  //     "Lastname should'nt contain spaces";
  //   return 1;
  // } else {
  //   document.getElementById("ln-required-alert").style.display = "none";
  //   return 0;
  // }
}

function validateAddress(addObject) {
  var address = addObject.value;
  var charCount = 0;

  for (var i = 0; i < address.length; i++) {
    if (address[i] != " ") {
      charCount++;
    }
  }

  if (charCount >= 10 && charCount < 201) {
    document.getElementById("address-alert").style.display = "none";
    return 0;
  } else {
    document.getElementById("address-alert").style.display = "block";
    document.getElementById("address-alert").innerHTML =
      "Enter characters in range 10 - 200";
    return 1;
  }
}

function getFileData(fileObject) {
  console.log(fileObject.value);
  var fileInfo;
  fileInfo =
    "Name : " +
    fileObject.files[0].name +
    " File-Extension : \n" +
    fileObject.files[0].type.split("/")[1] +
    " Size : " +
    fileObject.files[0].size +
    " KB";
  document.getElementById("custom-file-label-id").textContent = fileInfo;

  //   if (
  //     document.getElementById("custom-file-label-id").textContent ==
  //     "Select file..."
  //   ) {
  //     console.log("Hii");
  //   } else {
  //     console.log("Hello");
  //   }
}

function validatePhoneNumber(phnoObject) {
  // console.log(phnoObject.value);
  phno =  phnoObject.value.trim();
  phnoError = "";
  if (phno.length != 10) {
    // phnoError += "Phone Number must be of 10 digits\n";
    document.getElementById("phone-alert").style.display = "block";
    document.getElementById("phone-alert").innerHTML =
      "Phone Number must be of 10 digits";
    return 1;
  } else {
    for (var i = 0; i < phno.length; i++) {
      console.log(isNaN(phno[i]));
      if (isNaN(phno[i])) {
        // console.log(isNaN(phnoObject.value[i]));
        phnoError += "Please Enter only Digits";
        break;
      }
    }
  }

  if (phnoError == "") {
    document.getElementById("phone-alert").style.display = "none";
    return 0;
  } else {
    // alert(phnoError)
    document.getElementById("phone-alert").style.display = "block";
    document.getElementById("phone-alert").innerHTML = phnoError;
    return 1;
  }
}

function validateEmail(EmailObject) {
  var eval = EmailObject.value;

  var emailSpecial = ["@", ".", "-", "_"];

  for (var i = 0; i < eval.length; i++) {
    if (
      !(
        (eval[i] >= "A" && eval[i] <= "Z") ||
        (eval[i] >= "a" && eval[i] <= "z") ||
        emailSpecial.includes(eval[i])
      )
    ) {
      document.getElementById("email-alert").style.display = "block";
      document.getElementById("email-alert").innerHTML =
        "Please enter only valid characters [alphabets,@,.,numbers]";
      return 1;
    }
  }

  if (!EmailObject.value.includes("@")) {
    document.getElementById("email-alert").style.display = "block";
    document.getElementById("email-alert").innerHTML =
      "Invalid Email missing @";
    return 1;
  }
  var emailText = EmailObject.value.split("@");
  emailError = "";
  var period = ".";
  //    console.log(emailText[0])
  //    console.log(emailText[1].split('.',)[0])
  //    console.log(emailText[1].split('.',)[1])
  //    console.log(emailText[0])
  if (emailText[0].length < 3) {
    emailError += " Too Short Username ";
  }

  if (emailText[1].includes(".")) {
    console.log(" . is present");
    if (emailText[1].split(".")[0].length < 3) {
      emailError += " Too Short SLD name , must be greater than 3 chars ";
    }
    if (emailText[1].split(".")[1].length < 2) {
      emailError += " Too Short TLD name , must be greater than 2 chars";
    }
  } else {
    console.log(" . NOT");
    document.getElementById("email-alert").style.display = "block";
    document.getElementById("email-alert").innerHTML =
      "Please add a TLD followed by .";
    return 1;
  }

  //   console.log("error: " + emailError);
  if (emailError == "") {
    document.getElementById("email-alert").style.display = "none";
    return 0;
  } else {
    document.getElementById("email-alert").style.display = "block";
    document.getElementById("email-alert").innerHTML = emailError;
    return 1;
  }
}

function passwordfocus() {
  // console.log("focus")
  document.getElementById("password-alert").style.display = "block";
}

function confirmPassword(confPassObj) {
  
  var confirmPassword = confPassObj.value;
  // console.log(validatePassword(document.getElementById("inputPassword")));
  if (validatePassword(document.getElementById("inputPassword"))) {
    document.getElementById("confirm-password-alert").style.display = "block";
    document.getElementById("confirm-password-alert").innerHTML =
      "Please enter a valid Password First";
    return 1;
  } else {
    if (document.getElementById("inputPassword").value == confPassObj.value) {
      document.getElementById("confirm-password-alert").style.display = "none";
      return 0;
    } else {
      document.getElementById("confirm-password-alert").style.display = "block";
      document.getElementById("confirm-password-alert").innerHTML =
        "Passwords do not Match";
      return 1;
    }
  }
}

function validatePassword(passObj) {
  // var temp = document.getElementById("inputPassword").value;
  // console.log(temp)
  // // console.log("Pass")
  // console.log(passObj.value);

  console.log("key pressed");

  password = passObj.value;

  var lower = 0,
    capital = 0,
    special = 0,
    integr = 0,
    passToggler = 0;
  var errorMessage = "The Password must contain";
  specialarray = ["$", "@"];
  //   console.log(password + " : " + password.length);
  //   if(!(password.length >= 8 && password.length < 14)){
  //     //   console.log("INvalid Pass Length");
  //     document.getElementById("password-alert").style.display = "block";
  //     document.getElementById("password-alert").innerHTML =  "The Password must be between 8 to 14 letters and must contain atleast one Small Letter, one Capital Letter, an Integer and a Special character";
  //   }else{
  //               document.getElementById("password-alert").style.display = "none";

  //   }

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
        // errorMessage += "Please enter a valid Character"
        document.getElementById("password-alert").style("display") = "block";
        document.getElementById("password-alert").innerHTML =
          "Please enter a valid Character";
        return 1;
        // passToggler = 1;
      }
    }

    // if(passToggler){
    //     document.getElementById("password-alert").style("display") =  "block";
    //     document.getElementById("password-alert").innerHTML = "Please enter a valid Character";

    // }

    if (!(special >= 1)) {
      errorMessage += "atleast one Special Character ,";
    }
    if (!(capital >= 1)) {
      errorMessage += "atleast one Capital Character,";
    }
    if (!(lower >= 1)) {
      errorMessage += "atleast one Lower Character,";
    }
    if (!(integr >= 1)) {
      errorMessage += "atleast one Integer,";
    }

    if (errorMessage == "The Password must contain") {
      // alert("valid")
      document.getElementById("password-alert").style.display = "none";
      return 0;
    } else {
      // alert(errorMessage);
      document.getElementById("password-alert").display = "block";
      document.getElementById("password-alert").innerHTML = errorMessage;
      return 1;
    }
  } else {
    //   alert("Invalid Length");
    document.getElementById("password-alert").style.display = "block";
    document.getElementById("password-alert").innerHTML =
      "The Password must be between 8 to 14 letters and must contain atleast one Small Letter, one Capital Letter, an Integer and a Special character";
    return 1;
  }
}
function validateForm() {
  console.log("submoitter");
  //   var address, password;
  //   address = document.getElementById("inputAddress").value;
  //   let addresswithoutspaces = address.replace(/\s/g, "");
  //   if (addresswithoutspaces.length >= 10 && addresswithoutspaces.length < 201) {
  //     // alert("valid")
  //   } else {
  //     // alert("Not Valid")
  //   }
  //   password = document.getElementById("inputPassword").value;
}
