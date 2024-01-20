package com.jumpstart.music.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jumpstart.music.models.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
