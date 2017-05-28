package com.repository;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.model.Phase;

import util.HiberanteUtil;

public class PhaseRepository {
	public Session session;
	public PhaseRepository()
	{
		 session=HiberanteUtil.getSessionFactory().openSession();
	}
	public List<Object[]> list_phase(String projectid) 
		{	
		
		Query query = session.createQuery("select p,pr from Phase p inner join p.project pr where pr.state.id!=2 and p.state.id!=2  ");		
			if(projectid!="")
			query = session.createQuery("select p,pr from Phase p inner join p.project pr where pr.project.id="+projectid+" and pr.state.id!=2 and p.state.id!=2  ");
			
	        return query.list();				
		}

	
	   public void save(Phase  phase)
	   {	
			session.beginTransaction();	 
			session.saveOrUpdate(phase);	
			session.getTransaction().commit();
		}
	
	   public Phase  get(int id)
		{
			return (Phase) session.get(Phase.class, id);
		}
}
