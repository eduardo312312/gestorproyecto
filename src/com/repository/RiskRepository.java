package com.repository;

import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.Session;

import com.model.Riskmatrix;


import util.HiberanteUtil;

public class RiskRepository {
	public Session session;
	public RiskRepository()
	{
		 session=HiberanteUtil.getSessionFactory().openSession();
	}
	public List<Object[]> list_view_main(Map params,String businessubjectid) 
	{	
		System.out.println("rr11");
			Query query = session.createQuery("select r,b from Riskmatrix r inner join r.businessubject b where r.state.id!=2");
			
			if(businessubjectid!="" )//objmodel
			{
				query = session.createQuery("select r,b from Riskmatrix r inner join r.businessubject b where r.state.id!=2 and b.id="+businessubjectid+" ");
				   
			}
			
			if(params!=null){
				return query.setMaxResults( Integer.parseInt(params.get("maxResults").toString()) )
						.setFirstResult( Integer.parseInt(params.get("firstResult").toString()) ).list();
			}else{
				return query.list();
			}	
				
    }
	 public void save(Riskmatrix  riskMatrix)
	   {	
			session.beginTransaction();	 
			session.saveOrUpdate(riskMatrix);	
			session.getTransaction().commit();
		}
	
}
