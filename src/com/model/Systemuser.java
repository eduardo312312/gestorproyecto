package com.model;
// Generated 21/06/2017 07:36:26 AM by Hibernate Tools 3.4.0.CR1

import static javax.persistence.GenerationType.IDENTITY;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * Systemuser generated by hbm2java
 */
@Entity
@Table(name = "systemuser")
public class Systemuser implements java.io.Serializable {

	private int id;
	private Businessubject businessubject;
	private State state;
	private String login;
	private String password;
	private Date createdate;
	private Date updateat;
	private String comment;
	private Set<Userprofile> userprofiles = new HashSet<Userprofile>(0);

	public Systemuser() {
	}

	public Systemuser(int id) {
		this.id = id;
	}

	public Systemuser(int id, Businessubject businessubject, State state, String login, String password,
			Date createdate, Date updateat, String comment, Set<Userprofile> userprofiles) {
		this.id = id;
		this.businessubject = businessubject;
		this.state = state;
		this.login = login;
		this.password = password;
		this.createdate = createdate;
		this.updateat = updateat;
		this.comment = comment;
		this.userprofiles = userprofiles;
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
	@JoinColumn(name = "businesssubjectid")
	public Businessubject getBusinessubject() {
		return this.businessubject;
	}

	public void setBusinessubject(Businessubject businessubject) {
		this.businessubject = businessubject;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "stateid")
	public State getState() {
		return this.state;
	}

	public void setState(State state) {
		this.state = state;
	}

	@Column(name = "login", length = 50)
	public String getLogin() {
		return this.login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	@Column(name = "password", length = 50)
	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	@Column(name = "comment", length = 250)
	public String getComment() {
		return this.comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "systemuser")
	public Set<Userprofile> getUserprofiles() {
		return this.userprofiles;
	}

	public void setUserprofiles(Set<Userprofile> userprofiles) {
		this.userprofiles = userprofiles;
	}

}
