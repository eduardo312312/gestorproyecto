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
 * Taskdetail generated by hbm2java
 */
@Entity
@Table(name = "taskdetail")
public class Taskdetail implements java.io.Serializable {

	private int id;
	private Task task;
	private State state;
	private Integer predecessortaskid;
	private Integer descendanttaskid;
	private Integer comment;
	private Date createdate;
	private Date updateat;

	public Taskdetail() {
	}

	public Taskdetail(int id) {
		this.id = id;
	}

	public Taskdetail(int id, Task task, State state, Integer predecessortaskid, Integer descendanttaskid,
			Integer comment, Date createdate, Date updateat) {
		this.id = id;
		this.task = task;
		this.state = state;
		this.predecessortaskid = predecessortaskid;
		this.descendanttaskid = descendanttaskid;
		this.comment = comment;
		this.createdate = createdate;
		this.updateat = updateat;
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
	@JoinColumn(name = "taskid")
	public Task getTask() {
		return this.task;
	}

	public void setTask(Task task) {
		this.task = task;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "stateid")
	public State getState() {
		return this.state;
	}

	public void setState(State state) {
		this.state = state;
	}

	@Column(name = "predecessortaskid")
	public Integer getPredecessortaskid() {
		return this.predecessortaskid;
	}

	public void setPredecessortaskid(Integer predecessortaskid) {
		this.predecessortaskid = predecessortaskid;
	}

	@Column(name = "descendanttaskid")
	public Integer getDescendanttaskid() {
		return this.descendanttaskid;
	}

	public void setDescendanttaskid(Integer descendanttaskid) {
		this.descendanttaskid = descendanttaskid;
	}

	@Column(name = "comment")
	public Integer getComment() {
		return this.comment;
	}

	public void setComment(Integer comment) {
		this.comment = comment;
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

}
