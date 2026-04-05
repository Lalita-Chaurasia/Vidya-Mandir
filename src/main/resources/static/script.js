AOS.init();

// Contact Form 
document.getElementById("contactForm").addEventListener("submit",function(e){
	 e.preventDefault();
	 fetch("/contact",{ method:"POST", headers:{"Content-Type":"application/json"},
	 body:JSON.stringify({ name:document.getElementById("name").value,
	 email:document.getElementById("email").value,
	 message:document.getElementById("message").value }) }).then(()=>alert("Message Sent")); });
	 

// Login
 function login(){ fetch("/login",{ method:"POST", headers:{"Content-Type":"application/json"},
  body:JSON.stringify({ username:document.getElementById("user").value,
	 password:document.getElementById("pass").value }) }).then(r=>r.text()).then(d=>alert(d)); }

// Add Student
 function addStudent(){ fetch("/student",{ method:"POST", headers:{"Content-Type":"application/json"},
 body:JSON.stringify({ name:document.getElementById("sname").value,
	 email:document.getElementById("semail").value,
	 course:document.getElementById("course").value }) }).then(()=>alert("Student Added")); }

// Load Students function loadStudents(){ fetch("http://localhost:8080/student/all") .then(r=>r.json()) .then(data=>{ let out=""; data.forEach(s=>{ out+=<p>${s.name} - ${s.course}</p>; }); document.getElementById("students").innerHTML=out; }); }