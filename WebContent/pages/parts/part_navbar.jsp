    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@page session="true"%>

    <!-- aca inicia el header-->
    
    <nav class="navbar navbar-default">
   
        <div class="container-fluid">
          <div class="navbar-header">
           <a style="margin-top: 14px !important;" class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars">
            </i> </a>
          
          
    <a style="margin-top: 14px !important;" aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" class="navbar-toggle collapsed btn btn-primary " type="button">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </a>
          </div>
          <div class="navbar-collapse collapse" id="navbar">
            <ul class="nav navbar-nav">
<!--               <li class="active"><a href="#">Home</a></li> -->
              <li><a href="index">PROYECTO</a></li>
              <li><a href="busssubject">PERSONAL</a></li>
              <li><a href=tasks>CONFIGURACION</a></li>
              <li><a href="reportperformancecostcpi">REPORTES</a></li>   

            </ul>
            </ul>
    
      <ul style='margin-right: 20px' class="nav navbar-nav navbar-right">
        <li>
        <c:url value="/j_spring_security_logout" var="logoutUrl" />

	<!-- csrt for log out-->
	<form action="${logoutUrl}" method="post" id="logoutForm">
	  <input type="hidden" 	name="${_csrf.parameterName}" value="${_csrf.token}" />
	</form>
	
	<script>
		function formSubmit() {
			document.getElementById("logoutForm").submit();
		}
	</script>

	<c:if test="${pageContext.request.userPrincipal.name != null}"> 
	 <a href="javascript:formSubmit()"> ${pageContext.request.userPrincipal.name} (Salir)</a>
	</c:if>
        </li>
      
      </ul>
          </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
      </nav>

        

        