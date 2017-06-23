package com.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.model.Riskmatrix;
import com.model.Task;
import com.repository.ActivityRepository;
import com.repository.BusinessSubjectRepository;
import com.repository.RiskRepository;

public class RiskService {
	public RiskRepository  repository;
	public String projectname="";
	public String projectid="";
	    
		public RiskService()
		{
			repository= new RiskRepository();
		}
		public void save(Riskmatrix riskmatrix)
		{		
			 
				this.repository.save(riskmatrix);
					
		}
		
		public Map RiskMatrixToMap(Riskmatrix e){
			
			
			Map e1=new HashMap();		
			e1.put("id", e.getId());
			if(e.getName()!=null) e1.put("name", e.getName());
			if(e.getDescriptiontype()!=null) e1.put("descriptiontype", e.getDescriptiontype());
			if(e.getIdentificationdate()!=null) e1.put("identificationdate", e.getIdentificationdate().getTime());
			if(e.getOrigin()!=null) e1.put("origin", e.getOrigin());
			if(e.getDescription()!=null) e1.put("description", e.getDescription());
			if(e.getImpact()!=null) e1.put("impact", e.getImpact());
			if(e.getImpactgrade()!=null) e1.put("impactgrade", e.getImpactgrade());
			if(e.getProbability()!=null) e1.put("probability", e.getProbability());
			if(e.getSeverity()!=null) e1.put("severity", e.getSeverity());
			if(e.getTrigger()!=null) e1.put("trigger", e.getTrigger());
			if(e.getActionplan()!=null) e1.put("actionplan", e.getActionplan());
			if(e.getEjecutiondate()!=null) e1.put("ejecutiondate", e.getEjecutiondate().getTime());
			if(e.getObservation()!=null) e1.put("observation", e.getObservation());
			if(e.getState_1()!=null) e1.put("state", e.getState_1());
			if(e.getState()!=null) e1.put("stateid", e.getState().getId());
			if(e.getCreatedate()!=null) e1.put("createdate", e.getCreatedate().getTime());
			if(e.getUpdateat()!=null) e1.put("updateat", e.getUpdateat());
			if(e.getBusinessubject()!=null)
				{
				e1.put("businesssubjectid", e.getBusinessubject().getId());
				e1.put("businesssubjectname", e.getBusinessubject().getName()+" "+e.getBusinessubject().getLastname()+" "+e.getBusinessubject().getSecondlastname());
				}
			if(e.getCost1()!=null) e1.put("cost1", e.getCost1());
			if(e.getCost2()!=null) e1.put("cost2", e.getCost2());
			
			
			
			
		
			return e1;
		}
		
		
		public List<Map>  list_view_main(Map params,String businessubjectid){
//			System.out.println("list view driver serv1");
			List<Object[]> list=new ArrayList<Object[]>();
			List<Map> list2=new ArrayList<Map>();

			
//			System.out.println("ss11");
			
			list=this.repository.list_view_main(params,businessubjectid);
//			System.out.println("s222");
			
			
			for(Object[] item:list){
				Map map=new HashMap();	
				Map map2=new HashMap();

				Riskmatrix riskmatrix=(Riskmatrix) item[0];			
				map2=this.RiskMatrixToMap(riskmatrix);

				
		     	list2.add(map2);
			}
//			System.out.println("list view driver serv4");
			return list2;
		}
}
