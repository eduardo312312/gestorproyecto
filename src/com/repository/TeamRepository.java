package com.repository;

import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.Session;

import com.model.Controlchange;
import com.model.Groupteam;
import com.model.Meetingrecord;
import com.model.Riskmatrix;
import com.model.Salary;
import com.model.Team;

import util.HiberanteUtil;

public class TeamRepository {
	public Session session;
	public TeamRepository()
	{
		 session=HiberanteUtil.getSessionFactory().openSession();
	}
	public List<Object[]> list_view_main(Map params,String projectid) 
	{	
		System.out.println("rr11");
			Query query = session.createQuery("select t,p from Team t inner join t.project p where t.state.id!=2 and p.state.id!=2 " );
			
			if(projectid!="" )//projectid
			{
				query = session.createQuery("select t, p from Team t inner join t.project p where t.state.id!=2 and p.state.id!=2 and p.id="+projectid+" ");
				   
			}
			
			if(params!=null){
				return query.setMaxResults( Integer.parseInt(params.get("maxResults").toString()) )
						.setFirstResult( Integer.parseInt(params.get("firstResult").toString()) ).list();
			}else{
				return query.list();
			}	
				
    }
	
	public List<Object[]> get_groupteam_by_teamid(String teamid) 
	{	
		
		Query query = session.createQuery(" select gt, t, b from Groupteam gt inner join gt.team t inner join gt.businessubject b  where gt.state.id!=2 and t.id="+teamid+" " );
		return query.list();
			
				
    }
	
	public List<Object[]> delete_groupteam_by_teamid(String groupteamid) 
	{	
		
		Query query = session.createQuery(" update groupteam set stateid=2 where id="+groupteamid+" " );
		return query.list();
			
				
    }
	public Team  getteam(int id)
	{
		return (Team) session.get(Team.class, id);
	}
	
	public Groupteam  getgroupteam(int id)
	{
		return (Groupteam) session.get(Groupteam.class, id);
	}
	
	
	
	 public void save_groupteam(Groupteam groupteam)
	   {	
			session.beginTransaction();	 
			session.saveOrUpdate(groupteam);	
			session.getTransaction().commit();
		}
	 public void save_team(Team team)
	   {	
			session.beginTransaction();	 
			session.saveOrUpdate(team);	
			session.getTransaction().commit();
		}
	
}
