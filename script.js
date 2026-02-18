     // Optional: Add a success message after submission (Formspree handles redirect)
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            // No need to prevent default; let Formspree handle it
            alert('Thank you for your message! We will get back to you soon.');
        });