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
import com.model.Riskmatrix;
import com.model.State;
import com.model.Task;
import com.service.RiskService;
import com.service.TaskService;

import util.HiberanteUtil;
import util.JsonTransformer;
@Controller
public class RiskController {
	public Session session;
	
	
	
	@Autowired
    JsonTransformer jsonTransformer;
	
	
	 @RequestMapping(value="/newrisk",method=RequestMethod.POST,consumes = "application/json",produces = "application/json")
	 public void save(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) {
		 try {
			 SimpleDateFormat dateFormat  = new SimpleDateFormat("yyyy-MM-dd");
			 System.out.println("ENTRO A RISKKKKKKKKK");
			 session=HiberanteUtil.getSessionFactory().openSession();
			 Map params=new HashMap();
			 Map map=(Map) jsonTransformer.fromJSON(jsonIn, Map.class );
			 Map b=(Map)map.get("riskmatrix");
			 
			 
			 Date time = dateFormat.parse(b.get("ejecutiondate").toString());//hasta aqui transformo la fecha recibida 'time' a sin horas., cuando mandaba un time depende de la zona horaria de donde se encuentra el servidor y eso genera que se sumen o resten horas.
		
			 b.put("ejecutiondate",time);
			 map.put("riskmatrix", b); 
			 
			 Date time2 = dateFormat.parse(b.get("identificationdate").toString());//hasta aqui transformo la fecha recibida 'time' a sin horas., cuando mandaba un time depende de la zona horaria de donde se encuentra el servidor y eso genera que se sumen o resten horas.
				
			 b.put("identificationdate",time2);
			 map.put("riskmatrix", b); 
			 
			 RiskService service = new RiskService();System.out.println("bb");			 
			 Riskmatrix  riskmatrix=(Riskmatrix) jsonTransformer.fromJSON(jsonTransformer.toJSON(map.get("riskmatrix")), Riskmatrix.class);System.out.println("cc");	 
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
			 
			State state=  (State) session.get(State.class, riskmatrix.getState().getId() );
			Businessubject bc=  (Businessubject) session.get(Businessubject.class, riskmatrix.getBusinessubject().getId() );

	
			 
			riskmatrix.setState(state);
			riskmatrix.setBusinessubject(bc);
			
			 System.out.println("antes save c1");
			 service.save(riskmatrix);
			 System.out.println("antes save c2");
		           Map response=service.RiskMatrixToMap(riskmatrix);		 			 
						 httpServletResponse.setContentType("application/json");
						 httpServletResponse.setStatus(httpServletResponse.SC_OK);
						 System.out.println("GUARDADO");			
						 httpServletResponse.getWriter().println(jsonTransformer.toJSON(response) );
		} catch (Exception e) {
			System.out.println(e.getMessage());
			
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
			
		}
	 }
	 
	 @RequestMapping(value = "/risk/list_view", method = RequestMethod.POST,consumes = "application/json",produces = "application/json; charset=ISO-8859-1")
		public void list(HttpServletRequest httpRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) throws IOException{
		 try {
			 			
			
			RiskService service=new RiskService();
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
	 
	 
	 
}
