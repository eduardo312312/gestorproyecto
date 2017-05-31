package com.controller;

import java.io.IOException;
import java.util.ArrayList;
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
			 session=HiberanteUtil.getSessionFactory().openSession();
			 
			 Map map=(Map) jsonTransformer.fromJSON(jsonIn, Map.class ); System.out.println("aa");
			 BusinessSubjectService service = new BusinessSubjectService();System.out.println("bb");			
			// Map b=(Map)map.get("project");			
		   

			
			
			 Businessubject  businessubject=(Businessubject) jsonTransformer.fromJSON(jsonTransformer.toJSON(map.get("project")), Project.class);
	
			 Businesssubjecttype bstype=  (Businesssubjecttype) session.get(Businesssubjecttype.class, businessubject.getBusinessubject().getId() );			
			 State state=(State) session.get(State.class, businessubject.getState().getId());
			 Businessubject bs=(Businessubject) session.get(Businessubject.class, businessubject.getBusinessubject().getId());
			 
			 
			 
			 businessubject.setBusinesssubjecttype(bstype);
			 businessubject.setState(state);
			 businessubject.setBusinessubject(bs);
			 
			 service.save(businessubject);
			
			 
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

}
