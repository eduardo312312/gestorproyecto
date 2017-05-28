<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
     <script>
     
 $(function(){
	 $("#side-menu .level1").fadeIn(500);
 	$("#"+page).parent().parent().find("a").trigger("click");
 	$("#"+page).find("a").addClass("sombreado"); 
 	$(".navbar-nav li:nth-child(4)").addClass("selected");
 });
 </script>
<div class="sidebar-collapse">
         
            <ul class="nav" id="side-menu">
              
               <li class="nav-header">
            
                <div class="dropdown profile-element"> <span>
                                      
                             </span>
                   
                    
                </div>
                <div class="logo-element">
                    MENU+
                </div>
            </li>
                <li  ng-repeat="item in detailsedt">
                    <a title='Configuraciones' id="BordeSideMenu" > <span>{{item.name}}</span></a>
                    <ul >

                          <li ng-repeat="item2 in item.detail[0]"  id="tareas"><a title='Productos'  > <span>{{item2.name}}</span></a></li>
                         
                   

              
                    </ul>
                </li>
                
              

               
            </ul>

        </div>