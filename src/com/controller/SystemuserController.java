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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.model.Activity;

import com.model.Businessubject;
import com.model.Groupteam;
import com.model.Project;
import com.model.State;
import com.model.Systemuser;
import com.model.Task;
import com.model.Team;
import com.service.ControlChangeService;
import com.service.ProjectService;
import com.service.SystemuserService;
import com.service.TaskService;
import com.service.TeamService;

import util.HiberanteUtil;
import util.JsonTransformer;

@Controller
public class SystemuserController {
	
	public Session session;
	
	
	
	@Autowired
    JsonTransformer jsonTransformer;
	
	
	 @RequestMapping(value="/systemuser",method=RequestMethod.POST,consumes = "application/json",produces = "application/json")
	 public void save_team(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) {
		 try {
			 session=HiberanteUtil.getSessionFactory().openSession();
			 Map params=new HashMap();
			 Map map=(Map) jsonTransformer.fromJSON(jsonIn, Map.class );
			 
			 SystemuserService service = new SystemuserService();		 
			 Systemuser  systemuser=(Systemuser) jsonTransformer.fromJSON(jsonTransformer.toJSON(map.get("systemuser")), Systemuser.class);	 
			
			 params=(HashMap) jsonTransformer.fromJSON(jsonIn, HashMap.class);System.out.println("dd");
	 
			State state=  (State) session.get(State.class, systemuser.getState().getId() );
			Businessubject bc=  (Businessubject) session.get(Businessubject.class, systemuser.getBusinessubject().getId() );
					 
			systemuser.setState(state);
			systemuser.setBusinessubject(bc);			
			 System.out.println("antes save c1");
			 service.save(systemuser);
			 
			 System.out.println("antes save c2");
		           Map response=service.SystemuserToMap(systemuser);		 			 
						 httpServletResponse.setContentType("application/json");
						 httpServletResponse.setStatus(httpServletResponse.SC_OK);
						 System.out.println("GUARDADO");			
						 httpServletResponse.getWriter().println(jsonTransformer.toJSON(response) );
		} catch (Exception e) {
			System.out.println(e.getMessage());
			
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
			
		}
	 }
	 
	
//	 @RequestMapping(value = "/systemuser/list_view_main", method = RequestMethod.POST,consumes = "application/json",produces = "application/json; charset=ISO-8859-1")
//		public void list_view_main(HttpServletRequest httpRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) throws IOException{
//		 try {
//			 			
//			
//			SystemuserService service=new SystemuserService();
//			Map params=new HashMap();
//			params=(HashMap) jsonTransformer.fromJSON(jsonIn, HashMap.class);
//			params.put("firstResult",(Integer.parseInt(params.get("page").toString())-1) *20 );
//			String businesssubjectid="";
//			if(params.get("businesssubjectid")==null)
//			{
//				businesssubjectid="";
//			}else
//			{
//				businesssubjectid=params.get("businesssubjectid").toString();
//			}
//			
//			
//			
//			
//			List<Map> list = new ArrayList<Map>();
//			list=service.list_view_main(params,businesssubjectid);
//			Map response=new HashMap();
//			
//			response.put("list", list);		
//			response.put("page", Integer.parseInt(params.get("page").toString()));
//			response.put("totalItems",  service.list_view_main(null,businesssubjectid).size() );
//
//			httpServletResponse.setContentType("application/json");
//			httpServletResponse.getWriter().println(jsonTransformer.toJSON(response));
//			
//			
//			
//		} catch (Exception e) {
//			System.out.println(e.getMessage());
//			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
//			
//	   }
//			
//		}
	
	 
	 

	 @RequestMapping(value = "/systemuser/list_view", method = RequestMethod.POST,consumes = "application/json",produces = "application/json; charset=ISO-8859-1")
		public void list(HttpServletRequest httpRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) throws IOException{
		 try {
			 			
			
			SystemuserService service=new SystemuserService();
			Map params=new HashMap();
			params=(HashMap) jsonTransformer.fromJSON(jsonIn, HashMap.class);
			params.put("firstResult",(Integer.parseInt(params.get("page").toString())-1) *20 );
			String businesssubjectid="";
			if(params.get("businesssubjectid")==null)
			{
				businesssubjectid="";
			}else
			{
				businesssubjectid=params.get("businesssubjectid").toString();
			}
			
			
			
			
			List<Map> list = new ArrayList<Map>();
			list=service.list_view_main(params,businesssubjectid);
			Map response=new HashMap();
			
			response.put("list", list);		
			response.put("page", Integer.parseInt(params.get("page").toString()));
			response.put("totalItems",  service.list_view_main(null,businesssubjectid).size() );

			httpServletResponse.setContentType("application/json");
			httpServletResponse.getWriter().println(jsonTransformer.toJSON(response));
			
			
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
			
	   }
			
		}
	 
//	 
//
//		@RequestMapping(value = "/systemuser/list_view_main", method = RequestMethod.POST,consumes = "application/json",produces = "application/json; charset=ISO-8859-1")
//		public void list(HttpServletRequest httpRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) throws IOException{
//		 try {
//			 			System.out.println("entroooooooooooooooooooooo");
//			
//			SystemuserService service=new SystemuserService();
//			Map params=new HashMap();
//			params=(HashMap) jsonTransformer.fromJSON(jsonIn, HashMap.class);
//			params.put("firstResult",(Integer.parseInt(params.get("page").toString())-1) *20 );
//			String businesssubjectid="";
//			if(params.get("teamid")==null)
//			{
//				businesssubjectid="";
//			}else
//			{
//				businesssubjectid=params.get("businesssubjectid").toString();
//			}
//			
//			List<Map> list = new ArrayList<Map>();
//			list=service.list_view_main(params,businesssubjectid);
//			Map response=new HashMap();
//			
//			response.put("list", list);		
//			response.put("page", Integer.parseInt(params.get("page").toString()));
//			response.put("totalItems",  service.list_view_main(null,businesssubjectid).size() );
//
//			httpServletResponse.setContentType("application/json");
//			httpServletResponse.getWriter().println(jsonTransformer.toJSON(response));
//			
//			
//			
//		} catch (Exception e) {
//			System.out.println(e.getMessage());
//			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
//			
//	   }
//			
//		}
		
	
	
	
	
	
}
