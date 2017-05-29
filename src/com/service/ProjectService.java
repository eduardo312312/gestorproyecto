package com.service;

import java.util.HashMap;
import java.util.Map;

import com.model.Project;
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
	
	public Map ProjectToMap(Project e){
		Map e1=new HashMap();		
		e1.put("id", e.getId());		
		if(e.getName()!=null) e1.put("name", e.getName());
		if(e.getDescription()!=null) e1.put("description",e.getDescription());	
		if(e.getComment()!=null) e1.put("comment",e.getComment());	
		if(e.getState()!=null) e1.put("stateid",e.getState().getId());	
		if(e.getStartdate()!=null) e1.put("startdate",e.getStartdate());	
		if(e.getEnddate()!=null) e1.put("enddate",e.getEnddate());
		if(e.getCreatedate()!=null) e1.put("createdate",e.getCreatedate());
		
		
		
		//datos del cliente
		
		

		return e1;
	}
}
