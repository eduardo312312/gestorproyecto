
 <script>
 $(function(){
	 	$("#side-menu .level1").fadeIn(500);
 	$("#"+page).parent().parent().find("a").trigger("click");
 	$("#"+page).find("a").addClass("sombreado"); 
 	$(".navbar-nav li:nth-child(2)").addClass("selected");
 });
 </script>
  	<script>
		function formSubmit() {
			document.getElementById("logoutForm").submit();
		}
	</script>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page session="true"%>
 
        <div class="sidebar-collapse">
             <ul class="nav" id="side-menu">
               <li class="nav-header">
            
                <div class="dropdown profile-element"> <span>
                            <img alt="image" class="img-circle" height="100%" width="100%" src="resources/img/logo.png" ng-cloak />
                             </span>
                </div>
                <div class="logo-element">
                    MENU
                </div>
            </li>
<!--             <li class='level1'> -->
<!--                     <a title="LOGISTICA" id="BordeSideMenu" class='fa fa-cubes' href="#"> <span>LOGISTICA</span></a> -->
<!--                     <ul class="nav nav-third-level"> -->
<!--                         <li id='ingreso-producto'><a id="BordeSideMenuSub" href="freightpayment" class='fa fa-arrow-circle-o-right'> <span>Ingreso de Productos</span></a></li> -->
<!--                        <li id='baja-producto'><a id="BordeSideMenuSub" href="unsubscribe" class='fa fa-toggle-left'> <span>Baja de Productos</span></a></li> -->
<!--                         <li id='comprar-producto'><a id="BordeSideMenuSub" href="buyproducts" class='fa fa-exchange'> <span>Compra de Productos</span></a></li> -->
<!--                            <li id='reporte-kardex'><a id="BordeSideMenuSub" href="reportkardex" class='fa fa-file-text'> <span>Reporte Kardex</span></a></li> -->
                       
<!--                   </ul> -->
<!--                 </li> -->
            
<!--                    <li class='level1'> -->
<!--                     <a title="LIQUIDACIONES" id="BordeSideMenu" href="#" class='fa fa-money'> <span>LIQUIDACIONES</span></a> -->
<!--                     <ul class="nav nav-third-level"> -->
<!--                         <li id='liquidacion-pago'><a id="BordeSideMenuSub" href="liquidationpayment" class="fa fa-dollar modal-icon"> <span>Pago</span></a></li> -->
<!--                   </ul> -->
<!--                 </li> -->

               
<!--                 <li class='level1'>  -->
<!--                     <a title="PRESTAMOS" id="BordeSideMenu" href="#" class="fa fa-support"> <span>PRESTAMOS</span></a> -->
<!--                     <ul class="nav nav-third-level"> -->
<!--                          <li id="prestamo-productor"> <a href="producerlending" class="fa fa-money modal-icon"> <span>Prestamos Productor</span></a></li> -->
<!--                            <li id="prestamo-conductor"> <a href="driverlending" class="fa fa-money modal-icon"> <span>Prestamos Conductor</span></a></li> -->
<!--                </ul> -->
<!--                 </li> -->
<!--                 <li class='level1'>  -->
<!--                     <a title="DEUDAS" id="BordeSideMenu" href="#" class="fa fa-dollar"> <span>DEUDAS</span></a> -->
<!--                     <ul class="nav nav-third-level"> -->
<!--                     <li id="pago-deuda-cliente"><a href="clientdebtpay" class="fa fa-file-text modal-icon"> <span>Pago Deuda Cliente</span></a></li> -->
<!--                     </ul> -->
<!--                 </li> -->
                <li class='level1'>
                    <a title="VENTAS" id="BordeSideMenu" href="#" class="fa fa-file-text"> <span>INICIACION</span></a>
                    <ul class="nav nav-third-level">
                    <li id="indexfile"><a href="indexfile" class="fa fa-file-text"> <span>Ficha de Inicio</span></a></li>
<!--                         <li id="view-kitchen"><a href="kitchen" class="fa fa-file-text"> <span>Alcance</span></a></li> -->
<!--                         <li id="view-kitchen"><a href="kitchen" class="fa fa-file-text"> <span>Tiempos del Proyecto</span></a></li> -->
           
                        <li id="view-order"><a class="fa fa-file-text" href="order"> <span>Interesados</span></a></li>

                    </ul>
                </li>
                     <li class='level1'>
                    <a  title="PEDIDO CLIENTE" id="BordeSideMenu" href="clientorder"  class="fa fa-male"> <span>PLANIFICACION</span></a>
                    <ul class="nav nav-third-level">
                    <li id="edt"><a href="edt" class="fa fa-file-text"> <span>EDT</span></a></li>
                        <li id="view-kitchen"><a href="kitchen" class="fa fa-file-text"> <span>Equipo del Proyecto</span></a></li>   
                        <li id="view-order"><a class="fa fa-file-text" href="order"> <span>Planeamiento de Costos</span></a></li>
                        <li id="matrix"><a class="fa fa-file-text" href="risk"> <span>Matriz de Riesgos</span></a></li>
                        <li id="view-order"><a class="fa fa-file-text" href="gantt"> <span>Cronograma(gantt))</span></a></li>

                    </ul>
                </li>
 
  <li class='level1'><a title="Compromisos" id="BordeSideMenu"  class='fa fa-file-text'> <span>SEGUIMIENTO Y CONTROL</span></a>
  <ul class="nav nav-third-level">
                    <li id="view-boxsales"><a href="sales" class="fa fa-file-text"> <span>Actas de Reunion</span></a></li>
                        <li id="view-kitchen"><a href="kitchen" class="fa fa-file-text"> <span>Control de Cambios</span></a></li>   
                        <li id="view-order"><a class="fa fa-file-text" href="order"> <span>Control de Entregables</span></a></li>
                        <li id="view-order"><a class="fa fa-file-text" href="order"> <span>Control de Asistencias</span></a></li>
                        <li id="view-order"><a class="fa fa-file-text" href="order"> <span>Control de Presupuesto</span></a></li>
                        <li id="view-order"><a class="fa fa-file-text" href="order"> <span>Control de Calidad</span></a></li>

                    </ul>
                </li>
                
                <li class='level1'><a title="Compromisos" id="BordeSideMenu"  class='fa fa-calendar'> <span>CIERRE</span></a>
                   <ul class="nav nav-third-level">
                   
                        <li id="view-kitchen"><a href="kitchen" class="fa fa-file-text"> <span>Resultados del Cronograma</span></a></li>   
                        <li id="view-order"><a class="fa fa-file-text" href="order"> <span>Resultado de los entregables</span></a></li>
                        <li id="view-order"><a class="fa fa-file-text" href="order"> <span>Resultado del presupuesto</span></a></li>                        

                    </ul>
                </li>
                     <li class='level1'><a title="Compromisos" id="BordeSideMenu"  class='fa fa-calendar'> <span>REPORTES</span></a>
                   <ul class="nav nav-third-level">
                   <li id="view-order"><a class="fa fa-file-text" href="reportperformancecostcpi"> <span>Ind. Desempeño CPI </span></a></li>
                   <li id="view-order"><a class="fa fa-file-text" href="reportperformancecronospi"> <span>Ind. Desempeño  SPI </span></a></li>
                        <li id="view-kitchen"><a href="kitchen" class="fa fa-file-text"> <span>Estado de Ejecucion(Resumen,Detallado)</span></a></li>   
                        <li id="view-order"><a class="fa fa-file-text" href="order"> <span>Cambios</span></a></li>
                        <li id="view-order"><a class="fa fa-file-text" href="order"> <span>Eficiencia</span></a></li>
                        <li id="view-order"><a class="fa fa-file-text" href="order"> <span>Eficacia</span></a></li>
                        
                      

                    </ul>
                </li>
    <security:authorize access="hasRole('ROLE_ADMINISTRADOR')">
</security:authorize>
   
        
               
           
                     <li class='level1'>
                 <c:url value="/j_spring_security_logout" var="logoutUrl" />
	<form action="${logoutUrl}" method="post" id="logoutForm">
	  <input type="hidden" 	name="${_csrf.parameterName}" value="${_csrf.token}" />
	</form>
	<c:if test="${pageContext.request.userPrincipal.name != null}"> 
	 <a title="Salir" id="BordeSideMenu" class='fa fa-user' href="javascript:formSubmit()"><span>&nbsp ${pageContext.request.userPrincipal.name} (Salir)</span> </a>
	</c:if>
                           
                </li >
            </ul>
        </div>
    