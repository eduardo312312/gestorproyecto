package com.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Iterator;
import java.util.LinkedList;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequestWrapper;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import util.FileMeta;
import util.JsonTransformer;

@Controller
public class UploadController {

	
	
	@Autowired
    JsonTransformer jsonTransformer;
	
	LinkedList<FileMeta> files = new LinkedList<FileMeta>();
	 FileMeta fileMeta = null;
	
	 //ESTE CONTROLADOR NO FUNCIONA......
	 @RequestMapping(value="/download", method = RequestMethod.GET)
	 public class DownloadServlet extends HttpServlet {
		    protected void doGet( HttpServletRequestWrapper request, HttpServletResponse response) throws ServletRequestBindingException, IOException {
         System.out.println("entroooooo");
		         String id = request.getParameter("id");

		         String fileName = "";
		         String fileType = "";
		         // Find this file id in database to get file name, and file type

		         // You must tell the browser the file type you are going to send
		         // for example application/pdf, text/plain, text/html, image/jpg
		         response.setContentType(fileType);

		         // Make sure to show the download dialog
		         response.setHeader("Content-disposition","attachment; filename=1.pdf");

		         // Assume file name is retrieved from database
		         // For example D:\\file\\test.pdf
		    	 File directory=new File(request.getServletContext().getRealPath("/resources/pdf/index/"+id+".pdf"));
		      

		         // This should send the file to browser
		         OutputStream out = response.getOutputStream();
		         FileInputStream in = new FileInputStream(directory);
		         byte[] buffer = new byte[4096];
		         int length;
		         while ((length = in.read(buffer)) > 0){
		            out.write(buffer, 0, length);
		         }
		         in.close();
		         out.flush();
		    }
		}
	 
	 
	@RequestMapping(value="document/upload_index", method = RequestMethod.POST)
    public @ResponseBody String upload_product(MultipartHttpServletRequest request, HttpServletResponse response) throws Exception {
		 
		String document_id=request.getParameter("document_id");
		String path="";

		 files=new LinkedList<FileMeta>();
         Iterator<String> itr =  request.getFileNames();
         MultipartFile mpf = null;

         while(itr.hasNext()){
    
        	 File directory=new File(request.getServletContext().getRealPath("/resources/pdf/index/"));
        	
        	 System.out.println("Directorio:" + directory.getAbsolutePath() );
        	 if(!directory.exists()){
        		 if(directory.mkdir()){
        			 System.out.println("Se ha creado el directorio");
        		 }else{
        			 throw (new Exception("Error al crear directorio!"));
        		 }
        	 }
        	
     
             mpf = request.getFile(itr.next()); 
             System.out.println(mpf.getOriginalFilename() +" uploaded! ");
        
             if(files.size() >= 10)
                 files.pop();
       
             fileMeta = new FileMeta();
             fileMeta.setFileName(mpf.getOriginalFilename());
             fileMeta.setFileSize(mpf.getSize()/1024+" Kb");
             fileMeta.setFileType(mpf.getContentType());
 
             try {
                fileMeta.setBytes(mpf.getBytes());
                System.out.println("se intentara subir:"+mpf.getOriginalFilename());
                System.out.println(mpf.getContentType());
                
                String[] t=fileMeta.getFileName().split("\\.");
                System.out.println(t.length);
                path=directory+"/"+document_id+"."+t[1];
                System.out.println(path);
                  
                 FileCopyUtils.copy(mpf.getBytes(), new FileOutputStream(path) );
 
            } catch (IOException e) {
            	
            	System.out.println(e.getMessage());
            	throw (new Exception("Fallo a subir el archivo!," + e.getMessage())); 
 
            }

             files.add(fileMeta);
         }

        return path;
    }
	
	
	 
		@RequestMapping(value="change/uploadchanges", method = RequestMethod.POST)
	    public @ResponseBody String upload_changes(MultipartHttpServletRequest request, HttpServletResponse response) throws Exception {
			 
			String change_id=request.getParameter("change_id");
			String path="";

			 files=new LinkedList<FileMeta>();
	         Iterator<String> itr =  request.getFileNames();
	         MultipartFile mpf = null;

	         while(itr.hasNext()){
	    
	        	 File directory=new File(request.getServletContext().getRealPath("/resources/pdf/change/"));
	        	
	        	 System.out.println("Directorio:" + directory.getAbsolutePath() );
	        	 if(!directory.exists()){
	        		 if(directory.mkdir()){
	        			 System.out.println("Se ha creado el directorio");
	        		 }else{
	        			 throw (new Exception("Error al crear directorio!"));
	        		 }
	        	 }
	        	
	     
	             mpf = request.getFile(itr.next()); 
	             System.out.println(mpf.getOriginalFilename() +" uploaded! ");
	        
	             if(files.size() >= 10)
	                 files.pop();
	       
	             fileMeta = new FileMeta();
	             fileMeta.setFileName(mpf.getOriginalFilename());
	             fileMeta.setFileSize(mpf.getSize()/1024+" Kb");
	             fileMeta.setFileType(mpf.getContentType());
	 
	             try {
	                fileMeta.setBytes(mpf.getBytes());
	                System.out.println("se intentara subir:"+mpf.getOriginalFilename());
	                System.out.println(mpf.getContentType());
	                
	                String[] t=fileMeta.getFileName().split("\\.");
	                System.out.println(t.length);
	                path=directory+"/"+change_id+"."+t[1];
	                System.out.println(path);
	                  
	                 FileCopyUtils.copy(mpf.getBytes(), new FileOutputStream(path) );
	 
	            } catch (IOException e) {
	            	
	            	System.out.println(e.getMessage());
	            	throw (new Exception("Fallo a subir el archivo!," + e.getMessage())); 
	 
	            }

	             files.add(fileMeta);
	         }

	        return path;
	    }
		
		
		@RequestMapping(value="change/uploadmeet", method = RequestMethod.POST)
	    public @ResponseBody String upload_meet(MultipartHttpServletRequest request, HttpServletResponse response) throws Exception {
			 
			String meet_id=request.getParameter("meet_id");
			String path="";

			 files=new LinkedList<FileMeta>();
	         Iterator<String> itr =  request.getFileNames();
	         MultipartFile mpf = null;

	         while(itr.hasNext()){
	    
	        	 File directory=new File(request.getServletContext().getRealPath("/resources/pdf/meet/"));
	        	
	        	 System.out.println("Directorio:" + directory.getAbsolutePath() );
	        	 if(!directory.exists()){
	        		 if(directory.mkdir()){
	        			 System.out.println("Se ha creado el directorio");
	        		 }else{
	        			 throw (new Exception("Error al crear directorio!"));
	        		 }
	        	 }
	        	
	     
	             mpf = request.getFile(itr.next()); 
	             System.out.println(mpf.getOriginalFilename() +" uploaded! ");
	        
	             if(files.size() >= 10)
	                 files.pop();
	       
	             fileMeta = new FileMeta();
	             fileMeta.setFileName(mpf.getOriginalFilename());
	             fileMeta.setFileSize(mpf.getSize()/1024+" Kb");
	             fileMeta.setFileType(mpf.getContentType());
	 
	             try {
	                fileMeta.setBytes(mpf.getBytes());
	                System.out.println("se intentara subir:"+mpf.getOriginalFilename());
	                System.out.println(mpf.getContentType());
	                
	                String[] t=fileMeta.getFileName().split("\\.");
	                System.out.println(t.length);
	                path=directory+"/"+meet_id+"."+t[1];
	                System.out.println(path);
	                  
	                 FileCopyUtils.copy(mpf.getBytes(), new FileOutputStream(path) );
	 
	            } catch (IOException e) {
	            	
	            	System.out.println(e.getMessage());
	            	throw (new Exception("Fallo a subir el archivo!," + e.getMessage())); 
	 
	            }

	             files.add(fileMeta);
	         }

	        return path;
	    }
	
}
