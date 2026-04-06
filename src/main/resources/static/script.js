document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const btn = e.target.querySelector("button");
    const originalText = btn.innerText;
    btn.innerText = "Sending..."; // Let user know it's working
    btn.disabled = true;

    fetch("https://vidya-mandir.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        })
    })
    .then(response => {
        if (response.ok) {
            alert("Message Sent Successfully!");
            e.target.reset(); // Clear the form
        } else {
            throw new Error("Server responded with an error");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed to send message. The server might be waking up, please try again in a moment.");
    })
    .finally(() => {
        btn.innerText = originalText;
        btn.disabled = false;
    });
});