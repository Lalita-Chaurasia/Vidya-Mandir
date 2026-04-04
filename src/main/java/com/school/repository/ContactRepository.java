package com.school.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.school.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {}