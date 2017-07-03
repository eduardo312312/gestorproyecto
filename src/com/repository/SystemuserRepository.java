package com.repository;

import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.Session;

import com.model.Phase;
import com.model.Systemuser;

import util.HiberanteUtil;

public class SystemuserRepository {
	public Session session;
	public SystemuserRepository()
	{
		 session=HiberanteUtil.getSessionFactory().openSession();
	}

	
	public List<Object[]> list_view_main(Map params,String businesssubjectid) 
	{	
		System.out.println("rr11");
			Query query = session.createQuery("select s,b from Systemuser s inner join s.businessubject b where s.state.id!=2 and b.state.id!=2 " );
			
			if(businesssubjectid!="" )//projectid
			{
				query = session.createQuery("select s,b from Systemuser s inner join s.businessubject b where s.state.id!=2 and b.state.id!=2 and b.id="+businesssubjectid+" ");
				   
			}
			
			if(params!=null){
				return query.setMaxResults( Integer.parseInt(params.get("maxResults").toString()) )
						.setFirstResult( Integer.parseInt(params.get("firstResult").toString()) ).list();
			}else{
				return query.list();
			}	
				
    }
	
	   public void save(Systemuser  systemuser)
	   {	
			session.beginTransaction();	 
			session.saveOrUpdate(systemuser);	
			session.getTransaction().commit();
		}
	
	   public Systemuser  get(int id)
		{
			return (Systemuser) session.get(Systemuser.class, id);
		}
}
