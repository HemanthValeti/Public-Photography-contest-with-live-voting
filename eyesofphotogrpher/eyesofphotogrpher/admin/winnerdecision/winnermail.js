function sendMail() {
  var params = {
    email: document.getElementById("email").value,
  };

  const serviceID = "service_4b427ma";
  const templateID = "template_49qb1x7";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("email").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}