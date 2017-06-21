package com.model;
// Generated 21/06/2017 07:36:26 AM by Hibernate Tools 3.4.0.CR1

import static javax.persistence.GenerationType.IDENTITY;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * State generated by hbm2java
 */
@Entity
@Table(name = "state")
public class State implements java.io.Serializable {

	private int id;
	private String name;
	private String description;
	private Set<Businesssubjecttype> businesssubjecttypes = new HashSet<Businesssubjecttype>(0);
	private Set<Controlchange> controlchanges = new HashSet<Controlchange>(0);
	private Set<Systemuser> systemusers = new HashSet<Systemuser>(0);
	private Set<Taskhistory> taskhistories = new HashSet<Taskhistory>(0);
	private Set<Activity> activities = new HashSet<Activity>(0);
	private Set<Taskdetail> taskdetails = new HashSet<Taskdetail>(0);
	private Set<Permissionprofile> permissionprofiles = new HashSet<Permissionprofile>(0);
	private Set<Portfolio> portfolios = new HashSet<Portfolio>(0);
	private Set<Typepayment> typepayments = new HashSet<Typepayment>(0);
	private Set<Marketline> marketlines = new HashSet<Marketline>(0);
	private Set<Riskmatrix> riskmatrixes = new HashSet<Riskmatrix>(0);
	private Set<Groupteam> groupteams = new HashSet<Groupteam>(0);
	private Set<Documenttype> documenttypes = new HashSet<Documenttype>(0);
	private Set<Document> documents = new HashSet<Document>(0);
	private Set<Profile> profiles = new HashSet<Profile>(0);
	private Set<Userprofile> userprofiles = new HashSet<Userprofile>(0);
	private Set<Document> documents_1 = new HashSet<Document>(0);
	private Set<Task> tasks = new HashSet<Task>(0);
	private Set<Meetingrecord> meetingrecords = new HashSet<Meetingrecord>(0);
	private Set<Detailfile> detailfiles = new HashSet<Detailfile>(0);
	private Set<Businessubject> businessubjects = new HashSet<Businessubject>(0);
	private Set<Trace> traces = new HashSet<Trace>(0);
	private Set<Stakeholder> stakeholders = new HashSet<Stakeholder>(0);
	private Set<Project> projects = new HashSet<Project>(0);
	private Set<Permission> permissions = new HashSet<Permission>(0);
	private Set<Phase> phases = new HashSet<Phase>(0);

	public State() {
	}

	public State(int id, String name, String description) {
		this.id = id;
		this.name = name;
		this.description = description;
	}

	public State(int id, String name, String description, Set<Businesssubjecttype> businesssubjecttypes,
			Set<Controlchange> controlchanges, Set<Systemuser> systemusers, Set<Taskhistory> taskhistories,
			Set<Activity> activities, Set<Taskdetail> taskdetails, Set<Permissionprofile> permissionprofiles,
			Set<Portfolio> portfolios, Set<Typepayment> typepayments, Set<Marketline> marketlines,
			Set<Riskmatrix> riskmatrixes, Set<Groupteam> groupteams, Set<Documenttype> documenttypes,
			Set<Document> documents, Set<Profile> profiles, Set<Userprofile> userprofiles, Set<Document> documents_1,
			Set<Task> tasks, Set<Meetingrecord> meetingrecords, Set<Detailfile> detailfiles,
			Set<Businessubject> businessubjects, Set<Trace> traces, Set<Stakeholder> stakeholders,
			Set<Project> projects, Set<Permission> permissions, Set<Phase> phases) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.businesssubjecttypes = businesssubjecttypes;
		this.controlchanges = controlchanges;
		this.systemusers = systemusers;
		this.taskhistories = taskhistories;
		this.activities = activities;
		this.taskdetails = taskdetails;
		this.permissionprofiles = permissionprofiles;
		this.portfolios = portfolios;
		this.typepayments = typepayments;
		this.marketlines = marketlines;
		this.riskmatrixes = riskmatrixes;
		this.groupteams = groupteams;
		this.documenttypes = documenttypes;
		this.documents = documents;
		this.profiles = profiles;
		this.userprofiles = userprofiles;
		this.documents_1 = documents_1;
		this.tasks = tasks;
		this.meetingrecords = meetingrecords;
		this.detailfiles = detailfiles;
		this.businessubjects = businessubjects;
		this.traces = traces;
		this.stakeholders = stakeholders;
		this.projects = projects;
		this.permissions = permissions;
		this.phases = phases;
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

	@Column(name = "name", nullable = false, length = 250)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "description", nullable = false, length = 250)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Businesssubjecttype> getBusinesssubjecttypes() {
		return this.businesssubjecttypes;
	}

	public void setBusinesssubjecttypes(Set<Businesssubjecttype> businesssubjecttypes) {
		this.businesssubjecttypes = businesssubjecttypes;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Controlchange> getControlchanges() {
		return this.controlchanges;
	}

	public void setControlchanges(Set<Controlchange> controlchanges) {
		this.controlchanges = controlchanges;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Systemuser> getSystemusers() {
		return this.systemusers;
	}

	public void setSystemusers(Set<Systemuser> systemusers) {
		this.systemusers = systemusers;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Taskhistory> getTaskhistories() {
		return this.taskhistories;
	}

	public void setTaskhistories(Set<Taskhistory> taskhistories) {
		this.taskhistories = taskhistories;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Activity> getActivities() {
		return this.activities;
	}

	public void setActivities(Set<Activity> activities) {
		this.activities = activities;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Taskdetail> getTaskdetails() {
		return this.taskdetails;
	}

	public void setTaskdetails(Set<Taskdetail> taskdetails) {
		this.taskdetails = taskdetails;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Permissionprofile> getPermissionprofiles() {
		return this.permissionprofiles;
	}

	public void setPermissionprofiles(Set<Permissionprofile> permissionprofiles) {
		this.permissionprofiles = permissionprofiles;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Portfolio> getPortfolios() {
		return this.portfolios;
	}

	public void setPortfolios(Set<Portfolio> portfolios) {
		this.portfolios = portfolios;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Typepayment> getTypepayments() {
		return this.typepayments;
	}

	public void setTypepayments(Set<Typepayment> typepayments) {
		this.typepayments = typepayments;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Marketline> getMarketlines() {
		return this.marketlines;
	}

	public void setMarketlines(Set<Marketline> marketlines) {
		this.marketlines = marketlines;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Riskmatrix> getRiskmatrixes() {
		return this.riskmatrixes;
	}

	public void setRiskmatrixes(Set<Riskmatrix> riskmatrixes) {
		this.riskmatrixes = riskmatrixes;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Groupteam> getGroupteams() {
		return this.groupteams;
	}

	public void setGroupteams(Set<Groupteam> groupteams) {
		this.groupteams = groupteams;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Documenttype> getDocumenttypes() {
		return this.documenttypes;
	}

	public void setDocumenttypes(Set<Documenttype> documenttypes) {
		this.documenttypes = documenttypes;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Document> getDocuments() {
		return this.documents;
	}

	public void setDocuments(Set<Document> documents) {
		this.documents = documents;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Profile> getProfiles() {
		return this.profiles;
	}

	public void setProfiles(Set<Profile> profiles) {
		this.profiles = profiles;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Userprofile> getUserprofiles() {
		return this.userprofiles;
	}

	public void setUserprofiles(Set<Userprofile> userprofiles) {
		this.userprofiles = userprofiles;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Document> getDocuments_1() {
		return this.documents_1;
	}

	public void setDocuments_1(Set<Document> documents_1) {
		this.documents_1 = documents_1;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Task> getTasks() {
		return this.tasks;
	}

	public void setTasks(Set<Task> tasks) {
		this.tasks = tasks;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Meetingrecord> getMeetingrecords() {
		return this.meetingrecords;
	}

	public void setMeetingrecords(Set<Meetingrecord> meetingrecords) {
		this.meetingrecords = meetingrecords;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Detailfile> getDetailfiles() {
		return this.detailfiles;
	}

	public void setDetailfiles(Set<Detailfile> detailfiles) {
		this.detailfiles = detailfiles;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Businessubject> getBusinessubjects() {
		return this.businessubjects;
	}

	public void setBusinessubjects(Set<Businessubject> businessubjects) {
		this.businessubjects = businessubjects;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Trace> getTraces() {
		return this.traces;
	}

	public void setTraces(Set<Trace> traces) {
		this.traces = traces;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Stakeholder> getStakeholders() {
		return this.stakeholders;
	}

	public void setStakeholders(Set<Stakeholder> stakeholders) {
		this.stakeholders = stakeholders;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Project> getProjects() {
		return this.projects;
	}

	public void setProjects(Set<Project> projects) {
		this.projects = projects;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Permission> getPermissions() {
		return this.permissions;
	}

	public void setPermissions(Set<Permission> permissions) {
		this.permissions = permissions;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "state")
	public Set<Phase> getPhases() {
		return this.phases;
	}

	public void setPhases(Set<Phase> phases) {
		this.phases = phases;
	}

}
