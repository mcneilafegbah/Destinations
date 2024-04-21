function SendMAil() {

  let params = {
   
    name : document.getElementById("name").value,
    email :document.getElementById("email").value,
    subject :document.getElementById("subject").value,
    message :document.getElementById("message").value,
    }
    emailjs.send("service_f0a7bft", "template_jx1kg6j", params).then(alert("Success!! "))
  }