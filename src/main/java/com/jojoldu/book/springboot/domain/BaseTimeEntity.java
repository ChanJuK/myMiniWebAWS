package com.jojoldu.book.springboot.domain;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass //jpa entity들이 bastTimeEntity상속하면 컬럼 자체를 여기서 선언한 이름으로 인식하도록함.
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseTimeEntity {

    @CreatedDate //entity가 생성될때 자동저장
    private LocalDateTime createdDate;

    @LastModifiedDate//entity가 변경될때 자동저장
    private LocalDateTime modifiedDate;

}
