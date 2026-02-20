document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("Y8lijwxwZpI0wU312");

    const form = document.getElementById('contact-form');
    const btn = document.getElementById('submit-btn');
    const statusDiv = document.getElementById('status-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        btn.disabled = true;
        btn.textContent = 'Sending...';

        emailjs.sendForm('service_qdj9emo', 'template_fbugz1s', form)
        .then(() => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            emailjs.send('service_qdj9emo', 'ttemplate_6317z86', {
            name,
            email,
            message
            });

            form.reset();
            statusDiv.textContent = 'Message sent!';
            statusDiv.className = 'success';
        })
        .catch(() => {
            statusDiv.textContent = 'Failed to send message.';
            statusDiv.className = 'error';
        })
        .finally(() => {
            btn.disabled = false;
            btn.textContent = 'Send Message';
        });
    });
});