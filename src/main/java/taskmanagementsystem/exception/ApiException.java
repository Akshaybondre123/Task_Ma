package taskmanagementsystem.exception;
import org.springframework.http.HttpStatus;


public class ApiException extends RuntimeException{
  
	private HttpStatus status;
    private String message;
	
    public HttpStatus getStatus() {
		return status;
	}
    
	public String getMessage() {
		return message;
	}

	public ApiException(HttpStatus status, String message) {
		super();
		this.status = status;
		this.message = message;
	}

    
    
}