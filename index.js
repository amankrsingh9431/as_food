const Name=document.getElementById("Name");
const Email=document.getElementById("Email");
const Message=document.getElementById("Message");
const Purpose=document.getElementById("Purpose");
function submitconfirmation(){
    emailjs.send("service_gey6q23","template_e5bdt7s",{
        reply_to: Email.value,
        Name:Name.value,
       Email:Email.value,
       Message:Message.value,
       subject:Purpose.value
      })
      .then((response) => {
        alert("Email sent successfully", response);
        Name.value="";
        Email.value="";
        Message.value="";
        Purpose.value="";
      }, (error) => {
        alert("Error sending email", error);
      });
}