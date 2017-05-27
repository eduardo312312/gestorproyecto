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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * Project generated by hbm2java
 */
@Entity
@Table(name = "project")
public class Project implements java.io.Serializable {

	private int id;
	private Businessubject businessubjectByBusinesssubjectcontrolid;
	private Businessline businessline;
	private Typepayment typepayment;
	private Businessubject businessubjectByBusinesssubjectleaderid;
	private Detailfile detailfile;
	private Marketline marketline;
	private Entitytype entitytype;
	private Portfolio portfolio;
	private State state;
	private String name;
	private String description;
	private String comment;
	private String state_1;
	private Date startdate;
	private Date enddate;
	private Date createdate;
	private Double daysleft;
	private Double totalamount;
	private Integer districtid;
	private String size;
	private String institutionalcost;
	private String shortname;
	private Set<Phase> phases = new HashSet<Phase>(0);

	public Project() {
	}

	public Project(int id) {
		this.id = id;
	}

	public Project(int id, Businessubject businessubjectByBusinesssubjectcontrolid, Businessline businessline,
			Typepayment typepayment, Businessubject businessubjectByBusinesssubjectleaderid, Detailfile detailfile,
			Marketline marketline, Entitytype entitytype, Portfolio portfolio, State state, String name,
			String description, String comment, String state_1, Date startdate, Date enddate, Date createdate,
			Double daysleft, Double totalamount, Integer districtid, String size, String institutionalcost,
			String shortname, Set<Phase> phases) {
		this.id = id;
		this.businessubjectByBusinesssubjectcontrolid = businessubjectByBusinesssubjectcontrolid;
		this.businessline = businessline;
		this.typepayment = typepayment;
		this.businessubjectByBusinesssubjectleaderid = businessubjectByBusinesssubjectleaderid;
		this.detailfile = detailfile;
		this.marketline = marketline;
		this.entitytype = entitytype;
		this.portfolio = portfolio;
		this.state = state;
		this.name = name;
		this.description = description;
		this.comment = comment;
		this.state_1 = state_1;
		this.startdate = startdate;
		this.enddate = enddate;
		this.createdate = createdate;
		this.daysleft = daysleft;
		this.totalamount = totalamount;
		this.districtid = districtid;
		this.size = size;
		this.institutionalcost = institutionalcost;
		this.shortname = shortname;
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

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "businesssubjectcontrolid")
	public Businessubject getBusinessubjectByBusinesssubjectcontrolid() {
		return this.businessubjectByBusinesssubjectcontrolid;
	}

	public void setBusinessubjectByBusinesssubjectcontrolid(Businessubject businessubjectByBusinesssubjectcontrolid) {
		this.businessubjectByBusinesssubjectcontrolid = businessubjectByBusinesssubjectcontrolid;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "businesslineid")
	public Businessline getBusinessline() {
		return this.businessline;
	}

	public void setBusinessline(Businessline businessline) {
		this.businessline = businessline;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "typepaymentid")
	public Typepayment getTypepayment() {
		return this.typepayment;
	}

	public void setTypepayment(Typepayment typepayment) {
		this.typepayment = typepayment;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "businesssubjectleaderid")
	public Businessubject getBusinessubjectByBusinesssubjectleaderid() {
		return this.businessubjectByBusinesssubjectleaderid;
	}

	public void setBusinessubjectByBusinesssubjectleaderid(Businessubject businessubjectByBusinesssubjectleaderid) {
		this.businessubjectByBusinesssubjectleaderid = businessubjectByBusinesssubjectleaderid;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "detailfileid")
	public Detailfile getDetailfile() {
		return this.detailfile;
	}

	public void setDetailfile(Detailfile detailfile) {
		this.detailfile = detailfile;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "marketid")
	public Marketline getMarketline() {
		return this.marketline;
	}

	public void setMarketline(Marketline marketline) {
		this.marketline = marketline;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "entitytypeid")
	public Entitytype getEntitytype() {
		return this.entitytype;
	}

	public void setEntitytype(Entitytype entitytype) {
		this.entitytype = entitytype;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "portfolioid")
	public Portfolio getPortfolio() {
		return this.portfolio;
	}

	public void setPortfolio(Portfolio portfolio) {
		this.portfolio = portfolio;
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

	@Column(name = "comment", length = 250)
	public String getComment() {
		return this.comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	@Column(name = "state", length = 250)
	public String getState_1() {
		return this.state_1;
	}

	public void setState_1(String state_1) {
		this.state_1 = state_1;
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

	@Column(name = "daysleft", precision = 17, scale = 17)
	public Double getDaysleft() {
		return this.daysleft;
	}

	public void setDaysleft(Double daysleft) {
		this.daysleft = daysleft;
	}

	@Column(name = "totalamount", precision = 17, scale = 17)
	public Double getTotalamount() {
		return this.totalamount;
	}

	public void setTotalamount(Double totalamount) {
		this.totalamount = totalamount;
	}

	@Column(name = "districtid")
	public Integer getDistrictid() {
		return this.districtid;
	}

	public void setDistrictid(Integer districtid) {
		this.districtid = districtid;
	}

	@Column(name = "size", length = 250)
	public String getSize() {
		return this.size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	@Column(name = "institutionalcost", length = 50)
	public String getInstitutionalcost() {
		return this.institutionalcost;
	}

	public void setInstitutionalcost(String institutionalcost) {
		this.institutionalcost = institutionalcost;
	}

	@Column(name = "shortname", length = 250)
	public String getShortname() {
		return this.shortname;
	}

	public void setShortname(String shortname) {
		this.shortname = shortname;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "project")
	public Set<Phase> getPhases() {
		return this.phases;
	}

	public void setPhases(Set<Phase> phases) {
		this.phases = phases;
	}

}
