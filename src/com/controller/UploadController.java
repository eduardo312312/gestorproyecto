package com.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Iterator;
import java.util.LinkedList;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
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
	
}
