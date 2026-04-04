package com.school.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.school.model.Contact;
import com.school.service.ContactService;

@RestController @CrossOrigin(origins = "*") 
public class ContactController {
@Autowired
private ContactService service;

@PostMapping("/contact")
public Contact save(@RequestBody Contact contact) {
    return service.saveContact(contact);
}

}