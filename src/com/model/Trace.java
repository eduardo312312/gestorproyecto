package com.model;
// Generated 23/06/2017 05:20:26 PM by Hibernate Tools 3.4.0.CR1

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
 * Trace generated by hbm2java
 */
@Entity
@Table(name = "trace")
public class Trace implements java.io.Serializable {

	private int id;
	private Businessubject businessubject;
	private State state;
	private String description;
	private String place;
	private Date createdate;
	private Date updateat;
	private Integer priority;
	private Date tracedate;
	private Double cost;

	public Trace() {
	}

	public Trace(int id) {
		this.id = id;
	}

	public Trace(int id, Businessubject businessubject, State state, String description, String place, Date createdate,
			Date updateat, Integer priority, Date tracedate, Double cost) {
		this.id = id;
		this.businessubject = businessubject;
		this.state = state;
		this.description = description;
		this.place = place;
		this.createdate = createdate;
		this.updateat = updateat;
		this.priority = priority;
		this.tracedate = tracedate;
		this.cost = cost;
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

	@Column(name = "description", length = 250)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name = "place", length = 250)
	public String getPlace() {
		return this.place;
	}

	public void setPlace(String place) {
		this.place = place;
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

	@Column(name = "priority")
	public Integer getPriority() {
		return this.priority;
	}

	public void setPriority(Integer priority) {
		this.priority = priority;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "tracedate", length = 13)
	public Date getTracedate() {
		return this.tracedate;
	}

	public void setTracedate(Date tracedate) {
		this.tracedate = tracedate;
	}

	@Column(name = "cost", precision = 17, scale = 17)
	public Double getCost() {
		return this.cost;
	}

	public void setCost(Double cost) {
		this.cost = cost;
	}

}
