package taskmanagementsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;

@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    @NotEmpty(message = "Invalid: task cannot be empty")
    private String task;
    private String details;
    private Boolean completed;
    private String taskCreatedAt;
    @ManyToOne
    @JsonIgnore
    private User user;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTask() {
		return task;
	}
	public void setTask(String task) {
		this.task = task;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public Boolean getCompleted() {
		return completed;
	}
	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}
	public String getTaskCreatedAt() {
		return taskCreatedAt;
	}
	public void setTaskCreatedAt(String taskCreatedAt) {
		this.taskCreatedAt = taskCreatedAt;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Task(Integer id, @NotEmpty(message = "Invalid: task cannot be empty") String task, String details,
			Boolean completed, String taskCreatedAt, User user) {
		super();
		this.id = id;
		this.task = task;
		this.details = details;
		this.completed = completed;
		this.taskCreatedAt = taskCreatedAt;
		this.user = user;
	}
	public Task() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
}
