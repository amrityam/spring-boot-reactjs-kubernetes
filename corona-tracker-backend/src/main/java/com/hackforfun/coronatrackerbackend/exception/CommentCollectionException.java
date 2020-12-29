package com.hackforfun.coronatrackerbackend.exception;

public class CommentCollectionException extends Exception {
	
	public CommentCollectionException(String message)
    {
        super(message);
    }

    public static String NotFoundException(String id)
    {
        return "Comment with "+id+" not found";
    }

    public static String TitleAlreadyExists()
    {
        return "Comment with given title already exists";
    }

}
