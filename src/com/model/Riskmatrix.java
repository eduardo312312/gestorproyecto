package com.model;
// Generated 21/06/2017 07:36:26 AM by Hibernate Tools 3.4.0.CR1

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
 * Riskmatrix generated by hbm2java
 */
@Entity
@Table(name = "riskmatrix")
public class Riskmatrix implements java.io.Serializable {

	private int id;
	private Businessubject businessubject;
	private State state;
	private String name;
	private String descriptiontype;
	private Date identificationdate;
	private String origin;
	private String description;
	private String impact;
	private String impactgrade;
	private String probability;
	private String severity;
	private String trigger;
	private String actionplan;
	private Date ejecutiondate;
	private String observation;
	private String state_1;
	private Date createdate;
	private Date updateat;
	private Double cost1;
	private Double cost2;

	public Riskmatrix() {
	}

	public Riskmatrix(int id) {
		this.id = id;
	}

	public Riskmatrix(int id, Businessubject businessubject, State state, String name, String descriptiontype,
			Date identificationdate, String origin, String description, String impact, String impactgrade,
			String probability, String severity, String trigger, String actionplan, Date ejecutiondate,
			String observation, String state_1, Date createdate, Date updateat, Double cost1, Double cost2) {
		this.id = id;
		this.businessubject = businessubject;
		this.state = state;
		this.name = name;
		this.descriptiontype = descriptiontype;
		this.identificationdate = identificationdate;
		this.origin = origin;
		this.description = description;
		this.impact = impact;
		this.impactgrade = impactgrade;
		this.probability = probability;
		this.severity = severity;
		this.trigger = trigger;
		this.actionplan = actionplan;
		this.ejecutiondate = ejecutiondate;
		this.observation = observation;
		this.state_1 = state_1;
		this.createdate = createdate;
		this.updateat = updateat;
		this.cost1 = cost1;
		this.cost2 = cost2;
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
	@JoinColumn(name = "businesssujbectid")
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

	@Column(name = "descriptiontype", length = 250)
	public String getDescriptiontype() {
		return this.descriptiontype;
	}

	public void setDescriptiontype(String descriptiontype) {
		this.descriptiontype = descriptiontype;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "identificationdate", length = 13)
	public Date getIdentificationdate() {
		return this.identificationdate;
	}

	public void setIdentificationdate(Date identificationdate) {
		this.identificationdate = identificationdate;
	}

	@Column(name = "origin", length = 250)
	public String getOrigin() {
		return this.origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	@Column(name = "description", length = 250)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name = "impact", length = 250)
	public String getImpact() {
		return this.impact;
	}

	public void setImpact(String impact) {
		this.impact = impact;
	}

	@Column(name = "impactgrade", length = 250)
	public String getImpactgrade() {
		return this.impactgrade;
	}

	public void setImpactgrade(String impactgrade) {
		this.impactgrade = impactgrade;
	}

	@Column(name = "probability", length = 250)
	public String getProbability() {
		return this.probability;
	}

	public void setProbability(String probability) {
		this.probability = probability;
	}

	@Column(name = "severity", length = 250)
	public String getSeverity() {
		return this.severity;
	}

	public void setSeverity(String severity) {
		this.severity = severity;
	}

	@Column(name = "trigger", length = 250)
	public String getTrigger() {
		return this.trigger;
	}

	public void setTrigger(String trigger) {
		this.trigger = trigger;
	}

	@Column(name = "actionplan", length = 250)
	public String getActionplan() {
		return this.actionplan;
	}

	public void setActionplan(String actionplan) {
		this.actionplan = actionplan;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "ejecutiondate", length = 13)
	public Date getEjecutiondate() {
		return this.ejecutiondate;
	}

	public void setEjecutiondate(Date ejecutiondate) {
		this.ejecutiondate = ejecutiondate;
	}

	@Column(name = "observation", length = 250)
	public String getObservation() {
		return this.observation;
	}

	public void setObservation(String observation) {
		this.observation = observation;
	}

	@Column(name = "state", length = 50)
	public String getState_1() {
		return this.state_1;
	}

	public void setState_1(String state_1) {
		this.state_1 = state_1;
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

	@Column(name = "cost1", precision = 17, scale = 17)
	public Double getCost1() {
		return this.cost1;
	}

	public void setCost1(Double cost1) {
		this.cost1 = cost1;
	}

	@Column(name = "cost2", precision = 17, scale = 17)
	public Double getCost2() {
		return this.cost2;
	}

	public void setCost2(Double cost2) {
		this.cost2 = cost2;
	}

}