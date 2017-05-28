package com.service;


import java.util.HashMap;
import java.util.Map;

import com.model.Activity;
import com.model.Task;
import com.repository.ActivityRepository;
import com.repository.TaskRepository;

public class ActivityService {
	public ActivityRepository  repository;
	public ActivityService()
	{
		repository= new ActivityRepository();
	}
	public void save(Activity  activity)
	{		
		 
			this.repository.save(activity);
				
	}
	
	public Map ActivityToMap(Activity e){
		Map e1=new HashMap();		
		e1.put("id", e.getId());
		if(e.getName()!=null) e1.put("name", e.getName());
		if(e.getDescription()!=null) e1.put("description",e.getDescription());	
		if(e.getComment()!=null) e1.put("comment",e.getComment());	
		if(e.getState()!=null) e1.put("stateid",e.getState().getId());	
		if(e.getStartdate()!=null) e1.put("startdate",e.getStartdate());	
		if(e.getEnddate()!=null) e1.put("enddate",e.getEnddate());
		if(e.getCreatedate()!=null) e1.put("createdate",e.getCreatedate());
//		if(e.getEstimatehour()!=null) e1.put("estimatehour",e.getEstimatehour());
//		if(e.getRealhour()!=null) e1.put("realhour",e.getRealhour());
//		if(e.getBusinessubjectByBusinesssubjectcreatorid()!=null) e1.put("businesssubjectcreatorid",e.getBusinessubjectByBusinesssubjectcreatorid().getId());
//		if(e.getBusinessubjectByBusinesssubjectmodifierid()!=null) e1.put("businesssubjectmodifierid",e.getBusinessubjectByBusinesssubjectmodifierid().getId());
//		if(e.getBusinessubjectByBusinesssubjectresponsableid()!=null) e1.put("businesssubjectresponsableid",e.getBusinessubjectByBusinesssubjectresponsableid().getId());
		if(e.getChangedate()!=null) e1.put("changedate",e.getChangedate());
		if(e.getShortname()!=null) e1.put("shortname",e.getShortname());
		if(e.getUpdateat()!=null) e1.put("updateat",e.getUpdateat());
//		if(e.getActivity()!=null) e1.put("activityid",e.getActivity().getId());
//		if(e.getRealamount()!=null) e1.put("realamount",e.getRealamount());
//		if(e.getEstimateamount()!=null) e1.put("estimateamount",e.getEstimateamount());	
		return e1;
	}
}
