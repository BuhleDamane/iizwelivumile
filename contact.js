// JavaScript for Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simple validation (could be extended)
    if (name && email && subject && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
        
        // Reset form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
