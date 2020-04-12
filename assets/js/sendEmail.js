function sendMail(contactForm) {
    emailjs.send("gmail", "luigi", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                alert('Your mail is sent!');
                console.log("SUCCESS", response);
            },
            function(error) {
                alert('Oops...something went wrong!')
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}