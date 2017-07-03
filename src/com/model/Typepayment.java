package com.model;
// Generated 23/06/2017 05:20:26 PM by Hibernate Tools 3.4.0.CR1

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
 * Typepayment generated by hbm2java
 */
@Entity
@Table(name = "typepayment")
public class Typepayment implements java.io.Serializable {

	private int id;
	private State state;
	private String shortname;
	private String description;
	private String currencyname;
	private String currencyabreviature;
	private String currencycode;
	private Date updateat;
	private Date createdate;
	private Set<Project> projects = new HashSet<Project>(0);

	public Typepayment() {
	}

	public Typepayment(int id) {
		this.id = id;
	}

	public Typepayment(int id, State state, String shortname, String description, String currencyname,
			String currencyabreviature, String currencycode, Date updateat, Date createdate, Set<Project> projects) {
		this.id = id;
		this.state = state;
		this.shortname = shortname;
		this.description = description;
		this.currencyname = currencyname;
		this.currencyabreviature = currencyabreviature;
		this.currencycode = currencycode;
		this.updateat = updateat;
		this.createdate = createdate;
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

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "stateid")
	public State getState() {
		return this.state;
	}

	public void setState(State state) {
		this.state = state;
	}

	@Column(name = "shortname", length = 50)
	public String getShortname() {
		return this.shortname;
	}

	public void setShortname(String shortname) {
		this.shortname = shortname;
	}

	@Column(name = "description", length = 250)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name = "currencyname", length = 250)
	public String getCurrencyname() {
		return this.currencyname;
	}

	public void setCurrencyname(String currencyname) {
		this.currencyname = currencyname;
	}

	@Column(name = "currencyabreviature", length = 250)
	public String getCurrencyabreviature() {
		return this.currencyabreviature;
	}

	public void setCurrencyabreviature(String currencyabreviature) {
		this.currencyabreviature = currencyabreviature;
	}

	@Column(name = "currencycode", length = 250)
	public String getCurrencycode() {
		return this.currencycode;
	}

	public void setCurrencycode(String currencycode) {
		this.currencycode = currencycode;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "updateat", length = 13)
	public Date getUpdateat() {
		return this.updateat;
	}

	public void setUpdateat(Date updateat) {
		this.updateat = updateat;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "createdate", length = 13)
	public Date getCreatedate() {
		return this.createdate;
	}

	public void setCreatedate(Date createdate) {
		this.createdate = createdate;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "typepayment")
	public Set<Project> getProjects() {
		return this.projects;
	}

	public void setProjects(Set<Project> projects) {
		this.projects = projects;
	}

}
