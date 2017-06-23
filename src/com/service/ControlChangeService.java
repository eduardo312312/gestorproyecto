package com.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.model.Controlchange;
import com.model.Riskmatrix;
import com.model.Task;
import com.repository.ActivityRepository;
import com.repository.BusinessSubjectRepository;
import com.repository.ControlChangeRepository;
import com.repository.RiskRepository;

public class ControlChangeService {
	public ControlChangeRepository  repository;
	public String projectname="";
	public String projectid="";
	    
		public ControlChangeService()
		{
			repository= new ControlChangeRepository();
		}
		public void save(Controlchange controlchange)
		{		
			 
				this.repository.save(controlchange);
					
		}
		
		public Map ControlchangeToMap(Controlchange e){		
			Map e1=new HashMap();		
			e1.put("id", e.getId());
			if(e.getBusinessubject()!=null){ e1.put("businesssubjectid", e.getBusinessubject().getId()); e1.put("businesssubjectname", e.getBusinessubject().getName()+" "+e.getBusinessubject().getLastname()+" "+e.getBusinessubject().getSecondlastname()); }
			if(e.getChangedate()!=null) e1.put("changedate", e.getChangedate().getTime());
			if(e.getDescription()!=null) e1.put("description", e.getDescription());
			if(e.getComment()!=null) e1.put("comment", e.getComment());
			if(e.getCreatedate()!=null) e1.put("createdate", e.getCreatedate().getTime());
			if(e.getUpdateat()!=null) e1.put("updateat", e.getUpdateat().getTime());
			if(e.getState()!=null) e1.put("stateid", e.getState().getId());
			if(e.getPriority()!=null) e1.put("priority", e.getPriority());
	
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

				Controlchange controlchange=(Controlchange) item[0];			
				map2=this.ControlchangeToMap(controlchange);

				
		     	list2.add(map2);
			}
//			System.out.println("list view driver serv4");
			return list2;
		}
}
