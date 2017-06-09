package com.repository;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.model.Project;

import util.HiberanteUtil;

public class ProjectRepository {
	public Session session;
	public ProjectRepository()
	{
		 session=HiberanteUtil.getSessionFactory().openSession();
	}
	public List<Object[]> list_project(String portfolioid) 
		{	
		System.out.println("r1");
		Query query=session.createQuery("select p,port from Project p inner join p.portfolio port where p.state.id!=2 and port.state.id!=2");
		System.out.println("r3");
		   if(portfolioid!="")		
			 query = session.createQuery("select p,port from Project p inner join p.portfolio port where p.portfolio.id="+portfolioid+" and p.state.id!=2 and port.state.id!=2");

	        return query.list();				
		}

	
	   public void save(Project  project)
	   {	
			session.beginTransaction();	 
			session.saveOrUpdate(project);	
			session.getTransaction().commit();
		}
	
	   public Project  get(int id)
		{
			return (Project) session.get(Project.class, id);
		}
}
