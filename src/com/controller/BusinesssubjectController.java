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

import com.model.Businessline;
import com.model.Businesssubjecttype;
import com.model.Businessubject;
import com.model.Detailfile;
import com.model.Entitytype;
import com.model.Marketline;
import com.model.Portfolio;
import com.model.Project;
import com.model.Stakeholder;
import com.model.State;
import com.model.Typepayment;
import com.service.BusinessSubjectService;
import com.service.ProjectService;
import com.service.TaskService;

import util.HiberanteUtil;
import util.JsonTransformer;

@Controller
public class BusinesssubjectController {
	
	
public Session session;
	
	@Autowired
    JsonTransformer jsonTransformer;
	
	 @RequestMapping(value="/businesssubject",method=RequestMethod.POST,consumes = "application/json",produces = "application/json")
	 public void save(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) {
		 try {
			 SimpleDateFormat dateFormat  = new SimpleDateFormat("yyyy-MM-dd");
			 session=HiberanteUtil.getSessionFactory().openSession();
			 
			 Map map=(Map) jsonTransformer.fromJSON(jsonIn, Map.class ); System.out.println("aa");
			 BusinessSubjectService service = new BusinessSubjectService();System.out.println("bb");			
			
			 
			 Map b=(Map)map.get("employee");
			 
			 
			 Date time = dateFormat.parse(b.get("birthday").toString());//hasta aqui transformo la fecha recibida 'time' a sin horas., cuando mandaba un time depende de la zona horaria de donde se encuentra el servidor y eso genera que se sumen o resten horas.
		
			 b.put("birthday",time);//changedate es un campo de "controlchange"
			 map.put("employee", b); 		
		   

			
			
			 Businessubject  businessubject=(Businessubject) jsonTransformer.fromJSON(jsonTransformer.toJSON(map.get("employee")), Businessubject.class);
			 
			 
			 
	
			 Businesssubjecttype bstype=  (Businesssubjecttype) session.get(Businesssubjecttype.class, businessubject.getBusinesssubjecttype().getId() );			
			 State state=(State) session.get(State.class, businessubject.getState().getId());
			 Businessubject bs=(Businessubject) session.get(Businessubject.class, businessubject.getBusinessubject().getId());
			 
			 
			 
			 businessubject.setBusinesssubjecttype(bstype);
			 businessubject.setState(state);
			 businessubject.setBusinessubject(bs);
			 System.out.println("CONTROLER1");
			 service.save(businessubject);
			 System.out.println("CONTROLER2");
			 
		           Map response=service.BussinessSubjectToMap(businessubject);		 			 
						 httpServletResponse.setContentType("application/json");
						 httpServletResponse.setStatus(httpServletResponse.SC_OK);
						 System.out.println("GUARDADO");			
						 httpServletResponse.getWriter().println(jsonTransformer.toJSON(response) );
		} catch (Exception e) {
			System.out.println(e.getMessage());
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
			
		}
	 }
	 
	 @RequestMapping(value="/stakeholder",method=RequestMethod.POST,consumes = "application/json",produces = "application/json")
	 public void save_stakeholder(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) {
		 try {
			// SimpleDateFormat dateFormat  = new SimpleDateFormat("yyyy-MM-dd");
			 session=HiberanteUtil.getSessionFactory().openSession();
			 
			 Map map=(Map) jsonTransformer.fromJSON(jsonIn, Map.class ); System.out.println("aa");
			 BusinessSubjectService service = new BusinessSubjectService();System.out.println("bb");			
			
			 
//			 Map b=(Map)map.get("employee");
//			 
//			 
//			 Date time = dateFormat.parse(b.get("birthday").toString());//hasta aqui transformo la fecha recibida 'time' a sin horas., cuando mandaba un time depende de la zona horaria de donde se encuentra el servidor y eso genera que se sumen o resten horas.
//		
//			 b.put("birthday",time);//changedate es un campo de "controlchange"
//			 map.put("employee", b); 		
//		   
		
			 Stakeholder  stakeholder=(Stakeholder) jsonTransformer.fromJSON(jsonTransformer.toJSON(map.get("stakeholder")), Stakeholder.class);
	
			 Project project=  (Project) session.get(Project.class, stakeholder.getProject().getId());			
			 State state=(State) session.get(State.class, stakeholder.getState().getId());
			 Businessubject bs=(Businessubject) session.get(Businessubject.class, stakeholder.getBusinessubject().getId());
			 
			 
			 
			 stakeholder.setProject(project);
			 stakeholder.setState(state);
			 stakeholder.setBusinessubject(bs);
			 System.out.println("CONTROLER1");
			 service.save_stakeholder(stakeholder);
			 System.out.println("CONTROLER2");
			 
		           Map response=service.StakeholderToMap(stakeholder);		 			 
						 httpServletResponse.setContentType("application/json");
						 httpServletResponse.setStatus(httpServletResponse.SC_OK);
						 System.out.println("GUARDADO");			
						 httpServletResponse.getWriter().println(jsonTransformer.toJSON(response) );
		} catch (Exception e) {
			System.out.println(e.getMessage());
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
			
		}
	 }
	 
	 
	
	@RequestMapping(value = "/businesssubject/list_view", method = RequestMethod.POST,consumes = "application/json",produces = "application/json; charset=ISO-8859-1")
	public void list(HttpServletRequest httpRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) throws IOException{
	 try {
		BusinessSubjectService service=new BusinessSubjectService();
		Map params=new HashMap();
		params=(HashMap) jsonTransformer.fromJSON(jsonIn, HashMap.class);
		params.put("firstResult",(Integer.parseInt(params.get("page").toString())-1) *20 );
//		String activityid="";
//		if(params.get("activityid")==null)
//		{
//			activityid="";
//		}else
//		{
//			activityid=params.get("activityid").toString();
//		}		
		List<Map> list = new ArrayList<Map>();
		list=service.list_view_main(params,"","","");
		Map response=new HashMap();
		
		response.put("list", list);		
		response.put("page", Integer.parseInt(params.get("page").toString()));
		response.put("totalItems",  service.list_view_main(null,"","","").size() );

		httpServletResponse.setContentType("application/json");
		httpServletResponse.getWriter().println(jsonTransformer.toJSON(response));		
		
	} catch (Exception e) {
		System.out.println(e.getMessage());
		httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
		
   }
		
	}
	
	

	@RequestMapping(value = "/stakeholders/list_view", method = RequestMethod.POST,consumes = "application/json",produces = "application/json; charset=ISO-8859-1")
	public void list_stakeholder_view_main(HttpServletRequest httpRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) throws IOException{
	 try {
		BusinessSubjectService service=new BusinessSubjectService();
		Map params=new HashMap();
		params=(HashMap) jsonTransformer.fromJSON(jsonIn, HashMap.class);
		params.put("firstResult",(Integer.parseInt(params.get("page").toString())-1) *20 );
		String projectid="";
		if(params.get("projectid")==null)
		{
			projectid="";
		}else
		{
			projectid=params.get("projectid").toString();
		}		
		List<Map> list = new ArrayList<Map>();
		list=service.list_view_main_stakeholder(params,projectid);
		Map response=new HashMap();
		
		response.put("list", list);		
		response.put("page", Integer.parseInt(params.get("page").toString()));
		response.put("totalItems",  service.list_view_main_stakeholder(null,projectid).size() );

		httpServletResponse.setContentType("application/json");
		httpServletResponse.getWriter().println(jsonTransformer.toJSON(response));		
		
	} catch (Exception e) {
		System.out.println(e.getMessage());
		httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
		
   }
		
	}
	
	
	@RequestMapping(value = "/businesssubject/get_all_roles", method = RequestMethod.POST,consumes = "application/json",produces = "application/json; charset=ISO-8859-1")
	public void get_all_roles(HttpServletRequest httpRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) throws IOException{
	 try {
		BusinessSubjectService service=new BusinessSubjectService();
		Map params=new HashMap();

		List<Map> list = new ArrayList<Map>();
		list=service.get_all_Roles();
		//Map response=new HashMap();


		httpServletResponse.setContentType("application/json");
		httpServletResponse.getWriter().println(jsonTransformer.toJSON(list));		
		
	} catch (Exception e) {
		System.out.println(e.getMessage());
		httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
		
   }
		
	}
	
	

}
