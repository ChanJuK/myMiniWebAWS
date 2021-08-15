package com.jojoldu.book.springboot.domain.posts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostsRepository extends JpaRepository<Posts, Long> {

//    @Query("SELECT p FROM posts p ORDER BY p.id DESC")
    @Query(
            value = "SELECT * FROM posts p ORDER BY p.id DESC",
            nativeQuery = true)
    List<Posts> findAllDesc();

}
