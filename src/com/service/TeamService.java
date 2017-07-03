package com.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.model.Controlchange;
import com.model.Groupteam;
import com.model.Meetingrecord;
import com.model.Riskmatrix;
import com.model.Task;
import com.model.Team;
import com.repository.ActivityRepository;
import com.repository.BusinessSubjectRepository;
import com.repository.ControlChangeRepository;
import com.repository.MeetingRecordRepository;
import com.repository.RiskRepository;
import com.repository.TeamRepository;

public class TeamService {
	public TeamRepository  repository;

	    
		public TeamService()
		{
			repository= new TeamRepository();
		}
		
		public void save_team(Team team)
		{		
			 
				this.repository.save_team(team);
					
		}
		public void delete_teamdetail_in_groupteam(String id)
		{		
			 
				this.repository.delete_groupteam_by_teamid(id);
					
		}
		
		public void save_gruoupteam(Groupteam groupteam)
		{		
			 
				this.repository.save_groupteam(groupteam);
					
		}
		
		public List<Map>  list_view_main(Map params,String teamid){
//			System.out.println("list view driver serv1");
			List<Object[]> list=new ArrayList<Object[]>();
			List<Map> list2=new ArrayList<Map>();

			
			System.out.println("ss11l");
			
			list=this.repository.list_view_main(params,teamid);
			System.out.println("s222l");
			
			
			for(Object[] item:list){
			
				Map map=new HashMap();	
				Map map2=new HashMap();

				Team team=(Team) item[0];
				System.out.println(team.getId()+team.getName());
				map2=this.TeamToMap(team,true);
			

				
		     	list2.add(map2);
			}
			System.out.println("list view driver serv4l");
			return list2;
		}
		
		public List<Map>  list_groupteam_by_teamid(String teamid){
//			System.out.println("list view driver serv1");
			List<Object[]> list=new ArrayList<Object[]>();
			List<Map> list2=new ArrayList<Map>();

			
			//System.out.println("ss11");
			
			list=this.repository.get_groupteam_by_teamid(teamid);
			//System.out.println("s222");			
			for(Object[] item:list){
				Map map=new HashMap();	
				Map map2=new HashMap();

				Groupteam groupteam=(Groupteam) item[0];			
				map2=this.GroupTeamToMap(groupteam);				
		     	list2.add(map2);
			}
		//	System.out.println("list view driver serv4");
			return list2;
		}
		
		
		public Map GroupTeamToMap(Groupteam e)
		{
			Map e1=new HashMap();		
			e1.put("groupteamid", e.getId());
			if(e.getCreatedate()!=null){ e1.put("createdate",e.getCreatedate());}
			if(e.getDescription()!=null){ e1.put("description",e.getDescription());}
			if(e.getBusinessubject()!=null)
			{
				e1.put("businesssubjectid",e.getBusinessubject().getId());
				e1.put("personal", e.getBusinessubject().getName()+" "+e.getBusinessubject().getLastname()+" "+e.getBusinessubject().getSecondlastname());
				e1.put("role",e.getBusinessubject().getBusinesssubjecttype().getName());
			    
			}
			if(e.getTeam()!=null)
			{
				e1.put("teamid",e.getTeam().getId());
				e1.put("teamname",e.getTeam().getName());
			}
			
			if(e.getState()!=null){ e1.put("stateid",e.getState().getId());}
			if(e.getCost1()!=null){ e1.put("costbyhour",e.getCost1());}
			if(e.getCost2()!=null){ e1.put("hourbyday",e.getCost2());}
			
			
	
			return e1;
			
		}
		
		public Map TeamToMap(Team e,Boolean showdetail){		
			Map e1=new HashMap();		
			e1.put("id", e.getId());
			if(e.getName()!=null){ e1.put("name",e.getName());}
			if(e.getDescription()!=null) e1.put("description", e.getDescription());
			if(e.getBusinessubject()!=null)
			{
				e1.put("businesssubjectid", e.getBusinessubject().getId());
				e1.put("leader", e.getBusinessubject().getName()+" "+e.getBusinessubject().getLastname()+" "+e.getBusinessubject().getSecondlastname());
			    
			}			
			if(e.getCreatedate()!=null) e1.put("createdate", e.getCreatedate().getTime());
			if(e.getUpdateat()!=null) e1.put("updateat", e.getUpdateat().getTime());
			if(e.getState()!=null) e1.put("stateid", e.getState().getId());
			if(e.getProject()!=null) 
				{
				
				e1.put("projectid", e.getProject().getId());
				e1.put("projectname", e.getProject().getName());
				}
			if(showdetail==true)
			{
				try{
					System.out.println("id*"+e.getId());
				e1.put("detail", list_groupteam_by_teamid( Integer.toString(e.getId())) ) ;
				
				}
				 catch (Exception ex) 
				{
					System.out.println(ex.getMessage());
				}
			}
			
	
			return e1;
		}
		
		
	
}
