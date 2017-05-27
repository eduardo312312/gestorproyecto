<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link href="resources/css/inspinia/css/bootstrap.min.css" rel="stylesheet">
    <link href="resources/css/inspinia/font-awesome/css/font-awesome.css" rel="stylesheet">
<!--     <link href="resources/css/custom_css.css" rel="stylesheet"> -->
</head>
<body>
<div class="row">
<div class="col-md-12">
<div align="center">
<h1>HTTP Status 403 - Accesso denegado</h1>

 <div class="center">
		        <img  src="resources/img/acceso_denegado.png" alt="Logo Viento Sur" height="250" width="250"/> 
		        </div>
	<c:choose>
		<c:when test="${empty username}">
		  <h2>No tiene permisos para acceder a esta seccion!</h2>
		</c:when>
		<c:otherwise>
		  <h2>El usuario <span>${username}</span>, <br/>
                    no tiene permisos para acceder a esta seccion!</h2>
		</c:otherwise>
	</c:choose>
</div>
</div>
</div>

	

</body>
</html>