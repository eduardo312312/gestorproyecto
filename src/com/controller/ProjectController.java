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

import com.model.Businessline;
import com.model.Businesssubject;
import com.model.Businesstransaction;
import com.model.Businessubject;
import com.model.Detailfile;
import com.model.Entitytype;
import com.model.Marketline;
import com.model.Phase;
import com.model.Portfolio;
import com.model.Project;
import com.model.State;
import com.model.Subsidiaryarea;
import com.model.Systemuser;
import com.model.Transactiontype;
import com.model.Typepayment;
import com.model.Voucher;
import com.repository.PhaseRepository;
import com.service.ProductService;
import com.service.ProjectService;
import com.service.TaskService;

import util.HiberanteUtil;
import util.JsonTransformer;
@Controller
public class ProjectController {

	public Session session;
	
	@Autowired
    JsonTransformer jsonTransformer;
	
	 @RequestMapping(value="/project",method=RequestMethod.POST,consumes = "application/json",produces = "application/json")
	 public void save(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) {
		 try {
			 session=HiberanteUtil.getSessionFactory().openSession();
			 
			 Map map=(Map) jsonTransformer.fromJSON(jsonIn, Map.class ); System.out.println("aa");
			 ProjectService service = new ProjectService();System.out.println("bb");			
			 Map b=(Map)map.get("project");			
		   
//			 SimpleDateFormat dateFormat  = new SimpleDateFormat("dd/MM/yyyy");
//		 Date time = dateFormat.parse(b.get("time").toString());//hasta aqui transformo la fecha recibida 'time' a sin horas., cuando mandaba un time depende de la zona horaria de donde se encuentra el servidor y eso genera que se sumen o resten horas.
//		
//			b.put("time",time);
//			map.put("businesstransaction", b); 	
//			 
			 
			
			
			 Project  project=(Project) jsonTransformer.fromJSON(jsonTransformer.toJSON(map.get("project")), Project.class);
	
			 Businessubject bc_leader=  (Businessubject) session.get(Businessubject.class, project.getBusinessubjectByBusinesssubjectleaderid().getId() );
			 Businessubject bc_control=(Businessubject) session.get(Businessubject.class, project.getBusinessubjectByBusinesssubjectcontrolid().getId());
			 Typepayment typepayment=(Typepayment) session.get(Typepayment.class, project.getTypepayment().getId());
			 Entitytype entitytype=(Entitytype) session.get(Entitytype.class, project.getEntitytype().getId());
			 Marketline market=(Marketline) session.get(Marketline.class, project.getMarketline().getId());
			 Businessline businessline=(Businessline) session.get(Businessline.class, project.getBusinessline().getId());
			 Detailfile detailfile=(Detailfile) session.get(Detailfile.class, project.getDetailfile().getId());
			 State state=(State) session.get(State.class, project.getState().getId());
			 Portfolio portfolio=(Portfolio) session.get(Portfolio.class, project.getState().getId());
			 
			 
			 project.setBusinessubjectByBusinesssubjectleaderid(bc_leader);
			 project.setBusinessubjectByBusinesssubjectcontrolid(bc_control);
			 project.setTypepayment(typepayment);
			 project.setEntitytype(entitytype);
			 project.setMarketline(market);
			 project.setBusinessline(businessline);
			 project.setDetailfile(detailfile);
			 project.setState(state);
			 project.setPortfolio(portfolio);
			 
			 service.save(project);
			
			 
		           Map response=service.ProjectToMap(project);		 			 
						 httpServletResponse.setContentType("application/json");
						 httpServletResponse.setStatus(httpServletResponse.SC_OK);
						 System.out.println("GUARDADO");			
						 httpServletResponse.getWriter().println(jsonTransformer.toJSON(response) );
		} catch (Exception e) {
			System.out.println(e.getMessage());
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
			
		}
	 }
	 
	 @RequestMapping(value="/phasesactivities",method=RequestMethod.POST,consumes = "application/json",produces = "application/json")
	 public void save_phase(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) {
		 try {
			 session=HiberanteUtil.getSessionFactory().openSession();
			 
			 Map map=(Map) jsonTransformer.fromJSON(jsonIn, Map.class ); System.out.println("aa");
					
		
			
			 String  projectid=map.get("projectid").toString();
			 
			 System.out.println("PROJECTIDDDDDDD"+projectid);
			 
			 PhaseRepository phaserepo= new PhaseRepository();
			 
			 String[] fases= new String[5];
			 fases[0]="Analisis de Recursos";
			 fases[1]="Revision Documentaria";
			 fases[2]="Dise�o";
			 fases[3]="Ejecucions";
			 fases[4]="Cierre";
			 
		    String[] actividades= new String[5];	 
		    actividades[0]="Generacion de Matriz de Riesgo";
		    actividades[1]="Revision de documentacion tecnico";
		    actividades[2]="Elaboracion de plan de pruebas";
		    actividades[3]="Ejecucion, documentacion y registro de observaciones pruebas funcionales";
		    actividades[4]="Elaboracion Acta de Aceptacion";
		    
				 		
					 
			 for(int i=0;i<fases.length;i++)
			 {
			 Phase objphase= new Phase();
			 
			 State state=new State();
			 Project projecto= new Project();
			 
			 projecto.setId(Integer.parseInt(projectid));		 
			 state.setId(1);
			 
			 objphase.setName(fases[i]);
			 objphase.setState(state);			 
			 phaserepo.save(objphase);
			 System.out.println("OBJETO PHASEEEE:"+objphase.getId());
			 }
			
			 
			 
	
		          		 
						 httpServletResponse.setContentType("application/json");
						 httpServletResponse.setStatus(httpServletResponse.SC_OK);
						 System.out.println("GUARDADO");			
						 httpServletResponse.getWriter().println(jsonTransformer.toJSON("Exito") );
		} catch (Exception e) {
			System.out.println(e.getMessage());
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
			
		}
	 }
	 
	 
	 
	 
	 @RequestMapping(value="/project/{id}",method=RequestMethod.POST,produces = "application/json")
	 public void search(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, @PathVariable("id") Integer id)throws IOException 	 
	 {
		try {
			System.out.println("paso el id"+id);
			ProjectService service=new ProjectService();
			
		
			
			Map project = new HashMap();
			System.out.println("1");
			project= service.ProjectToMap(service.get(id)) ;System.out.println("2");
			
			Map response=new HashMap();
			
			response.put("project", project); 
		

			httpServletResponse.setContentType("application/json");
			httpServletResponse.getWriter().println(jsonTransformer.toJSON(response));
		}catch(Exception e){
			System.out.println(e.getMessage());
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
		}
	 }
	 
	 @RequestMapping(value = "/project/list_all_projects", method = RequestMethod.POST,consumes = "application/json",produces = "application/json; charset=ISO-8859-1")
		public void list(HttpServletRequest httpRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) throws IOException{
		 try {			
			ProjectService service=new ProjectService();
			Map params=new HashMap();
			params=(HashMap) jsonTransformer.fromJSON(jsonIn, HashMap.class);
			
			String portfolioid="";
			if(params.get("portfolioid")==null)
			{
				portfolioid="";
			}else
			{
				portfolioid=params.get("portfolioid").toString();
			}
			
			
			
			
			List<Map> list = new ArrayList<Map>();
			System.out.println("c1");
			list=service.list_all_projects(portfolioid);
			System.out.println("c2");
			Map response=new HashMap();
			
			
			response.put("list",  list );

			httpServletResponse.setContentType("application/json");
			httpServletResponse.getWriter().println(jsonTransformer.toJSON(response));
			
			
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
			
	   }
			
		}
	 
	 
	 
	 
	
	
}
