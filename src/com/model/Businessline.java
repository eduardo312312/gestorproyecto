package com.model;
// Generated 21/05/2017 02:53:53 AM by Hibernate Tools 3.4.0.CR1

import static javax.persistence.GenerationType.IDENTITY;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * Businessline generated by hbm2java
 */
@Entity
@Table(name = "businessline")
public class Businessline implements java.io.Serializable {

	private int id;
	private String name;
	private String description;
	private String code;
	private Date createdate;
	private Date updateat;
	private Integer stateid;
	private Set<Project> projects = new HashSet<Project>(0);

	public Businessline() {
	}

	public Businessline(int id) {
		this.id = id;
	}

	public Businessline(int id, String name, String description, String code, Date createdate, Date updateat,
			Integer stateid, Set<Project> projects) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.code = code;
		this.createdate = createdate;
		this.updateat = updateat;
		this.stateid = stateid;
		this.projects = projects;
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

	@Column(name = "code", length = 250)
	public String getCode() {
		return this.code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "createdate", length = 13)
	public Date getCreatedate() {
		return this.createdate;
	}

	public void setCreatedate(Date createdate) {
		this.createdate = createdate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "updateat", length = 13)
	public Date getUpdateat() {
		return this.updateat;
	}

	public void setUpdateat(Date updateat) {
		this.updateat = updateat;
	}

	@Column(name = "stateid")
	public Integer getStateid() {
		return this.stateid;
	}

	public void setStateid(Integer stateid) {
		this.stateid = stateid;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "businessline")
	public Set<Project> getProjects() {
		return this.projects;
	}

	public void setProjects(Set<Project> projects) {
		this.projects = projects;
	}

}
