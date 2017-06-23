package com.repository;

import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.Session;

import com.model.Controlchange;
import com.model.Meetingrecord;
import com.model.Riskmatrix;


import util.HiberanteUtil;

public class MeetingRecordRepository {
	public Session session;
	public MeetingRecordRepository()
	{
		 session=HiberanteUtil.getSessionFactory().openSession();
	}
	public List<Object[]> list_view_main(Map params,String businessubjectid) 
	{	
		System.out.println("rr11");
			Query query = session.createQuery("select m,b from Meetingrecord m inner join m.businessubject b where m.state.id!=2");
			
			if(businessubjectid!="" )//objmodel
			{
				query = session.createQuery("select m,b from Meetingrecord m inner join m.businessubject b where m.state.id!=2 and b.id="+businessubjectid+" ");
				   
			}
			
			if(params!=null){
				return query.setMaxResults( Integer.parseInt(params.get("maxResults").toString()) )
						.setFirstResult( Integer.parseInt(params.get("firstResult").toString()) ).list();
			}else{
				return query.list();
			}	
				
    }
	 public void save(Meetingrecord meetingrecord)
	   {	
			session.beginTransaction();	 
			session.saveOrUpdate(meetingrecord);	
			session.getTransaction().commit();
		}
	
}
