package com.school.service;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service;
import com.school.model.Contact; 
import com.school.repository.ContactRepository;

@Service 
public class ContactService {

@Autowired
private ContactRepository repo;

public Contact saveContact(Contact contact) {
    return repo.save(contact);
}

}