package com.service;

import com.model.Businessubject;
import com.model.Project;
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
}
