package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import util.JsonTransformer;



@Controller
public class IndexController {
	@Autowired
    JsonTransformer jsonTransformer;
	
	
	public static String nombreempleado="xd";
	

	@RequestMapping(value="/", method = RequestMethod.GET)
	public String index(){
		return "redirect:/index";
	}
	
	@RequestMapping(value="/login", method = RequestMethod.GET)
	public ModelAndView login(
			@RequestParam(value = "error", required = false) String error,
			@RequestParam(value = "logout", required = false) String logout) {
		
		
			ModelAndView model = new ModelAndView();
			if (error != null) {
				model.addObject("error", "Credenciales incorrectas!");
			}

			if (logout != null) {
				
				model.addObject("msg", "Se ha desconectado del sistema!");
			}
			model.setViewName("login");

			return model;

		}
	
	@RequestMapping(value = "/403", method = RequestMethod.GET)
	public ModelAndView accesssDenied() {

	  ModelAndView model = new ModelAndView();
		
	  //check if user is login
	  Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	  if (!(auth instanceof AnonymousAuthenticationToken)) {
		UserDetails userDetail = (UserDetails) auth.getPrincipal();	
	
		Object[] lista= userDetail.getAuthorities().toArray();
		
		
		
		for(Object item:lista){
			  
		
	     
	     	
		}
		model.addObject("username", userDetail.getUsername() );
		model.addObject("autorities",lista);
	  }
		
	  model.setViewName("parts/403");
	  return model;

	}
	
	
//	@RequestMapping(value="/", method = RequestMethod.GET)
//	public String index(){
//		return "redirect:/login";
//	}

}
