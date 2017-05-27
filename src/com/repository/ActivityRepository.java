package com.repository;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.model.Activity;
import com.model.Task;



import util.HiberanteUtil;





public class ActivityRepository {
	public Session session;
	public ActivityRepository()
	{
		 session=HiberanteUtil.getSessionFactory().openSession();
	}
	public List<Object[]> list_activity() 
		{	
			String projectid="1";
			System.out.println("rr11");
			Query query = session.createQuery("select p,a from Activity a inner join a.phase p where p.project.id="+projectid+"");
			System.out.println("rr22");
	        return query.list();				
		}

	
	   public void save(Activity  activity)
	   {	
			session.beginTransaction();	 
			session.saveOrUpdate(activity);	
			session.getTransaction().commit();
		}
	
	   public Activity  get(int id)
		{
			return (Activity) session.get(Activity.class, id);
		}

}
