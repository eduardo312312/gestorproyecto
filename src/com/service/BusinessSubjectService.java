package com.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.model.Businesssubjecttype;
import com.model.Businessubject;
import com.model.Project;
import com.model.Task;
import com.repository.BusinessSubjectRepository;
import com.repository.ProjectRepository;

public class BusinessSubjectService {
	public BusinessSubjectRepository  repository;
	public BusinessSubjectService()
	{
		repository= new BusinessSubjectRepository();
	}
	public void save(Businessubject  businessubject)
	{		
		 
			this.repository.save(businessubject);
				
	}
	
	public Businessubject  get(int id)
	{
		return repository.get(id);
	}
	
	public Map BussinessSubjectToMap(Businessubject e){
		Map e1=new HashMap();		
		e1.put("id", e.getId());
		if(e.getName()!=null) e1.put("name", e.getName());
		if(e.getLastname()!=null) e1.put("description",e.getLastname());	
		if(e.getSecondlastname()!=null) e1.put("description",e.getSecondlastname());	
		if(e.getAddress()!=null) e1.put("description",e.getAddress());	
		if(e.getLocation()!=null) e1.put("description",e.getLocation());	
		if(e.getMail()!=null) e1.put("description",e.getTeams());	
		if(e.getPhone()!=null) e1.put("description",e.getPhone());	
		if(e.getPhone2()!=null) e1.put("description",e.getPhone2());	
		if(e.getStartdate()!=null) e1.put("description",e.getStartdate());	
		if(e.getEnddate()!=null) e1.put("description",e.getEnddate());	
		if(e.getUpdateat()!=null) e1.put("description",e.getUpdateat());	
		if(e.getBusinesssubjecttype()!=null) e1.put("description",e.getBusinesssubjecttype().getId());	
		if(e.getCreatedate()!=null) e1.put("description",e.getCreatedate());	
		if(e.getState()!=null) e1.put("description",e.getState().getId());	
		if(e.getBusinessubject()!=null) e1.put("description",e.getBusinessubject().getId());	
		if(e.getBirthday()!=null) e1.put("description",e.getBirthday());	
		
		return e1;
	}
	
	public Map BussinessSubjectTypeToMap(Businesssubjecttype e){
		
		Map e1=new HashMap();		
		e1.put("id", e.getId());
		if(e.getName()!=null) e1.put("name", e.getName());
		if(e.getDescription()!=null) e1.put("description",e.getDescription());	
		if(e.getCode()!=null) e1.put("code",e.getCode());		
		return e1;
	}
	
	public List<Map>  list_view_main(Map params,String businesssubjectid, String teamid, String portfolioid){
//		System.out.println("list view driver serv1");
		List<Object[]> list=new ArrayList<Object[]>();
		List<Map> list2=new ArrayList<Map>();

		
		
		list=this.repository.list_view_main(params, businesssubjectid,  teamid,  portfolioid);
		
		
		
		for(Object[] item:list){
			Map map=new HashMap();	
			Map map2=new HashMap();
			Map map3=new HashMap();

			Businessubject businessubject=(Businessubject) item[0];
			Businesssubjecttype businessubjecttype=(Businesssubjecttype) item[1];

			
			
			map2=BussinessSubjectToMap(businessubject);
			map3=BussinessSubjectTypeToMap(businessubjecttype);
			
			
			map.put("businesssubject",map2 );
			map.put("businesssubjecttype", map3);
			

			
	     	list2.add(map);
		}
		System.out.println("list view driver serv4");
		return list2;
	}
	
	
	
	
	
	
	
	
	
	
}
