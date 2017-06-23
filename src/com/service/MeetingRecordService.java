package com.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.model.Controlchange;
import com.model.Meetingrecord;
import com.model.Riskmatrix;
import com.model.Task;
import com.repository.ActivityRepository;
import com.repository.BusinessSubjectRepository;
import com.repository.ControlChangeRepository;
import com.repository.MeetingRecordRepository;
import com.repository.RiskRepository;

public class MeetingRecordService {
	public MeetingRecordRepository  repository;
	public String projectname="";
	public String projectid="";
	    
		public MeetingRecordService()
		{
			repository= new MeetingRecordRepository();
		}
		public void save(Meetingrecord meetingrecord)
		{		
			 
				this.repository.save(meetingrecord);
					
		}
		
		public Map MeetingRecordToMap(Meetingrecord e){		
			Map e1=new HashMap();		
			e1.put("id", e.getId());
			if(e.getBusinessubject()!=null){ e1.put("businesssubjectid", e.getBusinessubject().getId()); e1.put("businesssubjectname", e.getBusinessubject().getName()+" "+e.getBusinessubject().getLastname()+" "+e.getBusinessubject().getSecondlastname()); }
			if(e.getMeetname()!=null) e1.put("meetname", e.getMeetname());
			if(e.getMeetdate()!=null) e1.put("meetdate", e.getMeetdate().getTime());
			if(e.getCreatedate()!=null) e1.put("createdate", e.getCreatedate().getTime());
			if(e.getUpdateat()!=null) e1.put("createdate", e.getCreatedate().getTime());
			if(e.getState()!=null) e1.put("stateid", e.getState().getId());
			if(e.getPriority()!=null) e1.put("priority", e.getPriority());
			if(e.getDescription()!=null) e1.put("description", e.getDescription());
			if(e.getLocation()!=null) e1.put("location", e.getLocation());
			if(e.getComment()!=null) e1.put("comment", e.getComment());
	
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

				Meetingrecord controlchange=(Meetingrecord) item[0];			
				map2=this.MeetingRecordToMap(controlchange);

				
		     	list2.add(map2);
			}
//			System.out.println("list view driver serv4");
			return list2;
		}
}
