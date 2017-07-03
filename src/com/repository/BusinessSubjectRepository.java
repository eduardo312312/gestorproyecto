package com.repository;

import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.Session;


import com.model.Businessubject;
import com.model.Stakeholder;

import util.HiberanteUtil;

public class BusinessSubjectRepository {
	public Session session;
	public BusinessSubjectRepository()
	{
		 session=HiberanteUtil.getSessionFactory().openSession();
	}
	public List<Object[]> list_project(String portfolioid) 
		{	
		Query query=session.createQuery("select p,port from BusinessSubject p inner join p.portfolio port where p.state.id!=2 and port.state.id!=2");
		   if(portfolioid!="")		
			 query = session.createQuery("select p,port from BusinessSubject p inner join p.portfolio port where p.portfolio.id="+portfolioid+" where p.state.id!=2 and port.state.id!=2");

	        return query.list();				
		}
	
	
	
	
	public List<Object[]> list_view_main(Map params,String businesssubjectid, String teamid, String portfolioid) 
	{	
		System.out.println("rr11");
			Query query = session.createQuery("select b,bt from Businessubject b inner join b.businesssubjecttype bt where b.state.id!=2 order by b.id asc");
			
			if(teamid!="" )//objmodel
			{
				query = session.createQuery("select b,bt from Businessubject b inner join b.businesssubjecttype bt where a.id="+teamid+" and b.state.id!=2");
				   
			}
			
			if(params!=null){
				return query.setMaxResults( Integer.parseInt(params.get("maxResults").toString()) )
						.setFirstResult( Integer.parseInt(params.get("firstResult").toString()) ).list();
			}else{
				return query.list();
			}	
				
    }
	
	public List<Object[]> list_view_main_stakeholders(Map params,String projectid) 
	{	
		System.out.println("rr11");
			Query query = session.createQuery("select s,b from Stakeholder s inner join s.businessubject b where s.state.id!=2 order by s.id asc");
			
			if(projectid!="" )//objmodel
			{
				query = session.createQuery("select s,b from Stakeholder s inner join s.businessubject b where s.state.id!=2 and s.project.id="+projectid+" and b. order by s.id asc");
				   
			}
			
			if(params!=null){
				return query.setMaxResults( Integer.parseInt(params.get("maxResults").toString()) )
						.setFirstResult( Integer.parseInt(params.get("firstResult").toString()) ).list();
			}else{
				return query.list();
			}	
				
    }
	
	public List<Object[]> get_all_roles() 
	{	
		
			Query query = session.createQuery("select bst, s from Businesssubjecttype bst inner join bst.state s where s.id=6  ");
			return query.list();
			
				
    }
		

	
	   public void save(Businessubject  project)
	   {	
			session.beginTransaction();	 
			session.saveOrUpdate(project);	
			session.getTransaction().commit();
		}
	   
	   public void save_stakeholder(Stakeholder  stakeholder)
	   {	
			session.beginTransaction();	 
			session.saveOrUpdate(stakeholder);	
			session.getTransaction().commit();
		}
	
	   public Businessubject  get(int id)
		{
			return (Businessubject) session.get(Businessubject.class, id);
		}
}
