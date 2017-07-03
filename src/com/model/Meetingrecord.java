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
 * Meetingrecord generated by hbm2java
 */
@Entity
@Table(name = "meetingrecord")
public class Meetingrecord implements java.io.Serializable {

	private int id;
	private Businessubject businessubject;
	private State state;
	private String meetname;
	private Date meetdate;
	private Date createdate;
	private Date updateat;
	private Integer priority;
	private String description;
	private String location;
	private String comment;

	public Meetingrecord() {
	}

	public Meetingrecord(int id) {
		this.id = id;
	}

	public Meetingrecord(int id, Businessubject businessubject, State state, String meetname, Date meetdate,
			Date createdate, Date updateat, Integer priority, String description, String location, String comment) {
		this.id = id;
		this.businessubject = businessubject;
		this.state = state;
		this.meetname = meetname;
		this.meetdate = meetdate;
		this.createdate = createdate;
		this.updateat = updateat;
		this.priority = priority;
		this.description = description;
		this.location = location;
		this.comment = comment;
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

	@Column(name = "meetname", length = 250)
	public String getMeetname() {
		return this.meetname;
	}

	public void setMeetname(String meetname) {
		this.meetname = meetname;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "meetdate", length = 13)
	public Date getMeetdate() {
		return this.meetdate;
	}

	public void setMeetdate(Date meetdate) {
		this.meetdate = meetdate;
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

	@Column(name = "description", length = 250)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name = "location", length = 250)
	public String getLocation() {
		return this.location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	@Column(name = "comment", length = 250)
	public String getComment() {
		return this.comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

}
