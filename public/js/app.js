const contactForm = document.querySelector(".contact-form");
let Name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    name: Name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);

    try {
      if (xhr.responseText == "Success") {
        alert("Email sent successfully");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }

    // if (xhr.responseText == "success") {
    //   alert("Email Sent Successfuly");
    //   Name.value = "";
    //   email.value = "";
    //   subject.value = "";
    //   message.value = "";
    // }
    // else {
    //   alert("Oops !! Something went wrong.");
    // }
  };

  xhr.send(JSON.stringify(formData));
});
