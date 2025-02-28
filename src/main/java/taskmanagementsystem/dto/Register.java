package taskmanagementsystem.dto;

import jakarta.validation.constraints.NotEmpty;



public class Register {
  
	@NotEmpty(message = "Invalid: username cannot be empty")
    private String username;
    @NotEmpty(message = "Invalid: email cannot be empty")
    private String email;
    @NotEmpty(message = "Invalid: password cannot be empty")
    private String password;
	
    
    public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Register(@NotEmpty(message = "Invalid: username cannot be empty") String username,
			@NotEmpty(message = "Invalid: email cannot be empty") String email,
			@NotEmpty(message = "Invalid: password cannot be empty") String password) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
	}
	public Register() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
    
}