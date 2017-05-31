package com.model;
// Generated 31/05/2017 06:07:36 AM by Hibernate Tools 3.4.0.CR1

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
 * Businessubject generated by hbm2java
 */
@Entity
@Table(name = "businessubject")
public class Businessubject implements java.io.Serializable {

	private int id;
	private Businesssubjecttype businesssubjecttype;
	private Businessubject businessubject;
	private State state;
	private String name;
	private String lastname;
	private String secondlastname;
	private String address;
	private String location;
	private String mail;
	private String phone;
	private String phone2;
	private Date startdate;
	private Date enddate;
	private Date updateat;
	private Date createdate;
	private Date birthday;
	private String officialdocument;
	private String officialdocumenttype;
	private Set<Task> tasksForBusinesssubjectresponsableid = new HashSet<Task>(0);
	private Set<Task> tasksForBusinesssubjectmodifierid = new HashSet<Task>(0);
	private Set<Project> projectsForBusinesssubjectleaderid = new HashSet<Project>(0);
	private Set<Activity> activitiesForBusinesssubjectresponsableid = new HashSet<Activity>(0);
	private Set<Team> teams = new HashSet<Team>(0);
	private Set<Activity> activitiesForBusinesssubjectmodifierid = new HashSet<Activity>(0);
	private Set<Businessubject> businessubjects = new HashSet<Businessubject>(0);
	private Set<Systemuser> systemusers = new HashSet<Systemuser>(0);
	private Set<Project> projectsForBusinesssubjectcontrolid = new HashSet<Project>(0);
	private Set<Activity> activitiesForBusinesssubjectcreatorid = new HashSet<Activity>(0);
	private Set<Task> tasksForBusinesssubjectcreatorid = new HashSet<Task>(0);

	public Businessubject() {
	}

	public Businessubject(int id) {
		this.id = id;
	}

	public Businessubject(int id, Businesssubjecttype businesssubjecttype, Businessubject businessubject, State state,
			String name, String lastname, String secondlastname, String address, String location, String mail,
			String phone, String phone2, Date startdate, Date enddate, Date updateat, Date createdate, Date birthday,
			String officialdocument, String officialdocumenttype, Set<Task> tasksForBusinesssubjectresponsableid,
			Set<Task> tasksForBusinesssubjectmodifierid, Set<Project> projectsForBusinesssubjectleaderid,
			Set<Activity> activitiesForBusinesssubjectresponsableid, Set<Team> teams,
			Set<Activity> activitiesForBusinesssubjectmodifierid, Set<Businessubject> businessubjects,
			Set<Systemuser> systemusers, Set<Project> projectsForBusinesssubjectcontrolid,
			Set<Activity> activitiesForBusinesssubjectcreatorid, Set<Task> tasksForBusinesssubjectcreatorid) {
		this.id = id;
		this.businesssubjecttype = businesssubjecttype;
		this.businessubject = businessubject;
		this.state = state;
		this.name = name;
		this.lastname = lastname;
		this.secondlastname = secondlastname;
		this.address = address;
		this.location = location;
		this.mail = mail;
		this.phone = phone;
		this.phone2 = phone2;
		this.startdate = startdate;
		this.enddate = enddate;
		this.updateat = updateat;
		this.createdate = createdate;
		this.birthday = birthday;
		this.officialdocument = officialdocument;
		this.officialdocumenttype = officialdocumenttype;
		this.tasksForBusinesssubjectresponsableid = tasksForBusinesssubjectresponsableid;
		this.tasksForBusinesssubjectmodifierid = tasksForBusinesssubjectmodifierid;
		this.projectsForBusinesssubjectleaderid = projectsForBusinesssubjectleaderid;
		this.activitiesForBusinesssubjectresponsableid = activitiesForBusinesssubjectresponsableid;
		this.teams = teams;
		this.activitiesForBusinesssubjectmodifierid = activitiesForBusinesssubjectmodifierid;
		this.businessubjects = businessubjects;
		this.systemusers = systemusers;
		this.projectsForBusinesssubjectcontrolid = projectsForBusinesssubjectcontrolid;
		this.activitiesForBusinesssubjectcreatorid = activitiesForBusinesssubjectcreatorid;
		this.tasksForBusinesssubjectcreatorid = tasksForBusinesssubjectcreatorid;
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
	@JoinColumn(name = "businesssubjecttypeid")
	public Businesssubjecttype getBusinesssubjecttype() {
		return this.businesssubjecttype;
	}

	public void setBusinesssubjecttype(Businesssubjecttype businesssubjecttype) {
		this.businesssubjecttype = businesssubjecttype;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "businesssubjectbossid")
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

	@Column(name = "name", length = 250)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "lastname", length = 250)
	public String getLastname() {
		return this.lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	@Column(name = "secondlastname", length = 250)
	public String getSecondlastname() {
		return this.secondlastname;
	}

	public void setSecondlastname(String secondlastname) {
		this.secondlastname = secondlastname;
	}

	@Column(name = "address", length = 250)
	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Column(name = "location", length = 250)
	public String getLocation() {
		return this.location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	@Column(name = "mail", length = 250)
	public String getMail() {
		return this.mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	@Column(name = "phone", length = 250)
	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@Column(name = "phone2", length = 250)
	public String getPhone2() {
		return this.phone2;
	}

	public void setPhone2(String phone2) {
		this.phone2 = phone2;
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

	@Temporal(TemporalType.DATE)
	@Column(name = "birthday", length = 13)
	public Date getBirthday() {
		return this.birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	@Column(name = "officialdocument", length = 50)
	public String getOfficialdocument() {
		return this.officialdocument;
	}

	public void setOfficialdocument(String officialdocument) {
		this.officialdocument = officialdocument;
	}

	@Column(name = "officialdocumenttype", length = 50)
	public String getOfficialdocumenttype() {
		return this.officialdocumenttype;
	}

	public void setOfficialdocumenttype(String officialdocumenttype) {
		this.officialdocumenttype = officialdocumenttype;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "businessubjectByBusinesssubjectresponsableid")
	public Set<Task> getTasksForBusinesssubjectresponsableid() {
		return this.tasksForBusinesssubjectresponsableid;
	}

	public void setTasksForBusinesssubjectresponsableid(Set<Task> tasksForBusinesssubjectresponsableid) {
		this.tasksForBusinesssubjectresponsableid = tasksForBusinesssubjectresponsableid;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "businessubjectByBusinesssubjectmodifierid")
	public Set<Task> getTasksForBusinesssubjectmodifierid() {
		return this.tasksForBusinesssubjectmodifierid;
	}

	public void setTasksForBusinesssubjectmodifierid(Set<Task> tasksForBusinesssubjectmodifierid) {
		this.tasksForBusinesssubjectmodifierid = tasksForBusinesssubjectmodifierid;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "businessubjectByBusinesssubjectleaderid")
	public Set<Project> getProjectsForBusinesssubjectleaderid() {
		return this.projectsForBusinesssubjectleaderid;
	}

	public void setProjectsForBusinesssubjectleaderid(Set<Project> projectsForBusinesssubjectleaderid) {
		this.projectsForBusinesssubjectleaderid = projectsForBusinesssubjectleaderid;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "businessubjectByBusinesssubjectresponsableid")
	public Set<Activity> getActivitiesForBusinesssubjectresponsableid() {
		return this.activitiesForBusinesssubjectresponsableid;
	}

	public void setActivitiesForBusinesssubjectresponsableid(Set<Activity> activitiesForBusinesssubjectresponsableid) {
		this.activitiesForBusinesssubjectresponsableid = activitiesForBusinesssubjectresponsableid;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "businessubject")
	public Set<Team> getTeams() {
		return this.teams;
	}

	public void setTeams(Set<Team> teams) {
		this.teams = teams;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "businessubjectByBusinesssubjectmodifierid")
	public Set<Activity> getActivitiesForBusinesssubjectmodifierid() {
		return this.activitiesForBusinesssubjectmodifierid;
	}

	public void setActivitiesForBusinesssubjectmodifierid(Set<Activity> activitiesForBusinesssubjectmodifierid) {
		this.activitiesForBusinesssubjectmodifierid = activitiesForBusinesssubjectmodifierid;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "businessubject")
	public Set<Businessubject> getBusinessubjects() {
		return this.businessubjects;
	}

	public void setBusinessubjects(Set<Businessubject> businessubjects) {
		this.businessubjects = businessubjects;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "businessubject")
	public Set<Systemuser> getSystemusers() {
		return this.systemusers;
	}

	public void setSystemusers(Set<Systemuser> systemusers) {
		this.systemusers = systemusers;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "businessubjectByBusinesssubjectcontrolid")
	public Set<Project> getProjectsForBusinesssubjectcontrolid() {
		return this.projectsForBusinesssubjectcontrolid;
	}

	public void setProjectsForBusinesssubjectcontrolid(Set<Project> projectsForBusinesssubjectcontrolid) {
		this.projectsForBusinesssubjectcontrolid = projectsForBusinesssubjectcontrolid;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "businessubjectByBusinesssubjectcreatorid")
	public Set<Activity> getActivitiesForBusinesssubjectcreatorid() {
		return this.activitiesForBusinesssubjectcreatorid;
	}

	public void setActivitiesForBusinesssubjectcreatorid(Set<Activity> activitiesForBusinesssubjectcreatorid) {
		this.activitiesForBusinesssubjectcreatorid = activitiesForBusinesssubjectcreatorid;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "businessubjectByBusinesssubjectcreatorid")
	public Set<Task> getTasksForBusinesssubjectcreatorid() {
		return this.tasksForBusinesssubjectcreatorid;
	}

	public void setTasksForBusinesssubjectcreatorid(Set<Task> tasksForBusinesssubjectcreatorid) {
		this.tasksForBusinesssubjectcreatorid = tasksForBusinesssubjectcreatorid;
	}

}
