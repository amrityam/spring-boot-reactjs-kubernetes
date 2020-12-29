package com.hackforfun.coronatrackerbackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;



@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="comment")
public class Comment {
	
	@Id
    private String id;
	
	@NotNull(message = "Comment title cannot be empty")
    private String title;
	
	@NotNull(message = "Comment descripton cannot be emptyssssss")
    private String desc;
    
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}

}
