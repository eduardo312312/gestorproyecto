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
                                      <img alt="image" class="img-circle" height="100%" width="100%" src="resources/img/logo.png" ng-cloak />
                             </span>
                   
                    
                </div>
                <div class="logo-element">
                    MENU+
                </div>
            </li>
                <li class='level1'>
                    <a title='Configuraciones' id="BordeSideMenu" class="fa fa-cogs" href="#"> <span>CONFIGURACIONES</span></a>
                    <ul class="nav nav-second-level">

                          <li  id="proyectos"><a title='Productos' class="fa fa-pagelines" href="proyects"> <span>Proyectos</span></a></li>
                          <li  id="fases"><a title='Productos' class="fa fa-pagelines" href="phases"> <span>Fases</span></a></li>
                           <li  id="actividades"><a title='Productos' class="fa fa-pagelines" href="activities"> <span>Actividades</span></a></li>
                        <li  id="tareas"><a title='Productos' class="fa fa-pagelines" href="tasks"> <span>Tareas</span></a></li>
                   

              
                    </ul>
                </li>

               
            </ul>

        </div>