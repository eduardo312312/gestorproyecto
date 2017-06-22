<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html ng-app="app">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>GESTION DE PROYECTssO</title>
   <jsp:include page="parts/head.jsp"></jsp:include>
<!--      <script src="resources/js/angular/business/sales/OrderController.js"></script> -->
   
<script>
var page="index";
var actualuser="${pageContext.request.userPrincipal.name}";
</script>


</head>

<body >

    <div id="wrapper" >


    <nav class="navbar-default navbar-static-side" role="navigation">
        <jsp:include page="parts/part_sidemenu_commerce.jsp"></jsp:include>
     </nav>
    <div id="page-wrapper" class="gray-bg">
        <div class="row border-bottom">
    <!-- aca inicia el header-->
       <nav style="margin-bottom: 0" role="navigation" class="navbar navbar-fixed-top">
      <jsp:include page="parts/part_navbar.jsp"></jsp:include>
        </nav>
       </div>
       <div class="wrapper wrapper-content animated fadeInRight">
          
            <div class="ibox float-e-margins">
                <br>
                <br>
            <div class="centrar_titulo">
            
           <h5>BIENVENIDO AL SISTEMA.
           <p id="user"></p>  
           </h5> 
                 
                
            </div>
            <script>
document.getElementById("user").innerHTML = actualuser;
</script>
            <div class="ibox-content">

       
         

            </div>
            </div>
            </div>
          
    

        </div>




   </div>



        



<!-- aca termina el modal-->


</body>

</html>
