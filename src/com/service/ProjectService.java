package com.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.model.Businessubject;
import com.model.Paymode;
import com.model.Portfolio;
import com.model.Project;
import com.model.Task;
import com.repository.ProjectRepository;

public class ProjectService {
	public ProjectRepository  repository;
	public ProjectService()
	{
		repository= new ProjectRepository();
	}
	public void save(Project  project)
	{		
		 
			this.repository.save(project);
				
	}
	
	public List<Map>  list_all_projects(String portfolioid){

		List<Object[]> list=new ArrayList<Object[]>();
		List<Map> list2=new ArrayList<Map>();
		System.out.println("s1");
		list=this.repository.list_project(portfolioid);
		System.out.println("s2");
		for(Object[] item:list){
			Map map=new HashMap();	
			Map map2=new HashMap();

			Project project=(Project) item[0];		
			Portfolio porfolio=(Portfolio) item[1];	
			
			map2=ProjectToMap(project);

			
	     	list2.add(map2);
		}
	
		return list2;
	}
	
	public Project  get(int id)
	{
		return repository.get(id);
	}
	
	public Map ProjectToMap(Project e){
		BusinessSubjectService bussubjservice= new BusinessSubjectService();
		
		Map e1=new HashMap();		
		e1.put("id", e.getId());		
		if(e.getName()!=null) e1.put("name", e.getName());
		if(e.getDescription()!=null) e1.put("description",e.getDescription());	
		if(e.getComment()!=null) e1.put("comment",e.getComment());	
		if(e.getBusinessubjectByBusinesssubjectleaderid()!=null) 
			
		{
			Businessubject bus= bussubjservice.get(e.getBusinessubjectByBusinesssubjectleaderid().getId());
			e1.put("businesssubjectleaderid", e.getBusinessubjectByBusinesssubjectleaderid().getId() );	
			e1.put("businesssubjectleader",bus.getName().toString()+" "+bus.getLastname().toString()+" "+bus.getSecondlastname().toString());
		}
		
		if(e.getBusinessubjectByBusinesssubjectcontrolid()!=null) 
		{
			Businessubject bus= bussubjservice.get(e.getBusinessubjectByBusinesssubjectcontrolid().getId());
			e1.put("businesssubjectcontrolid", e.getBusinessubjectByBusinesssubjectcontrolid().getId() );	
			e1.put("businesssubjectcontrol",bus.getName().toString()+" "+bus.getLastname().toString()+" "+bus.getSecondlastname().toString());
		}
		if(e.getState()!=null) e1.put("stateid",e.getState().getId());	
		if(e.getStartdate()!=null) e1.put("startdate",e.getStartdate());	
		if(e.getEnddate()!=null) e1.put("enddate",e.getEnddate());
		if(e.getCreatedate()!=null) e1.put("createdate",e.getCreatedate());
		
		if(e.getDaysleft()!=null) e1.put("daysleft",e.getDaysleft());
		if(e.getTotalamount()!=null) e1.put("totalamount",e.getTotalamount());
		if(e.getLocation()!=null) e1.put("location",e.getLocation());
		if(e.getSize()!=null) e1.put("size",e.getSize());
		if(e.getTypepayment()!=null) e1.put("typepaymentid",e.getTypepayment().getId());
		if(e.getEntitytype()!=null) e1.put("entitytypeid",e.getEntitytype().getId());
		if(e.getInstitutionalcost()!=null) e1.put("institutionalcost",e.getInstitutionalcost());
		if(e.getMarketline()!=null) e1.put("marketid",e.getMarketline().getId());
		if(e.getBusinessline()!=null) e1.put("businesslineid",e.getBusinessline().getId());
		if(e.getDetailfile()!=null) e1.put("detailfileid",e.getDetailfile().getId());
		if(e.getState()!=null) e1.put("stateid",e.getState().getId());
		if(e.getPortfolio()!=null) e1.put("portfolioid",e.getPortfolio().getId());
		if(e.getShortname()!=null) e1.put("shortname",e.getShortname());
		if(e.getClientname()!=null) e1.put("clientname",e.getClientname());
		if(e.getClientcontact()!=null) e1.put("clientcontact",e.getClientcontact());
		if(e.getClientphone()!=null) e1.put("clientphone",e.getClientphone());
		if(e.getClientfax()!=null) e1.put("clientfax",e.getClientfax());
		if(e.getClientmovil()!=null) e1.put("clientmovil",e.getClientmovil());
		if(e.getClientmail()!=null) e1.put("clientmail",e.getClientmail());
		if(e.getClientaddress()!=null) e1.put("clientaddress",e.getClientaddress());
		
		
		
		//datos del cliente
		
		

		return e1;
	}
}
