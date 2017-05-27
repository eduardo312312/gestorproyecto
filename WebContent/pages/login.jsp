<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page session="false"%>
<!DOCTYPE html">
<html>

<head>
<title>Autentificación del Sistema</title>
<link href='resources/css/login.css' rel='stylesheet' />
<link rel='stylesheet' href="resources/css/bootstrap-3.3.5/css/cerulean-bootstrap.min.css" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="${pageContext.request.contextPath}/resources/css/inspinia/css/bootstrap.min.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/resources/css/inspinia/font-awesome/css/font-awesome.css" rel="stylesheet">

    <link href="${pageContext.request.contextPath}/resources/css/inspinia/css/animate.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/resources/css/inspinia/css/style.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/resources/css/inspinia/css/custom_css" rel="stylesheet">
        <script src="${pageContext.request.contextPath}/resources/css/inspinia/js/jquery-2.1.1.js"></script>
    <script src="${pageContext.request.contextPath}/resources/css/inspinia/js/bootstrap.min.js"></script>

        
</head>

<body class="gray-bg"  onload='document.loginForm.username.focus();'>

    <div class="middle-box text-center loginscreen  animated fadeInDown">
        <div>
            <div>
            </div>
<br>
<br>
<br>
                <div id="login-box">
                <div class='panel'>
                <div class='panel-header'>Ingreso al Sistema</div>
                <div class='panel-body'>
                <div class="center">
		        <img  src="resources/img/logo.png" alt="Logo Viento Sur" height="150" width="150"/> 
		        </div>
		         <c:if test="${not empty error}">
            <div class="error">${error}</div>
	        </c:if>
	        <c:if test="${not empty msg}">
	            <div class="msg">${msg}</div>
	        </c:if>
	        
	        <%--        <form name='loginForm'  action="<c:url value='j_spring_security_check' />" method='POST'> --%>
<form name='loginForm'  action="login" method='POST'>

<div class="form-group">
    <label for="username">Usuario:</label>
    <input class="form-control" id="username" name='username' placeholder="Usuario">
  </div>
  
  <div class="form-group">
    <label for="password">Clave:</label>
    <input type="password" class="form-control" id="password" name='password' placeholder="Clave">
  </div>
<input  class='btn btn-primary dim  color_login' name="submit" type="submit" value="Ingresar" />

          <input type="hidden" name="${_csrf.parameterName}"
            value="${_csrf.token}" />

        </form>
		        
                </div>
                </div>
                
    
        

       


    </div>
            
            <p class="m-t"> <small>&copy; COPYRIGHT</small> </p>
        </div>
    </div>

    <!-- Mainly scripts -->


</body>

</html>
