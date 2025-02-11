package com.example.task.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.task.Model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
