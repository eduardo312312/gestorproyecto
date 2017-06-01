 
  <script>
 $(function(){
	 $("#side-menu .level1").fadeIn(500);
 	$("#"+page).parent().parent().find("a").trigger("click");
 	$("#"+page).find("a").addClass("sombreado"); 
 	$(".navbar-nav li:nth-child(5)").addClass("selected");
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
                <li class="level1 esconder">
                    <a id="BordeSideMenu" class='fa fa-university' href="#"> <span > INDICADORES</span></a>
                    <ul class="nav nav-third-level">
                        
                        <li id="reporte_costo"><a  class="fa fa-line-chart" href="reportperformancecostcpi"><span> DESEMPEÑO COSTO</span></a></li>
                        <li id="reporte_crono"><a  class="fa fa-line-chart" href="reportperformancecronospi"><span> DESEMPEÑO CRONOGRAMA </span></a></li>
                        
<!--                         <li><a id="BordeSideMenuSub" class="fa fa-suitcase modal-icon" href="#"><font  > Reporte gráfico y de tabla de proyección mensual y anual</font></a></li> -->


                    </ul>
                </li>
                

               
            </ul>

        </div>