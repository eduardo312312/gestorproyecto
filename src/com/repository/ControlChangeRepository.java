package com.repository;

import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.Session;

import com.model.Controlchange;
import com.model.Riskmatrix;


import util.HiberanteUtil;

public class ControlChangeRepository {
	public Session session;
	public ControlChangeRepository()
	{
		 session=HiberanteUtil.getSessionFactory().openSession();
	}
	public List<Object[]> list_view_main(Map params,String businessubjectid) 
	{	
		System.out.println("rr11");
			Query query = session.createQuery("select c,b from Controlchange c inner join c.businessubject b where c.state.id!=2");
			
			if(businessubjectid!="" )//objmodel
			{
				query = session.createQuery("select c,b from Controlchange c inner join c.businessubject b where c.state.id!=2 and b.id="+businessubjectid+" ");
				   
			}
			
			if(params!=null){
				return query.setMaxResults( Integer.parseInt(params.get("maxResults").toString()) )
						.setFirstResult( Integer.parseInt(params.get("firstResult").toString()) ).list();
			}else{
				return query.list();
			}	
				
    }
	 public void save(Controlchange controlchange)
	   {	
			session.beginTransaction();	 
			session.saveOrUpdate(controlchange);	
			session.getTransaction().commit();
		}
	
}
