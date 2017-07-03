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
import com.model.Task;
import com.model.Team;
import com.service.ProjectService;
import com.service.TaskService;
import com.service.TeamService;

import util.HiberanteUtil;
import util.JsonTransformer;

@Controller
public class TeamController {
	
	public Session session;
	
	
	
	@Autowired
    JsonTransformer jsonTransformer;
	
	
	 @RequestMapping(value="/team",method=RequestMethod.POST,consumes = "application/json",produces = "application/json")
	 public void save_team(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) {
		 try {
			 session=HiberanteUtil.getSessionFactory().openSession();
			 Map params=new HashMap();
			 Map map=(Map) jsonTransformer.fromJSON(jsonIn, Map.class );
			 TeamService service = new TeamService();System.out.println("bb");			 
			 Team  team=(Team) jsonTransformer.fromJSON(jsonTransformer.toJSON(map.get("team")), Team.class);System.out.println("cc");	 
			
			 params=(HashMap) jsonTransformer.fromJSON(jsonIn, HashMap.class);System.out.println("dd");
	 
			State state=  (State) session.get(State.class, team.getState().getId() );
			Businessubject bc=  (Businessubject) session.get(Businessubject.class, team.getBusinessubject().getId() );
			Project pj=  (Project) session.get(Project.class, team.getProject().getId() );
		
			 
			team.setState(state);
			team.setBusinessubject(bc);
			team.setProject(pj);
			
			 System.out.println("antes save c1");
			 service.save_team(team);
			 
			 System.out.println("antes save c2");
		           Map response=service.TeamToMap(team,true);		 			 
						 httpServletResponse.setContentType("application/json");
						 httpServletResponse.setStatus(httpServletResponse.SC_OK);
						 System.out.println("GUARDADO");			
						 httpServletResponse.getWriter().println(jsonTransformer.toJSON(response) );
		} catch (Exception e) {
			System.out.println(e.getMessage());
			
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
			
		}
	 }
	 
	 @RequestMapping(value="/groupteam",method=RequestMethod.POST,consumes = "application/json",produces = "application/json")
	 public void save_groupteam(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) {
		 try {
			 session=HiberanteUtil.getSessionFactory().openSession();
			 Map params=new HashMap();
			 Map map=(Map) jsonTransformer.fromJSON(jsonIn, Map.class );
			 TeamService service = new TeamService();System.out.println("bb");			 
			 Groupteam  groupteam=(Groupteam) jsonTransformer.fromJSON(jsonTransformer.toJSON(map.get("groupteam")), Groupteam.class);System.out.println("cc");	 
			
			 params=(HashMap) jsonTransformer.fromJSON(jsonIn, HashMap.class);System.out.println("dd");
		 
			State state=  (State) session.get(State.class, groupteam.getState().getId() );
			Businessubject bc=  (Businessubject) session.get(Businessubject.class, groupteam.getBusinessubject().getId() );
			Team team=  (Team) session.get(Team.class, groupteam.getTeam().getId() );
		
	
			 
			groupteam.setState(state);
			groupteam.setBusinessubject(bc);
			groupteam.setTeam(team);
			
			 service.save_gruoupteam(groupteam);
			 System.out.println("antes save c2");
		           Map response=service.GroupTeamToMap(groupteam);		 			 
						 httpServletResponse.setContentType("application/json");
						 httpServletResponse.setStatus(httpServletResponse.SC_OK);
						 System.out.println("GUARDADO");			
						 httpServletResponse.getWriter().println(jsonTransformer.toJSON(response) );
		} catch (Exception e) {
			System.out.println(e.getMessage());
			
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
			
		}
	 }
	 
	 @RequestMapping(value="/delete_groupteam/{id}",method=RequestMethod.POST,produces = "application/json")
	 public void search(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, @PathVariable("id") Integer id)throws IOException 	 
	 {
		try {
			System.out.println("paso el id"+id);
			TeamService service=new TeamService();		
			Map project = new HashMap();
			System.out.println("1");
			service.delete_teamdetail_in_groupteam(id.toString());
			System.out.println("2");
			Map response=new HashMap();
			System.out.println("3");
			response.put("ok", "ok"); 
			System.out.println("4");

			httpServletResponse.setContentType("application/json");
			httpServletResponse.getWriter().println(jsonTransformer.toJSON(response));
		}catch(Exception e){
			System.out.println(e.getMessage());
			 httpServletResponse.setStatus(httpServletResponse.SC_OK);
			 httpServletResponse.setContentType("application/json");
		}
	 }
	 
	 

		@RequestMapping(value = "/team/list_view", method = RequestMethod.POST,consumes = "application/json",produces = "application/json; charset=ISO-8859-1")
		public void list(HttpServletRequest httpRequest, HttpServletResponse httpServletResponse, @RequestBody String jsonIn) throws IOException{
		 try {
			 			
			
			TeamService service=new TeamService();
			Map params=new HashMap();
			params=(HashMap) jsonTransformer.fromJSON(jsonIn, HashMap.class);
			params.put("firstResult",(Integer.parseInt(params.get("page").toString())-1) *20 );
			String teamid="";
			if(params.get("teamid")==null)
			{
				teamid="";
			}else
			{
				teamid=params.get("teamid").toString();
			}
			
			
			
			
			List<Map> list = new ArrayList<Map>();
			list=service.list_view_main(params,teamid);
			Map response=new HashMap();
			
			response.put("list", list);		
			response.put("page", Integer.parseInt(params.get("page").toString()));
			response.put("totalItems",  service.list_view_main(null,teamid).size() );

			httpServletResponse.setContentType("application/json");
			httpServletResponse.getWriter().println(jsonTransformer.toJSON(response));
			
			
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
			httpServletResponse.setStatus(httpServletResponse.SC_INTERNAL_SERVER_ERROR);
			
	   }
			
		}
		
	
	
	
	
	
}
