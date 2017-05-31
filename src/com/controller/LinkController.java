package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import util.JsonTransformer;

@Controller
public class LinkController {

	@Autowired
    JsonTransformer jsonTransformer;
	
	
	@RequestMapping(value="/index", method = RequestMethod.GET)
	public String sales(){
		return "index";
	}
	
	@RequestMapping(value="/tasks", method = RequestMethod.GET)
	public String taskmanagement(){
		return "configuration/task/task";
	}
	@RequestMapping(value="/reportperformance", method = RequestMethod.GET)
	public String report_performance(){
		return "report/index/costo";
	}
	@RequestMapping(value="/edt", method = RequestMethod.GET)
	public String edt(){
		return "project/edt/edt";
	}
	@RequestMapping(value="/indexfile", method = RequestMethod.GET)
	public String fileindex(){
		return "project/index/index";
	}
	
	@RequestMapping(value="/busssubject", method = RequestMethod.GET)
	public String businessubject(){
		return "personal/employee/employee";
	}
	
	
	
	
}
