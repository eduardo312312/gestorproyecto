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
 * Businesssubjecttype generated by hbm2java
 */
@Entity
@Table(name = "businesssubjecttype")
public class Businesssubjecttype implements java.io.Serializable {

	private int id;
	private State state;
	private String name;
	private String description;
	private String code;
	private Date createdate;
	private Date updateat;
	private Set<Businessubject> businessubjects = new HashSet<Businessubject>(0);

	public Businesssubjecttype() {
	}

	public Businesssubjecttype(int id) {
		this.id = id;
	}

	public Businesssubjecttype(int id, State state, String name, String description, String code, Date createdate,
			Date updateat, Set<Businessubject> businessubjects) {
		this.id = id;
		this.state = state;
		this.name = name;
		this.description = description;
		this.code = code;
		this.createdate = createdate;
		this.updateat = updateat;
		this.businessubjects = businessubjects;
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

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "businesssubjecttype")
	public Set<Businessubject> getBusinessubjects() {
		return this.businessubjects;
	}

	public void setBusinessubjects(Set<Businessubject> businessubjects) {
		this.businessubjects = businessubjects;
	}

}
