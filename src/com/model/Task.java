package com.model;
// Generated 21/05/2017 04:09:30 AM by Hibernate Tools 3.4.0.CR1

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
 * Task generated by hbm2java
 */
@Entity
@Table(name = "task")
public class Task implements java.io.Serializable {

	private int id;
	private Businessubject businessubjectByBusinesssubjectresponsableid;
	private Businessubject businessubjectByBusinesssubjectcreatorid;
	private Activity activity;
	private State state;
	private Businessubject businessubjectByBusinesssubjectmodifierid;
	private String name;
	private String description;
	private String comment;
	private Date startdate;
	private Date enddate;
	private Date createdate;
	private Double estimatehour;
	private Double realhour;
	private Date changedate;
	private String shortname;
	private Date updateat;
	private Double realamount;
	private Double estimateamount;
	private Set<Taskhistory> taskhistories = new HashSet<Taskhistory>(0);
	private Set<Taskdetail> taskdetails = new HashSet<Taskdetail>(0);

	public Task() {
	}

	public Task(int id) {
		this.id = id;
	}

	public Task(int id, Businessubject businessubjectByBusinesssubjectresponsableid,
			Businessubject businessubjectByBusinesssubjectcreatorid, Activity activity, State state,
			Businessubject businessubjectByBusinesssubjectmodifierid, String name, String description, String comment,
			Date startdate, Date enddate, Date createdate, Double estimatehour, Double realhour, Date changedate,
			String shortname, Date updateat, Double realamount, Double estimateamount, Set<Taskhistory> taskhistories,
			Set<Taskdetail> taskdetails) {
		this.id = id;
		this.businessubjectByBusinesssubjectresponsableid = businessubjectByBusinesssubjectresponsableid;
		this.businessubjectByBusinesssubjectcreatorid = businessubjectByBusinesssubjectcreatorid;
		this.activity = activity;
		this.state = state;
		this.businessubjectByBusinesssubjectmodifierid = businessubjectByBusinesssubjectmodifierid;
		this.name = name;
		this.description = description;
		this.comment = comment;
		this.startdate = startdate;
		this.enddate = enddate;
		this.createdate = createdate;
		this.estimatehour = estimatehour;
		this.realhour = realhour;
		this.changedate = changedate;
		this.shortname = shortname;
		this.updateat = updateat;
		this.realamount = realamount;
		this.estimateamount = estimateamount;
		this.taskhistories = taskhistories;
		this.taskdetails = taskdetails;
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
	@JoinColumn(name = "activityid")
	public Activity getActivity() {
		return this.activity;
	}

	public void setActivity(Activity activity) {
		this.activity = activity;
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
	@Column(name = "createdate", length = 13)
	public Date getCreatedate() {
		return this.createdate;
	}

	public void setCreatedate(Date createdate) {
		this.createdate = createdate;
	}

	@Column(name = "estimatehour", precision = 17, scale = 17)
	public Double getEstimatehour() {
		return this.estimatehour;
	}

	public void setEstimatehour(Double estimatehour) {
		this.estimatehour = estimatehour;
	}

	@Column(name = "realhour", precision = 17, scale = 17)
	public Double getRealhour() {
		return this.realhour;
	}

	public void setRealhour(Double realhour) {
		this.realhour = realhour;
	}

	@Column(name = "changedate")
	public Date getChangedate() {
		return this.changedate;
	}

	public void setChangedate(Date changedate) {
		this.changedate = changedate;
	}

	@Column(name = "shortname", length = 250)
	public String getShortname() {
		return this.shortname;
	}

	public void setShortname(String shortname) {
		this.shortname = shortname;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "updateat", length = 13)
	public Date getUpdateat() {
		return this.updateat;
	}

	public void setUpdateat(Date updateat) {
		this.updateat = updateat;
	}

	@Column(name = "realamount", precision = 17, scale = 17)
	public Double getRealamount() {
		return this.realamount;
	}

	public void setRealamount(Double realamount) {
		this.realamount = realamount;
	}

	@Column(name = "estimateamount", precision = 17, scale = 17)
	public Double getEstimateamount() {
		return this.estimateamount;
	}

	public void setEstimateamount(Double estimateamount) {
		this.estimateamount = estimateamount;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "task")
	public Set<Taskhistory> getTaskhistories() {
		return this.taskhistories;
	}

	public void setTaskhistories(Set<Taskhistory> taskhistories) {
		this.taskhistories = taskhistories;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "task")
	public Set<Taskdetail> getTaskdetails() {
		return this.taskdetails;
	}

	public void setTaskdetails(Set<Taskdetail> taskdetails) {
		this.taskdetails = taskdetails;
	}

}