package com.controller;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.model.Activity;

import com.model.Businessubject;
import com.model.State;
import com.model.Task;


import com.service.TaskService;

import util.HiberanteUtil;
import util.JsonTransformer;

@Controller
public class TaskController {
	
	public Session session;
	
	
	
	@Autowired
    JsonTransformer jsonTransformer;
	
	
	 @RequestMapping(value="/task",method=RequestMethod.POST,consumes = "application/json",produces = "application/json")
	 public void save(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) {
		 try {
			 session=HiberanteUtil.getSessionFactory().openSession();
			 Map params=new HashMap();
			 Map map=(Map) jsonTransformer.fromJSON(jsonIn, Map.class );
			 TaskService service = new TaskService();System.out.println("bb");			 
			 Task  task=(Task) jsonTransformer.fromJSON(jsonTransformer.toJSON(map.get("task")), Task.class);System.out.println("cc");	 
			// Map b=(Map)map.get("task");
			 //estas 2 lineas es para consultar algunos codigos.
			 params=(HashMap) jsonTransformer.fromJSON(jsonIn, HashMap.class);System.out.println("dd");
			// String transactiontype=params.get("transactiontype").toString();System.out.println("ee");
			 ////////////////////////		 
			 
		     //SimpleDateFormat dateFormat  = new SimpleDateFormat("dd/MM/yyyy");
			// Date time = dateFormat.parse(b.get("time").toString());//hasta aqui transformo la fecha recibida 'time' a sin horas., cuando mandaba un time depende de la zona horaria de donde se encuentra el servidor y eso genera que se sumen o resten horas.
		//
			// b.put("time",time);
			// map.put("businesstransaction", b); 	
			 
		//transformo el json en un objeto de tipo tarea.
			 //Task  task=(Task) jsonTransformer.fromJSON(jsonTransformer.toJSON(map.get("task")), Task.class);
			 
			State state=  (State) session.get(State.class, task.getState().getId() );
			Businessubject bc=  (Businessubject) session.get(Businessubject.class, task.getBusinessubjectByBusinesssubjectcreatorid().getId() );
			Businessubject bm=  (Businessubject) session.get(Businessubject.class, task.getBusinessubjectByBusinesssubjectmodifierid().getId() );
			Businessubject br=  (Businessubject) session.get(Businessubject.class, task.getBusinessubjectByBusinesssubjectresponsableid().getId() );
			Activity activity=  (Activity) session.get(Activity.class, task.getActivity().getId() );
	
			 
			 task.setState(state);
			 task.setActivity(activity);
			 task.setBusinessubjectByBusinesssubjectcreatorid(bc);
			 task.setBusinessubjectByBusinesssubjectmodifierid(bm);			 
			 task.setBusinessubjectByBusinesssubjectresponsableid(br);
			 System.out.println("antes save c1");
			 service.save(task);
			 System.out.println("antes save c2");
		           Map response=service.TaskToMap(task);		 			 
						 httpServletResponse.setContentType("application/json");
						 httpServletResponse.setStatus(httpServletResponse.SC_OK);
						 System.out.println("GUARDADO");			
						 httpServletResponse.getWriter().println(jsonTransformer.toJSON(response) );
		} catch (Exception e) {
			System.out.println(e.getMessage());
			
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
			
		}
	 }
	 
	 

		@RequestMapping(value = "/task/list_view", method = RequestMethod.POST,consumes = "application/json",produces = "application/json; charset=ISO-8859-1")
		public void list(HttpServletRequest httpRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) throws IOException{
		 try {
			 			
			
			TaskService service=new TaskService();
			Map params=new HashMap();
			params=(HashMap) jsonTransformer.fromJSON(jsonIn, HashMap.class);
			params.put("firstResult",(Integer.parseInt(params.get("page").toString())-1) *20 );
			String activityid="";
			if(params.get("activityid")==null)
			{
				activityid="";
			}else
			{
				activityid=params.get("activityid").toString();
			}
			
			
			
			
			List<Map> list = new ArrayList<Map>();
			list=service.list_view_main(params,activityid);
			Map response=new HashMap();
			
			response.put("list", list);		
			response.put("page", Integer.parseInt(params.get("page").toString()));
			response.put("totalItems",  service.list_view_main(null,activityid).size() );

			httpServletResponse.setContentType("application/json");
			httpServletResponse.getWriter().println(jsonTransformer.toJSON(response));
			
			
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
			
	   }
			
		}
		
		@RequestMapping(value = "/task/list_view_cost_chrono", method = RequestMethod.POST,consumes = "application/json",produces = "application/json; charset=ISO-8859-1")
		public void list_report_cost_chrono(HttpServletRequest httpRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) throws IOException{
		 try {
			 			
			
			TaskService service=new TaskService();
			Map params=new HashMap();
			params=(HashMap) jsonTransformer.fromJSON(jsonIn, HashMap.class);

			String projectid="";
			if(params.get("projectid")==null)
			{
				projectid="";
			}else
			{
				projectid=params.get("projectid").toString();
			}
			
			
			
			
			List<Map> list = new ArrayList<Map>();
			list=service.get_project_phases_activities(projectid);
			Map response=new HashMap();
			
			response.put("list", list);		
			

			httpServletResponse.setContentType("application/json");
			httpServletResponse.getWriter().println(jsonTransformer.toJSON(response));
			
			
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
			
	   }
			
		}
		
		@RequestMapping(value = "/task/list_view_edt", method = RequestMethod.POST,consumes = "application/json",produces = "application/json; charset=ISO-8859-1")
		public void list_to_edt(HttpServletRequest httpRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) throws IOException{
		 try {
			 			
			
			TaskService service=new TaskService();
			Map params=new HashMap();
			params=(HashMap) jsonTransformer.fromJSON(jsonIn, HashMap.class);

			String projectid="";
			if(params.get("projectid")==null)
			{
				projectid="";
			}else
			{
				projectid=params.get("projectid").toString();
			}
			
			System.out.println("Id de Proyecto: "+projectid);
			
			
			List<Map> list = new ArrayList<Map>();
			list=service.get_edt_detail_project(projectid);
			//Map response=new HashMap();
			
			//response.put("list", list);		
			

			httpServletResponse.setContentType("application/json");
			httpServletResponse.getWriter().println(jsonTransformer.toJSON(list));
			
			
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
			
	   }
			
		}
		
		
		
	
		@RequestMapping(value = "/task/list_activities", method = RequestMethod.POST,consumes = "application/json",produces = "application/json; charset=ISO-8859-1")
		public void list_activities(HttpServletRequest httpRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) throws IOException{
		 try {
			 			
			
			TaskService service=new TaskService();
			Map params=new HashMap();
			params=(HashMap) jsonTransformer.fromJSON(jsonIn, HashMap.class);
			String phaseid="";
			if(params.get("phaseid")==null)
			{
				phaseid="";
			}else
			{
				phaseid=params.get("phaseid").toString();
			}			
			List<Map> list = new ArrayList<Map>();
			list=service.get_phases_activities(phaseid);
			Map response=new HashMap();
			
			response.put("list", list);		
			

			httpServletResponse.setContentType("application/json");
			httpServletResponse.getWriter().println(jsonTransformer.toJSON(response));
			
			System.out.println(jsonTransformer.toJSON(response));
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
			
	   }
			
		}
	
	
	
	
}
