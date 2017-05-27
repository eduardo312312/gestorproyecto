<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

 <script>
 $(function(){
	 $("#side-menu .level1").fadeIn(500);
	 	$("#"+page).parent().parent().find("a").trigger("click");
	 	$("#"+page).find("a").addClass("sombreado"); 
	 	$(".navbar-nav li:nth-child(3)").addClass("selected");
 });
 </script>
<div class="sidebar-collapse">
           <ul class="nav" id="side-menu">
              <li class="nav-header">
                <div class="dropdown profile-element"> <span>
                                <img alt="image" class="img-circle" height="100%" width="100%" src="resources/img/logo.png"  ng-cloak/>
                             </span>
                </div>
                <div class="logo-element">
                    MENU+
                </div>
            </li>
                <li class='level1'>
                    <a id="BordeSideMenu" class="fa fa-group" href="#"> <span >PERSONAL</span></a>
                    <ul class="nav nav-second-level">                        
                        <li id="colaboradores" ><a class="fa fa-users" href="personal_register"><span> Empleados</span></a></li>
						<li id="adelantos-descuentos" ><a class="fa fa-database" href="discount"><span> Adelantos</span></a></li>
                        <li id="pagos"><a class="fa fa-dollar" href="personalpayment"><span> Pagos</span></a></li>
                           <li id="historial"><a class="fa fa-dollar" href="history"><span> Historial</span></a></li>
                    
                    </ul>
                </li>

               
            </ul>

        </div>