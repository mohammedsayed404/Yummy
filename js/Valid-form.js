export function vaild() {
  const yourName = $("#Name");
  const email = $("#Email");
  const phone = $("#Phone");
  const age = $("#Age");
  const password = $("#password");
  const rePassword = $("#re-password");
  const nameAlert = $(".nameAlert");
  const emailAlert = $(".emailAlert");
  const phoneAlert = $(".phoneAlert");
  const ageAlert = $(".ageAlert");
  const passwordAlert = $(".passwordAlert");
  const rePasswordAlert = $(".re-passwordAlert");

  yourName.keyup(function (e) {
    validateInputs();
  });
  email.keyup(function (e) {
    validateInputs();
  });
  phone.keyup(function (e) {
    validateInputs();
  });
  age.keyup(function (e) {
    validateInputs();
  });
  password.keyup(function (e) {
    validateInputs();
  });
  rePassword.keyup(function (e) {
    validateInputs();
  });

  function validateInputs() {
    const regexName = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPhone =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    const regexAge = /^(0?[1-9]|[1-9][0-9]|1[0-9]{2})$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    const check =
      regexName.test(yourName.val()) &&
      regexEmail.test(email.val()) &&
      regexPhone.test(phone.val()) &&
      regexAge.test(age.val()) &&
      regexPassword.test(password.val()) &&
      password.val() === rePassword.val();

    // if (!regexName.test(yourName.val())) {
    //   nameAlert.removeClass("d-none");
    // } else {
    //   nameAlert.addClass("d-none");
    // }
    // if (!regexEmail.test(email.val())) {
    //   emailAlert.removeClass("d-none");
    // } else {
    //   emailAlert.addClass("d-none");
    // }
    // if (!regexPhone.test(phone.val())) {
    //   phoneAlert.removeClass("d-none");
    // } else {
    //   phoneAlert.addClass("d-none");
    // }
    // if (!regexAge.test(age.val())) {
    //   ageAlert.removeClass("d-none");
    // } else {
    //   ageAlert.addClass("d-none");
    // }
    // if (!regexPassword.test(password.val())) {
    //   passwordAlert.removeClass("d-none");
    // } else {
    //   passwordAlert.addClass("d-none");
    // }
    // if (!(rePassword.val() === password.val() && rePassword.val())) {
    //   rePasswordAlert.removeClass("d-none");
    // } else {
    //   rePasswordAlert.addClass("d-none");
    // }

    if (check) {
      $(".sumbitBtn").removeClass("disabled");
    } else if (!regexName.test(yourName.val())) {
      nameAlert.removeClass("d-none");
      $(".sumbitBtn").addClass("disabled");
    }  else if (!regexEmail.test(email.val())) {
      emailAlert.removeClass("d-none");
      $(".sumbitBtn").addClass("disabled");
    }  else if (!regexPhone.test(phone.val())) {
      phoneAlert.removeClass("d-none");
      $(".sumbitBtn").addClass("disabled");
    }  else if (!regexAge.test(age.val())) {
      ageAlert.removeClass("d-none");
      $(".sumbitBtn").addClass("disabled");
    } else if (!regexPassword.test(password.val())) {
      passwordAlert.removeClass("d-none");
      $(".sumbitBtn").addClass("disabled");
    }  else if (!(rePassword.val() === password.val() && rePassword.val())) {
      rePasswordAlert.removeClass("d-none");
      $(".sumbitBtn").addClass("disabled");
    
    } if (regexName.test(yourName.val())) {
      nameAlert.addClass("d-none");
    }if (regexEmail.test(email.val())) {
      emailAlert.addClass("d-none");
    }if (regexPhone.test(phone.val())) {
      phoneAlert.addClass("d-none");
    }if (regexAge.test(age.val())) {
      ageAlert.addClass("d-none");
    } if (regexPassword.test(password.val())) {
      passwordAlert.addClass("d-none");
    }if (rePassword.val() === password.val() && rePassword.val()) {
      rePasswordAlert.addClass("d-none");
    }
  }


}
