AOS.init();

// Contact Form 
document.getElementById("contactForm").addEventListener("submit",function(e){
	 e.preventDefault();
	 fetch("https://vidya-mandir.onrender.com/contact",{ method:"POST", headers:{"Content-Type":"application/json"},
	 body:JSON.stringify({ name:document.getElementById("name").value,
	 email:document.getElementById("email").value,
	 message:document.getElementById("message").value }) }).then(()=>alert("Message Sent")); });
	 
