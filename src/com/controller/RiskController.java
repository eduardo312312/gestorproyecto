package com.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
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

public class RiskController {
	public Session session;
	
	
	
	@Autowired
    JsonTransformer jsonTransformer;
	
	
	 @RequestMapping(value="/newrisk",method=RequestMethod.POST,consumes = "application/json",produces = "application/json")
	 public void save(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) {
		 try {
			 System.out.println("ENTRO A RISKKKKKKKKK");
			 session=HiberanteUtil.getSessionFactory().openSession();
			 Map params=new HashMap();
			 Map map=(Map) jsonTransformer.fromJSON(jsonIn, Map.class );
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
			 
			State state=  (State) session.get(State.class, task.getState().getId() );
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
}
