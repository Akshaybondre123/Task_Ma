package taskmanagementsystem.dto;

import jakarta.validation.constraints.NotEmpty;


public class Login {
    @NotEmpty(message = "Invalid: username cannot be empty.")
    private String username;
    @NotEmpty(message = "Invalid: password cannot be empty")
    private String password;
	
    
    public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Login(@NotEmpty(message = "Invalid: username cannot be empty.") String username,
			@NotEmpty(message = "Invalid: password cannot be empty") String password) {
		super();
		this.username = username;
		this.password = password;
	}
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
    
}