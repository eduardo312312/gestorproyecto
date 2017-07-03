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

<!--                           <li  id="proyectos"><a title='Proyectos' class="fa fa-pagelines" href="projects"> <span>Proyectos</span></a></li> -->
                          <li  id="fases"><a title='Fases' class="fa fa-pagelines" href="phases"> <span>Fases</span></a></li>
                           <li  id="actividades"><a title='Actividades' class="fa fa-pagelines" href="activities"> <span>Actividades</span></a></li>
                        <li  id="tareas"><a title='Tareas' class="fa fa-pagelines" href="tasks"> <span>Tareas</span></a></li>
                        <li  id="team"><a title='Team' class="fa fa-pagelines" href="team"> <span>Equipos</span></a></li>
                          <li  id="usuarios"><a title='Team' class="fa fa-user" href="users"> <span>Usuarios</span></a></li>
                   

              
                    </ul>
                </li>

               
            </ul>

        </div>