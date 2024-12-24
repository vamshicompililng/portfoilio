function sendMail() {
    var params = {
        name: document.getElementById("fullName").value,
        email: document.getElementById("emailAddress").value,
        number: document.getElementById("mobileNumber").value,
        Location: document.getElementById("userLocation").value,
        message: document.getElementById("userMessage").value,
    };

    const serviceId = "service_35irdqt";
    const templateId = "template_kvy8ky6";

    // Validate form inputs
    if (!params.name || !params.email || !params.message) {
        alert("Please fill in all required fields (Name, Email, and Message).");
        return;
    }

    emailjs
        .send(serviceId, templateId, params)
        .then((res) => {
            // Clear form fields after success
            document.getElementById("fullName").value= "";
            document.getElementById("emailAddress").value = "";
            document.getElementById("mobileNumber").value = "";
            document.getElementById("userLocation").value = "";
            document.getElementById("userMessage").value= "";

            console.log("Email sent successfully:", res);
            alert("Your message was sent successfully!");
        })
        .catch((err) => {
            console.error("Error sending email:", err);
            alert("Failed to send the message. Please try again later.");
        });
}
