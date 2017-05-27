package com.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.model.Activity;

import com.model.Phase;
import com.model.Project;
import com.model.Task;
import com.repository.TaskRepository;


public class TaskService {
public TaskRepository  repository;
public String projectname="";
public String projectid="";
    
	public TaskService()
	{
		repository= new TaskRepository();
	}
	public void save(Task  task)
	{		
		 
			this.repository.save(task);
				
	}
	
	public String getprojectname()
	{
		return projectname;
	}
	
	public void setprojectname(String pname )
	{
		projectname=pname;
	}
	
	public String getprojectid()
	{
		return projectid;
	}
	
	public void setprojectid(String pid )
	{
		projectid=pid;
	}
	
	
	public Map TaskToMap(Task e){
		Map e1=new HashMap();		
		e1.put("id", e.getId());
		if(e.getName()!=null) e1.put("name", e.getName());
		if(e.getDescription()!=null) e1.put("description",e.getDescription());	
		if(e.getComment()!=null) e1.put("comment",e.getComment());	
		if(e.getState()!=null) e1.put("stateid",e.getState().getId());	
		if(e.getStartdate()!=null) e1.put("startdate",e.getStartdate());	
		if(e.getEnddate()!=null) e1.put("enddate",e.getEnddate());
		if(e.getCreatedate()!=null) e1.put("createdate",e.getCreatedate());
		if(e.getEstimatehour()!=null) e1.put("estimatehour",e.getEstimatehour());
		if(e.getRealhour()!=null) e1.put("realhour",e.getRealhour());
		if(e.getBusinessubjectByBusinesssubjectcreatorid()!=null) e1.put("businesssubjectcreatorid",e.getBusinessubjectByBusinesssubjectcreatorid().getId());
		if(e.getBusinessubjectByBusinesssubjectmodifierid()!=null) e1.put("businesssubjectmodifierid",e.getBusinessubjectByBusinesssubjectmodifierid().getId());
		if(e.getBusinessubjectByBusinesssubjectresponsableid()!=null) e1.put("businesssubjectresponsableid",e.getBusinessubjectByBusinesssubjectresponsableid().getId());
		if(e.getChangedate()!=null) e1.put("changedate",e.getChangedate());
		if(e.getShortname()!=null) e1.put("shortname",e.getShortname());
		if(e.getUpdateat()!=null) e1.put("updateat",e.getUpdateat());
		if(e.getActivity()!=null) e1.put("activityid",e.getActivity().getId());
		if(e.getRealamount()!=null) e1.put("realamount",e.getRealamount());
		if(e.getEstimateamount()!=null) e1.put("estimateamount",e.getEstimateamount());	
		return e1;
	}
	
	
	public List<Map>  list_view_main(Map params,String activityid){
//		System.out.println("list view driver serv1");
		List<Object[]> list=new ArrayList<Object[]>();
		List<Map> list2=new ArrayList<Map>();

		
		System.out.println("ss11");
		
		list=this.repository.list_view_main(params,activityid);
		System.out.println("s222");
		
		
		for(Object[] item:list){
			Map map=new HashMap();	
			Map map2=new HashMap();

			Task task=(Task) item[1];			
			map2=TaskToMap(task);

			
	     	list2.add(map2);
		}
		System.out.println("list view driver serv4");
		return list2;
	}
	
	//devueve actividades por un phaseid
	public List<Map>  get_phases_activities(String phaseid){
//		System.out.println("list view driver serv1");
		List<Object[]> list=new ArrayList<Object[]>();
		List<Map> list2=new ArrayList<Map>();

		
		System.out.println("ss11");
		
		list=this.repository.get_activities(phaseid);
		System.out.println("s222");
		
		
		for(Object[] item:list){
			Map map=new HashMap();
			Map map1=new HashMap();
			Map map2=new HashMap();
			Map map3=new HashMap();

			Activity activity=(Activity) item[0];	
			Phase phase=(Phase) item[1];
			Project project=(Project) item[2];
			
			System.out.println("actividad:"+activity.getName());
			map1.put("id", activity.getId() );
			map1.put("name", activity.getName().toString() );
			
			map2.put("id", phase.getId() );
			map2.put("name", phase.getName() );
			
			map3.put("id", project.getId() );
			map3.put("name", project.getName() );
			
			
			map.put("activity", map1);
			map.put("phase", map2);
			map.put("project", map3);

			
	     	list2.add(map);
		}
		System.out.println("list view driver serv4");
		return list2;
	}
	
	
public List<Map>  get_edt_detail_activity(String activityid){
		
		List<Object[]> list=new ArrayList<Object[]>();
		List<Map> list2=new ArrayList<Map>();
		
		
			
		list=this.repository.get_tasks(activityid);
		
		
		for(Object[] item:list){
			Map map=new HashMap();
			

			Task task=(Task) item[0];	
			Activity activitye=(Activity) item[1];		
			
			
			
			map=this.TaskToMap(task);		
			
	     	list2.add(map);
		}
		
		
		System.out.println("list view driver serv4");
		return list2;
	}
	
	
	public List<Map>  get_edt_detail_phase(String phaseid){
		
		List<Object[]> list=new ArrayList<Object[]>();
		List<Map> list2=new ArrayList<Map>();
		
		
			
		list=this.repository.get_activities(phaseid);
		
		
		for(Object[] item:list){
			Map map=new HashMap();
			Map map1=new HashMap();
			Map map2=new HashMap();
			Map map3=new HashMap();

			Activity activity=(Activity) item[0];	
			Phase phase=(Phase) item[1];		
			
			map.put("id",activity.getId());
			map.put("name",activity.getName());
			map.put("detail", get_edt_detail_activity(Integer.toString(activity.getId())));
			
			map1.put("activity", map);		
			
	     	list2.add(map);
		}
		
		
		System.out.println("list view driver serv4");
		return list2;
	}
	
	//devuelve proyectos..
	public List<Map>  get_edt_detail_project(String projectid){
		
//		System.out.println("list view driver serv1");
		List<Object[]> list=new ArrayList<Object[]>();
		List<Map> list2=new ArrayList<Map>();
		List<Map> list3=new ArrayList<Map>();
		Map project=new HashMap();
		
		int contador=0;
		list=this.repository.get_phases(projectid);
			
		
			for(Object[] item:list){
			Map map=new HashMap();
			Map map1=new HashMap();
			Project projectobj=(Project) item[0];	
			Phase phase=(Phase) item[1];			
			this.setprojectid( Integer.toString(projectobj.getId()));
			this.setprojectname(projectobj.getName().toString());			
			map.put("id", phase.getId());
			map.put("name", phase.getName());	
			map.put("detail", get_edt_detail_phase(Integer.toString(phase.getId())));//llena de actividades
			
		    map1.put("phase", map);			
	     	list2.add(map1);
		}
		project.put("id",this.getprojectid());
		project.put("name",this.getprojectname());
		project.put("detail",list2);//la list2 tiene todo el detalle de phase.
		
		list3.add(project);
		
	
		
		System.out.println("list view driver serv4");
		return list3;
	}
	
	
	//devuelve 
	//usado en el reporte spi y cpi, indicador de desempeño  y cronograma
	public List<Map>  get_project_phases_activities(String phaseid){
//		System.out.println("list view driver serv1");
		List<Object[]> list=new ArrayList<Object[]>();
		List<Map> list2=new ArrayList<Map>();

		
		System.out.println("ss11");
		
		list=this.repository.get_project_phases_activities(phaseid);
		System.out.println("s222");
		
		
		for(Object[] item:list){
			Map map=new HashMap();
			Map map1=new HashMap();
			Map map2=new HashMap();
			Map map3=new HashMap();
			Map map4=new HashMap();

			TaskService taskservice= new TaskService();
			Task task=(Task) item[0];
			Activity activity=(Activity) item[1];	
			Phase phase=(Phase) item[2];
			Project project=(Project) item[3];
			
			System.out.println("actividad:"+activity.getName());
			
			map4=taskservice.TaskToMap(task);
			
			map1.put("id", activity.getId() );
			map1.put("name", activity.getName().toString() );
			
			map2.put("id", phase.getId() );
			map2.put("name", phase.getName() );
			
			map3.put("id", project.getId() );
			map3.put("name", project.getName() );
			
			
			map.put("activity", map1);
			map.put("phase", map2);
			map.put("project", map3);
			map.put("task", map4);
			
	     	list2.add(map);
		}
		System.out.println("list view driver serv4");
		return list2;
	}
	

	

	
}
