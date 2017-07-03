package com.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.model.Businessubject;
import com.model.Paymode;
import com.model.Portfolio;
import com.model.Project;
import com.model.Systemuser;
import com.model.Task;
import com.repository.ProjectRepository;
import com.repository.SystemuserRepository;

public class SystemuserService {
	public SystemuserRepository  repository;
	public SystemuserService()
	{
		repository= new SystemuserRepository();
	}
	public void save(Systemuser systemuser)
	{		
		 
			this.repository.save(systemuser);
				
	}
	
	public List<Map>  list_view_main(Map params,String businessubjectid){
 
		BusinessSubjectService busservice= new BusinessSubjectService();
		
		List<Object[]> list=new ArrayList<Object[]>();
		List<Map> list2=new ArrayList<Map>();
//		System.out.println("s1");
		list=this.repository.list_view_main(params,businessubjectid);
//		System.out.println("s2");
		for(Object[] item:list){
			Map map=new HashMap();	
			Map map2=new HashMap();
			Map map3=new HashMap();

			Systemuser systemuser=(Systemuser) item[0];		
			Businessubject businessubject=(Businessubject) item[1];	
			
			map2.put("systemuser", SystemuserToMap(systemuser));
			map2.put("businesssubject", busservice.BussinessSubjectToMap(businessubject));
					
	     	list2.add(map2);
	     	
		}
	
		return list2;
	}
	
	public Systemuser  get(int id)
	{
		return repository.get(id);
	}
	
	public Map SystemuserToMap(Systemuser e){
		BusinessSubjectService bussubjservice= new BusinessSubjectService();
		
		Map e1=new HashMap();		
		e1.put("id", e.getId());		
		if(e.getLogin()!=null) e1.put("login", e.getLogin());
		if(e.getPassword()!=null) e1.put("password",e.getPassword());	
		if(e.getCreatedate()!=null) e1.put("createdate",e.getCreatedate());	
		if(e.getBusinessubject()!=null) 			
		{
			
			e1.put("businesssubjectid", e.getBusinessubject().getId());	
			 e1.put("businesssubjectname", e.getBusinessubject().getName()+" "+e.getBusinessubject().getLastname()+" "+e.getBusinessubject().getSecondlastname()); 
			
		}		
	
		if(e.getState()!=null) e1.put("stateid",e.getState().getId());	
		if(e.getUpdateat()!=null) e1.put("updateat",e.getUpdateat());	
		if(e.getComment()!=null) e1.put("comment",e.getComment());
	
		//datos del cliente
		
		

		return e1;
	}
}
