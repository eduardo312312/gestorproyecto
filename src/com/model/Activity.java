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
 * Activity generated by hbm2java
 */
@Entity
@Table(name = "activity")
public class Activity implements java.io.Serializable {

	private int id;
	private Phase phase;
	private Businessubject businessubjectByBusinesssubjectresponsableid;
	private Businessubject businessubjectByBusinesssubjectcreatorid;
	private State state;
	private Businessubject businessubjectByBusinesssubjectmodifierid;
	private String name;
	private String description;
	private String comment;
	private Date startdate;
	private Date enddate;
	private Date changedate;
	private Date createdate;
	private Date updateat;
	private String shortname;
	private Integer priority;
	private Set<Task> tasks = new HashSet<Task>(0);

	public Activity() {
	}

	public Activity(int id) {
		this.id = id;
	}

	public Activity(int id, Phase phase, Businessubject businessubjectByBusinesssubjectresponsableid,
			Businessubject businessubjectByBusinesssubjectcreatorid, State state,
			Businessubject businessubjectByBusinesssubjectmodifierid, String name, String description, String comment,
			Date startdate, Date enddate, Date changedate, Date createdate, Date updateat, String shortname,
			Integer priority, Set<Task> tasks) {
		this.id = id;
		this.phase = phase;
		this.businessubjectByBusinesssubjectresponsableid = businessubjectByBusinesssubjectresponsableid;
		this.businessubjectByBusinesssubjectcreatorid = businessubjectByBusinesssubjectcreatorid;
		this.state = state;
		this.businessubjectByBusinesssubjectmodifierid = businessubjectByBusinesssubjectmodifierid;
		this.name = name;
		this.description = description;
		this.comment = comment;
		this.startdate = startdate;
		this.enddate = enddate;
		this.changedate = changedate;
		this.createdate = createdate;
		this.updateat = updateat;
		this.shortname = shortname;
		this.priority = priority;
		this.tasks = tasks;
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
	@JoinColumn(name = "phaseid")
	public Phase getPhase() {
		return this.phase;
	}

	public void setPhase(Phase phase) {
		this.phase = phase;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "businesssubjectresponsableid")
	public Businessubject getBusinessubjectByBusinesssubjectresponsableid() {
		return this.businessubjectByBusinesssubjectresponsableid;
	}

	public void setBusinessubjectByBusinesssubjectresponsableid(
			Businessubject businessubjectByBusinesssubjectresponsableid) {
		this.businessubjectByBusinesssubjectresponsableid = businessubjectByBusinesssubjectresponsableid;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "businesssubjectcreatorid")
	public Businessubject getBusinessubjectByBusinesssubjectcreatorid() {
		return this.businessubjectByBusinesssubjectcreatorid;
	}

	public void setBusinessubjectByBusinesssubjectcreatorid(Businessubject businessubjectByBusinesssubjectcreatorid) {
		this.businessubjectByBusinesssubjectcreatorid = businessubjectByBusinesssubjectcreatorid;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "stateid")
	public State getState() {
		return this.state;
	}

	public void setState(State state) {
		this.state = state;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "businesssubjectmodifierid")
	public Businessubject getBusinessubjectByBusinesssubjectmodifierid() {
		return this.businessubjectByBusinesssubjectmodifierid;
	}

	public void setBusinessubjectByBusinesssubjectmodifierid(Businessubject businessubjectByBusinesssubjectmodifierid) {
		this.businessubjectByBusinesssubjectmodifierid = businessubjectByBusinesssubjectmodifierid;
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

	@Column(name = "comment", length = 250)
	public String getComment() {
		return this.comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "startdate", length = 13)
	public Date getStartdate() {
		return this.startdate;
	}

	public void setStartdate(Date startdate) {
		this.startdate = startdate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "enddate", length = 13)
	public Date getEnddate() {
		return this.enddate;
	}

	public void setEnddate(Date enddate) {
		this.enddate = enddate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "changedate", length = 13)
	public Date getChangedate() {
		return this.changedate;
	}

	public void setChangedate(Date changedate) {
		this.changedate = changedate;
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

	@Column(name = "shortname", length = 250)
	public String getShortname() {
		return this.shortname;
	}

	public void setShortname(String shortname) {
		this.shortname = shortname;
	}

	@Column(name = "priority")
	public Integer getPriority() {
		return this.priority;
	}

	public void setPriority(Integer priority) {
		this.priority = priority;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "activity")
	public Set<Task> getTasks() {
		return this.tasks;
	}

	public void setTasks(Set<Task> tasks) {
		this.tasks = tasks;
	}

}
