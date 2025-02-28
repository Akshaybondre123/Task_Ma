package taskmanagementsystem.dto;


public class ApiResponse {
	
    private String message;
    private Object object;
	
    public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Object getObject() {
		return object;
	}
	public void setObject(Object object) {
		this.object = object;
	}
	public ApiResponse(String message, Object object) {
		super();
		this.message = message;
		this.object = object;
	}
	public ApiResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
}
