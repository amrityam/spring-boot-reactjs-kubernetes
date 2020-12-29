package com.hackforfun.coronatrackerbackend.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.hackforfun.coronatrackerbackend.model.Comment;

public interface CommentRepository extends MongoRepository<Comment, String>{
	
	@Query("{'title':?0}")
    Optional<Comment> findByTitle(String title);

}
