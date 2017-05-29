package com.model;
// Generated 29/05/2017 01:32:00 AM by Hibernate Tools 3.4.0.CR1

import static javax.persistence.GenerationType.IDENTITY;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * Requirement generated by hbm2java
 */
@Entity
@Table(name = "requirement")
public class Requirement implements java.io.Serializable {

	private int id;
	private Project project;
	private String name;
	private String description;
	private Integer priority;
	private Date maximundate;
	private String comment;
	private String category;

	public Requirement() {
	}

	public Requirement(int id) {
		this.id = id;
	}

	public Requirement(int id, Project project, String name, String description, Integer priority, Date maximundate,
			String comment, String category) {
		this.id = id;
		this.project = project;
		this.name = name;
		this.description = description;
		this.priority = priority;
		this.maximundate = maximundate;
		this.comment = comment;
		this.category = category;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "projectid")
	public Project getProject() {
		return this.project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	@Column(name = "name", length = 250)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "description", length = 250)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name = "priority")
	public Integer getPriority() {
		return this.priority;
	}

	public void setPriority(Integer priority) {
		this.priority = priority;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "maximundate", length = 13)
	public Date getMaximundate() {
		return this.maximundate;
	}

	public void setMaximundate(Date maximundate) {
		this.maximundate = maximundate;
	}

	@Column(name = "comment", length = 250)
	public String getComment() {
		return this.comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	@Column(name = "category", length = 250)
	public String getCategory() {
		return this.category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

}
