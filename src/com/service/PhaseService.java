package com.service;

import com.model.Phase;
import com.model.Project;
import com.repository.PhaseRepository;
import com.repository.ProjectRepository;

public class PhaseService {

	
	public PhaseRepository  repository;
	public PhaseService()
	{
		repository= new PhaseRepository();
	}
	public void save(Phase  phase)
	{		
		 
			this.repository.save(phase);
				
	}
	
	public Phase  get(int id)
	{
		return repository.get(id);
	}
}
