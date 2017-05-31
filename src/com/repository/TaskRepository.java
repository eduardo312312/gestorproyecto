package com.repository;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.Session;

import com.model.Assistance;
import com.model.Task;

import util.HiberanteUtil;

public class TaskRepository {
	public Session session;
	public TaskRepository()
	{
		 session=HiberanteUtil.getSessionFactory().openSession();
	}
	public List<Object[]> list_view_main(Map params,String activityid) 
	{	
		System.out.println("rr11");
			Query query = session.createQuery("select a,b from Task b inner join b.activity a where b.state.id!=2");
			
			if(activityid!="" )//objmodel
			{
				query = session.createQuery("select a,b from Task b inner join b.activity a where a.id="+activityid+" and b.state.id!=2");
				   
			}
			
			if(params!=null){
				return query.setMaxResults( Integer.parseInt(params.get("maxResults").toString()) )
						.setFirstResult( Integer.parseInt(params.get("firstResult").toString()) ).list();
			}else{
				return query.list();
			}	
				
    }
	//devuelve a detalle de projecto
	public List<Object[]> get_projects(String portfolioid) 
	{	
		
			Query query = session.createQuery("select p,pf from Project p inner join p.portfolio pf  where p.state.id!=2 and pf.state.id!=2");
			
			if(portfolioid!="" )//objmodel
			{
				query = session.createQuery("select p,pf from Project p inner join p.portfolio pf  where p.portfolio.id="+portfolioid+" and p.state.id!=2 and pf.state.id!=2");
				   
			}
			
			return query.list();
				
    } 
	//devuelve a detalle de fase
	public List<Object[]> get_phases(String projectid) 
	{	
		
			Query query = session.createQuery("select p,ph from Phase ph inner join ph.project p where p.state.id!=2 and ph.state.id!=2 order by ph.id asc");
			
			if(projectid!="" )//objmodel
			{
				
				query = session.createQuery("select p,ph from Phase ph inner join ph.project p where ph.project.id="+projectid+" and ph.state.id!=2 and p.state.id!=2 order by ph.id asc");
				   
			}
			
			return query.list();
				
    }
	//devuelve a detalle de actividad
	public List<Object[]> get_activities(String phaseid) 
	{	
//		System.out.println("ACTIVIDADDDDDD222 "+phaseid);
		
			Query query = session.createQuery("select a,p,pr from Activity a inner join a.phase p inner join p.project pr where a.state.id!=2 and p.state.id!=2 and pr.id=1");
			
			if(phaseid!="" )//objmodel
			{
//				System.out.println("ACTIVIDADDDDDD33 "+phaseid);
				query = session.createQuery("select a,p,pr from Activity a inner join a.phase p inner join p.project pr where p.id="+phaseid+" ");
//				System.out.println("ACTIVIDADDDDDD444 "+query.list().size());   
			}
			
			return query.list();
				
    }
	
	public List<Object[]> get_tasks(String activityid) 
	{	
		
		Query query = session.createQuery("select t,a from Task t inner join t.activity a where t.state.id!=2 and a.state.id!=2");
		
		if(activityid!="")//objmodel
		{
			query = session.createQuery("select t,a from Task t inner join t.activity a where t.activity.id="+activityid+" and t.state.id!=2 and a.state.id!=2");
			   
		}
		
		return query.list();
				
    }
	
	//devuielve an detallde tareas
	public List<Object[]> get_project_phases_activities(String projectid) 
	{	
		
			Query query = session.createQuery("select t,a,p,pr from Task t inner join t.activity a inner join a.phase p inner join p.project pr where t.state.id!=2 and a.state.id!=2 and p.state.id!=2 order by p.id asc ");
			
			if(projectid!="" )//objmodel
			{
				query = session.createQuery("select t,a,p,pr from Task t inner join t.activity a inner join a.phase p inner join p.project pr where pr.id="+projectid+" and a.state.id!=2 and p.state.id!=2 order by p.id asc ");
				   
			}
			
			return query.list();
				
    }
	
	   public void save(Task  task)
	   {	
			session.beginTransaction();	 
			session.saveOrUpdate(task);	
			session.getTransaction().commit();
		}
	
	 

	

	
}
