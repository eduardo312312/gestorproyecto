<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FICHA DE INICIO</title>
    <jsp:include page="../../parts/head.jsp"></jsp:include>
    <script src="resources/js/angular/project/index/IndexController.js"></script>
         <script src="resources/js/uploadfile/jquery.uploadfile.min.js"></script>
    <link href="resources/js/uploadfile/uploadfile.css" rel="stylesheet" />
    
    
    <style type="text/css">


* {margin: 0; padding: 0; outline: none;}

img {border: none;}

a { 
	text-decoration:none; 
	color:#00c6ff;
}

h1 {
	font: 4em normal Arial, Helvetica, sans-serif;
	padding: 20px;	margin: 0;
	text-align:center;
	color:#bbb;
}

h1 small{
	font: 0.2em normal  Arial, Helvetica, sans-serif;
	text-transform:uppercase; letter-spacing: 0.2em; line-height: 5em;
	display: block;
}

.container {width: 960px; margin: 0 auto; overflow: hidden;}
.content {width:800px; margin:0 auto; padding-top:50px;}
.contentBar {width:90px; margin:0 auto; padding-top:10px; padding-bottom:15px;}

/* STOP ANIMATION */

.stop {
	-webkit-animation-play-state:paused;
	-moz-animation-play-state:paused;
}

/* Loading Circle */
.ball {
	background-color: rgba(0,0,0,0);
	border:5px solid rgba(0,183,229,0.9);
	opacity:.9;
	border-top:5px solid rgba(0,0,0,0);
	border-left:5px solid rgba(0,0,0,0);
	border-radius:50px;
	box-shadow: 0 0 35px #2187e7;
	width:50px;
	height:50px;
	margin:0 auto;
	
	position:relative;//esto agregue recien
	
	-moz-animation:spin .5s infinite linear;
	-webkit-animation:spin .5s infinite linear;
}

.ball1 {
	background-color: rgba(0,0,0,0);
	border:5px solid rgba(0,183,229,0.9);
	opacity:.9;
	border-top:5px solid rgba(0,0,0,0);
	border-left:5px solid rgba(0,0,0,0);
	border-radius:50px;
	box-shadow: 0 0 15px #2187e7; 
	width:30px;
	height:30px;
	margin:10px auto;
	position:relative;
	top:-50px;
	-moz-animation:spinoff .5s infinite linear;
	-webkit-animation:spinoff .5s infinite linear;
}

@-moz-keyframes spin {
	0% { -moz-transform:rotate(0deg); }
	100% { -moz-transform:rotate(360deg); }
}
@-moz-keyframes spinoff {
	0% { -moz-transform:rotate(0deg); }
	100% { -moz-transform:rotate(-360deg); }
}
@-webkit-keyframes spin {
	0% { -webkit-transform:rotate(0deg); }
	100% { -webkit-transform:rotate(360deg); }
}
@-webkit-keyframes spinoff {
	0% { -webkit-transform:rotate(0deg); }
	100% { -webkit-transform:rotate(-360deg); }
}

/* Second Loadin Circle */

.circle {
	background-color: rgba(0,0,0,0);
	border:5px solid rgba(0,183,229,0.9);
	opacity:.9;
	border-right:5px solid rgba(0,0,0,0);
	border-left:5px solid rgba(0,0,0,0);
	border-radius:50px;
	box-shadow: 0 0 35px #2187e7;
	width:50px;
	height:50px;
	margin:0 auto;
	-moz-animation:spinPulse 1s infinite ease-in-out;
	-webkit-animation:spinPulse 1s infinite linear;
}
.circle1 {
	background-color: rgba(0,0,0,0);
	border:5px solid rgba(0,183,229,0.9);
	opacity:.9;
	border-left:5px solid rgba(0,0,0,0);
	border-right:5px solid rgba(0,0,0,0);
	border-radius:50px;
	box-shadow: 0 0 15px #2187e7; 
	width:30px;
	height:30px;
	margin:0 auto;
	position:relative;
	top:-50px;
	-moz-animation:spinoffPulse 1s infinite linear;
	-webkit-animation:spinoffPulse 1s infinite linear;
}

@-moz-keyframes spinPulse {
	0% { -moz-transform:rotate(160deg); opacity:0; box-shadow:0 0 1px #2187e7;}
	50% { -moz-transform:rotate(145deg); opacity:1; }
	100% { -moz-transform:rotate(-320deg); opacity:0; }
}
@-moz-keyframes spinoffPulse {
	0% { -moz-transform:rotate(0deg); }
	100% { -moz-transform:rotate(360deg);  }
}
@-webkit-keyframes spinPulse {
	0% { -webkit-transform:rotate(160deg); opacity:0; box-shadow:0 0 1px #2187e7; }
	50% { -webkit-transform:rotate(145deg); opacity:1;}
	100% { -webkit-transform:rotate(-320deg); opacity:0; }
}
@-webkit-keyframes spinoffPulse {
	0% { -webkit-transform:rotate(0deg); }
	100% { -webkit-transform:rotate(360deg); }
}

/* LITTLE BAR */

.barlittle {
	background-color:#2187e7;  
	background-image: -moz-linear-gradient(45deg, #2187e7 25%, #a0eaff); 
	background-image: -webkit-linear-gradient(45deg, #2187e7 25%, #a0eaff);
	border-left:1px solid #111; border-top:1px solid #111; border-right:1px solid #333; border-bottom:1px solid #333; 
	width:10px;
	height:10px;
	float:left;
	margin-left:5px;
    opacity:0.1;
	-moz-transform:scale(0.7);
	-webkit-transform:scale(0.7);
	-moz-animation:move 1s infinite linear;
	-webkit-animation:move 1s infinite linear;
}

#block_1{
 	-moz-animation-delay: .4s;
	-webkit-animation-delay: .4s;
 }
#block_2{
 	-moz-animation-delay: .3s;
	-webkit-animation-delay: .3s;
}
#block_3{
 	-moz-animation-delay: .2s;
	-webkit-animation-delay: .2s;
}
#block_4{
 	-moz-animation-delay: .3s;
	-webkit-animation-delay: .3s;
}
#block_5{
 	-moz-animation-delay: .4s;
	-webkit-animation-delay: .4s;
}

#block_12{
 	-moz-animation-delay: .4s;
	-webkit-animation-delay: .4s;
 }
#block_22{
 	-moz-animation-delay: .3s;
	-webkit-animation-delay: .3s;
}
#block_32{
 	-moz-animation-delay: .2s;
	-webkit-animation-delay: .2s;
}
#block_42{
 	-moz-animation-delay: .3s;
	-webkit-animation-delay: .3s;
}
#block_52{
 	-moz-animation-delay: .4s;
	-webkit-animation-delay: .4s;
}


@-moz-keyframes move{
	0%{-moz-transform: scale(1.2);opacity:1;}
	100%{-moz-transform: scale(0.7);opacity:0.1;}
}
@-webkit-keyframes move{
	0%{-webkit-transform: scale(1.2);opacity:1;}
	100%{-webkit-transform: scale(0.7);opacity:0.1;}
}

/* Trigger button for javascript */

.trigger, .triggerFull, .triggerBar {
	background: #000000;
	background: -moz-linear-gradient(top, #161616 0%, #000000 100%);
	background: -webkit-linear-gradient(top, #161616 0%,#000000 100%);
	border-left:1px solid #111; border-top:1px solid #111; border-right:1px solid #333; border-bottom:1px solid #333; 
	font-family: Verdana, Geneva, sans-serif;
	font-size: 0.8em;
	text-decoration: none;
	text-transform: lowercase;
	text-align: center;
	color: #fff;
	padding: 10px;
	border-radius: 3px;
	display: block;
	margin: 0 auto;
	width: 140px;
}
		
.trigger:hover, .triggerFull:hover, .triggerBar:hover {
	background: -moz-linear-gradient(top, #202020 0%, #161616 100%);
	background: -webkit-linear-gradient(top, #202020 0%, #161616 100%);
}

</style>
    
    
    
    
   <script>
var page="indexfile";
</script>

<script>		
$(document).ready(function() {
	$('.ball, .ball1').removeClass('stop');	    
		$('.trigger').click(function() {
				$('.ball, .ball1').toggleClass('stop');
		});
});

$(document).ready(function() {
	$('.circle, .circle1').removeClass('stop');	    
		$('.triggerFull').click(function() {
				$('.circle, .circle1').toggleClass('stop');
		});
});

$(document).ready(function() {
	$('.barlittle').removeClass('stop');	    
		$('.triggerBar').click(function() {
				$('.barlittle').toggleClass('stop');
		});
});

</script>

  <script>
var uploadWidget;

$(function(){
	var document_id=$("#document_id").val();
	
	uploadWidget=$("#fileuploader").uploadFile({
		allowedTypes:"pdf" ,
		url:"document/upload_index?${_csrf.parameterName}=${_csrf.token}",
		multiple:false,
		dragDrop:true,
		uploadStr:'Cargar Archivo',
		/*maxFileCount:1,*/
		dynamicFormData:function(){
			document_id=$("#document_id").val();
			var data={document_id: document_id }
			return data;
		},
		fileName:"file",
		dragDropStr: "<span><b>Arrastre y suelte un archivo PDF</b></span>",
		extErrorStr:" Extension no valida, solo admite: ",
		onSuccess:function(files,data,xhr,pd){
			//console.debug(files);
		    $("#file").val(data);
		    
		},
		onError:function(files,status,errMsg,pd){
			alert("ERROR al cargar!");
		}
		});
});
function clearuploadfile()
{
	uploadWidget.reset();
}

$('.datepicker').datepicker({
	format : 'dd/mm/yyyy',
	language : "es",
	autoclose : true,
});
</script>
</head>
<body ng-controller="IndexController">

    <div id="wrapper" >


    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
		<jsp:include page="../../parts/part_sidemenu_commerce.jsp"></jsp:include>
        </div>
     </nav>

    <div id="page-wrapper" class="gray-bg">

        
    <!-- aca inicia el header-->
       <nav style="margin-bottom: 0" role="navigation" class="navbar navbar-fixed-top">
       <jsp:include page="../../parts/part_navbar.jsp"></jsp:include>
        </nav>
      


       <div class="wrapper wrapper-content animated fadeInRight">
          
           
                <br>
                <br>
            <div class="centrar_titulo">
             <br>
                <br>
                <h3>Ficha de Inicio</h3>
               

                <h3>{{project2.shortname}} - {{project2.name}}</h3>
            </div>
            <div class="ibox-content ">
<!--             <div class="row"> -->
<!--             <button  class="btn btn-primary dim"  ng-click="new_register()" data-toggle="modal" data-target="#myModal" href="javascript:void(0);" >Crear Tarea</button> -->
<!-- 			</div> -->
			<div class="row">
			<div class="form-group">
            <label class="col-md-2 control-label alineacion_i">Proyecto:</label>
                                      <div class="col-md-8">  <select class="form-control m-b" ng-change="select_project(select.project)"   ng-model="select.project">
                                             
                                        <option ng-repeat="item in listprojects.list" >{{item.name}}</option>
<!--                                        <option >***Agregar Proyecto***</option> -->
                                      
                                        </select>  </div>  
                                        
                                        
                                  
                                </div> 
                                
              </div>
              
              
<!-- 			              <div class="container"> -->
<!-- 							<div class="content"> -->
<!-- 						    <div class="circle"></div> -->
<!-- 						    <div class="circle1"></div> -->
<!-- 						    </div> -->
<!-- 							</div> -->
							
<!-- 							<div class="container"> -->
<!-- 								<div class="content"> -->
							    
<!-- 							    </div> -->
<!-- 							</div> -->
							
<!-- 							<div class="container"> -->
<!-- 								<div class="content"> -->
<!-- 							    <div class="circle"></div> -->
<!-- 							    <div class="circle1"></div> -->
<!-- 							    </div> -->
<!-- 							</div> -->
							
							<div id='loadertransaction'  class="contentBar">
<!-- 							<div  class="ball"></div> -->
<!-- 							    <div class="ball1"></div> -->
							    <h4 >Procesando</h4>
							    <div id="block_1" class="barlittle"></div>
						    	<div id="block_1" class="barlittle"></div>
						        <div id="block_2" class="barlittle"></div>
						        <div id="block_3" class="barlittle"></div>
						        <div id="block_4" class="barlittle"></div>
						        <div id="block_5" class="barlittle"></div>
						    </div>
            
			
            <!-- tabla de datos -->


           <!-- Tabla del listado -->
      <div class="row"   >
                <div class="col-md-12" >
                    <div class="ibox float-e-margins" >
                        <div class="ibox-title">
                            <h5>Detalles del Proyecto </h5>
                            
                        </div>
                        <div class="ibox-content">
                            <form method="get" class="form-horizontal">
                               
                                
                                <div class="form-group row">
                                
                                <div class="row">
	                               
	                                <label class="col-md-2 control-label alineacion_i">Codigo </label>
	                                    
	                                    <div class="col-md-2"><input style={{stylenew}}  type="text" class="form-control"  ng-model="project.shortname" ></div>
	                                
	                                
	                                 
	                               
	                               
	                                 <label   class="col-md-2 control-label alineacion_i">Propuesta</label>
	                                    <div class="col-md-6"  ><input style={{stylenew}} type="text" class="form-control" ng-model="project.comment"></div>   
	                                
                                	
                                
                                </div>
                                
                                
                                <div class="row" style="margin-top: 10px !important;">
                                <label class="col-md-2 alineacion_i">Título</label>
                                    <div class="col-md-10"><input style={{stylenew}} type="text"  class="form-control"  ng-model="project.name"  ></div>
                                </div> 
                                 
                               <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Descripción</label>
                                    <div class="col-md-10"><input style={{stylenew}} type="text" class="form-control" ng-model="project.description"></div>   
                               </div> 
                                
                                <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Jefe de Proyecto</label>
                                    <div class="col-md-10">                
                                    <datalist id="employees_list2">
									<option ng-repeat="item2 in employees.list" id={{'l'+item2.businesssubject.id}} value={{item2.show}} > 
									</datalist>
                                    <div class="col-sm-9"><input style={{stylenew}} ng-disabled="indedit" id="employeeeee2" type="text" class="form-control" ng-change="select_leader()" ng-model="project.businesssubjectleader" list="employees_list2"  ></div>
                                 </div>   
                                </div> 
                                
                                <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Control de Proyecto</label>
                                    <div class="col-md-10">
<!--                                     <input  type="text" class="form-control" ng-model="project.businesssubjectcontrol"> -->
                                    
                                    <datalist id="employees_list">
									<option ng-repeat="item2 in employees.list" id={{'c'+item2.businesssubject.id}} value={{item2.show}} > 
									</datalist>
                                    <div class="col-sm-9"><input style={{stylenew}} ng-disabled="indedit" id="employeeeee" type="text" class="form-control" ng-change="select_control()" ng-model="project.businesssubjectcontrol" list="employees_list"  ></div>
                                    
                                    
                                    </div>   
                                </div>                                
                                
                               <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Estado</label>
                               
                               <div class="col-md-4">
                                 <select style={{stylenew}}   class="form-control m-b" ng-model="project.state">
                                              <option></option>
                                        <option>Activo</option>
<!--                                         <option>Inactivo</option> -->
<!--                                         <option>Espera Aprobacion</option> -->
<!--                                         <option>En Curso</option> -->
<!--                                         <option>Terminado</option> -->
                                        </select> 
                                 </div>
                                 
                               </div> 
                               
                               <div class="row" style="margin-top: 10px !important;">
                                 <label ng-show="!indicador_nuevo"  class="col-md-2 control-label alineacion_i">Subir Documento</label>
                                     <div ng-show="!indicador_nuevo" id="fileuploader">Upload</div>
  			     				 <input id='document_id' type='hidden'  ng-model='document.id' value={{document.id}} />
  			     				  <a ng-show="!indicador_nuevo"  href="http://localhost:8080/gestorproyecto/resources/pdf/index/{{document.id}}.pdf" target="_blank">Abrir</a>
                                </div>  
                               
                              
  			      
  			         
                                                 
                            </div>
                                
                                
                               
                             </form>
		 			</div>  
		 		 </div>  
		   	</div>  
		   	
   	
   			  <div class="col-md-12">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>Detalles del Cliente </h5>
                            
                        </div>
                        <div class="ibox-content">
                            <form method="get" class="form-horizontal">
                            
                             <div class="form-group row">
                            <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Cliente:</label>
                                    <div class="col-md-10"><input style={{stylenew}}  type="text" class="form-control" ng-model="project.clientname"></div>   
                                </div>
                                
                                <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Contacto:</label>
                                    <div class="col-md-10"><input style={{stylenew}} type="text" class="form-control" ng-model="project.clientcontact"></div>   
                                </div>  
                                
                                
                                  <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Telefono:</label>
                                    <div class="col-md-4"><input style={{stylenew}} type="text" class="form-control" ng-model="project.clientphone"></div>   
                                
                                
                                
                                  
                                 <label class="col-md-2 control-label alineacion_i">Direccion:</label>
                                    <div class="col-md-4"><input style={{stylenew}} type="text" class="form-control" ng-model="project.clientaddress"></div>   
                                </div>  
                                
                                
                                  <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Fax:</label>
                                    <div class="col-md-4"><input style={{stylenew}} type="text" class="form-control" ng-model="project.clientfax"></div>   
                                
                                 <label class="col-md-2 control-label alineacion_i">Celular:</label>
                                    <div class="col-md-4"><input style={{stylenew}} type="text" class="form-control" ng-model="project.clientmovil" ></div>   
                                </div>  
                                
                                  <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Email:</label>
                                    <div class="col-md-10"><input style={{stylenew}} type="text" class="form-control" ng-model="project.clientmail" ></div>   
                                </div>  
                                 
                                
                                </div>
                               
                               
                                
                                
                               
                             </form>
		 			</div>  
		 		 </div>  
		   	</div>
   	
   			 <div class="col-md-12">
                    <div class="ibox float-e-margins" >
                        <div class="ibox-title">
                            <h5>Caracteristicas del proyecto </h5>
                            
                        </div>
                        <div class="ibox-content">
                            <form method="get" class="form-horizontal">
                            
                             <div class="form-group row">
                            <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Fecha de Inicio:</label>
                                    <div class="col-md-2">
                                    <div class="input-group date" style={{stylenew}} >
														<span class="input-group-addon"><i
															class="fa fa-calendar"></i></span><input type="text"
															class="form-control" 
															ng-change="mensaje()" ng-model="project.startdate"
															placeholder="dia/mes/año">
													</div>
                                    
                                    </div>   
                               
                                 <label class="col-md-2 control-label alineacion_i">Fecha de cierre:</label>
                                    <div class="col-md-2">
                                    <div class="input-group date" style={{stylenew}} >
														<span class="input-group-addon"><i
															class="fa fa-calendar"></i></span><input type="text"
															class="form-control" 
															ng-change="mensaje()" ng-model="project.enddate"
															placeholder="dia/mes/año">
													</div>
                                    
                                    </div>   
                                
                                 <label class="col-md-2 control-label alineacion_i">Plazo(Dias):</label>
                                    <div class="col-md-2"><input style={{stylenew}}  type="number" class="form-control" value="00" ng-model="project.daysleft"></div>  
                                  
                                </div>  
                                
                                 <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i" ng-model="project.location" >Ubicacion:</label>
                                    <div class="col-md-2">
                                    
                                    <select style={{stylenew}}   class="form-control m-b" ng-model="project.location">
                                              
                                        <option>	Amazonas	</option>
										<option>	Ancash	</option>
										<option>	Apurimac	</option>
										<option>	Arequipa	</option>
										<option>	Ayacucho	</option>
										<option>	Cajamarca	</option>
										<option>	Callao	</option>
										<option>	Cusco	</option>
										<option>	Huancavelica	</option>
										<option>	Huanuco	</option>
										<option>	Ica	</option>
										<option>	Junin	</option>
										<option>	La Libertad	</option>
										<option>	Lambayeque	</option>
										<option>	Lima	</option>
										<option>	Loreto	</option>
										<option>	Madre De Dios	</option>
										<option>	Moquegua	</option>
										<option>	Pasco	</option>
										<option>	Piura	</option>
										<option>	Puno	</option>
										<option>	San Martin	</option>
										<option>	Tacna	</option>
										<option>	Tumbes	</option>
										<option>	Ucayali	</option>

                                      
                                      
                                        </select>
                                    
                                    </div>   
                                    
                                    
                               
                                 <label class="col-md-2 control-label alineacion_i"  >Monto del Contrato:</label>
                                    <div class="col-md-2"><input  style={{stylenew}}  type="number" class="form-control" ng-model="project.totalamount"></div>   
                                
                                 <label class="col-md-2 control-label alineacion_i">Tamaño:</label>
                                      <div class="col-md-2">  <select  style={{stylenew}}  class="form-control m-b"  ng-model="project.size">
                                              <option></option>
                                        <option>Muy Grande</option>
                                        <option>Grande</option>
                                        <option>Estandar</option>
                                        <option>Pequeña</option>
                                        <option>Muy Pequeña</option>
                                        </select>  </div>  
                                  
                                </div> 
                                
                                  <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Forma de Pago:</label>
                                    <div class="col-md-2">  <select style={{stylenew}}  class="form-control m-b" ng-model="project.typepayment">
                                      
                                        <option>Suma Alzada</option>
                                        <option>Forma 2</option>
                                        <option>Forma 3</option>
                                        </select>  </div>   
                               
                                 <label class="col-md-2 control-label alineacion_i" style={{stylenew}} >Tipo de Entidad:</label>
                                    <div class="col-md-2"> <input style={{stylenew}}  type="radio" name="tipoentidad" value="publica" > <label class="control-label">Pública</label> </div>
                                    <div class="col-md-2">  <input  style={{stylenew}}  type="radio" name="tipoentidad" value="privada" ><label class="control-label"> Privada</label> </div>
                                    </div>   
                                
                              
                                </div>
                                
                                
                                  <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i" >Costo Institucional:</label>
                                    <div class="col-md-10">
										
									<div class="checkbox i-checks"><label> <input style={{stylenew}}  type="checkbox" value=""  > <i></i> </label></div>
									</div>   
                                
                                   
                                </div>  
                                
                                  
                              </form>
                                
                           </div>
                               
                               
                                
                                
                               
                            
		 			</div>  
		 		 </div>  
		 		 
		 		 
	
		   	</div>
		   	
		   	
		   	
		   	<div class="row">
		   	 <div class="col-lg-6">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5 style={{stylenew}} >Linea de Negocio</h5>
                           
                        </div>
                        <div class="ibox-content">
                            <form class="form-horizontal">
                           <div class="form-group">
		                             <div class="row">
		                                    <div class="col-md-6"> <input type="radio" name="tipoentidad" value="publica" ><label class="control-label"> Ingenieria</label></div>
		                                     <div class="col-md-6">  <input type="radio" name="tipoentidad" value="privada" > <label class="control-label">EPCM </label> </div>
		                             		 
		                             </div>
                           </div> 
                                 
                            <div class="form-group">        
                              <div class="row">
                                    <div class="col-md-6"> <input type="radio" name="tipoentidad" value="publica" ><label class="control-label"> EPCM 2 </label></div>
                                    <div class="col-md-6"> <input type="radio" name="tipoentidad" value="privada" ><label class="control-label"> EP</label> </div>
                           	 </div> 
                            </div> 	    
                              
                               
                            </form>
                        </div>
   				</div>
   			</div>
   			
   			
   			<div class="col-lg-6" style="border-left:#e7eaec 3px solid !important;">
                    <div class="ibox float-e-margins">
                       <div class="ibox-title">
                            <h5 style={{stylenew}} >Mercado</h5>
                           
                        </div>
                        <div class="ibox-content">
                            <form class="form-horizontal">
                           <div class="form-group">
		                             <div class="row">
		                                    <div class="col-md-6"> <input type="radio" name="tipoentidad" value="publica" ><label class="control-label">Otros</label></div>
		                                     <div class="col-md-6">  <input type="radio" name="tipoentidad" value="privada" ><label class="control-label"> Alcantarillado</label> </div>
		                             		 
		                             </div>
                           </div> 
                                 
                            <div class="form-group">        
                              <div class="row">
                                    <div class="col-md-6"> <input type="radio" name="tipoentidad" value="publica" ><label class="control-label">Edificaciones Generales</label></div>
                                    <div class="col-md-6"> <input type="radio" name="tipoentidad" value="privada" ><label class="control-label">Procesos Industriales Mineros</label></div>
                           	 </div> 
                            </div> 	    
                              
                               
                            </form>
                        </div>
   				</div>
   			</div>
   		</div>
   	
   		<div class="row alineacion_c" >
            <button  class="btn btn-primary dim"  ng-disabled="!validator_save()" id='btnsaveproject'  ng-click="save_project()"   >Guardar</button>
				<div id='loadertransaction2'  class="contentBar">
			<!-- 							<div  class="ball"></div> -->
			<!-- 							    <div class="ball1"></div> -->
										    <h4 >Procesando</h4>
										    <div id="block_12" class="barlittle"></div>
									    	<div id="block_12" class="barlittle"></div>
									        <div id="block_22" class="barlittle"></div>
									        <div id="block_32" class="barlittle"></div>
									        <div id="block_42" class="barlittle"></div>
									        <div id="block_52" class="barlittle"></div>
									    </div>
			</div>
			
			
  </div>  




            </div>
            </div>
         

        </div>





  

       

   <div class="modal inmodal" id="modal-confirm-remove" tabindex="-1" role="dialog" aria-hidden="true" >
                                <div class="modal-dialog">
                                <div class="modal-content animated bounceInRight">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" onclick='hide_modal_remove()'><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                         
                                            
                                            <h1 class="modal-title">ELIMINAR</h1>
                                           <p>¿Realmente desea eliminar el registro?</p>   
                                        </div>
                
                              
                                          <div class="modal-footer">
                                         
                                      
					         <button type="button" class="btn btn-primary dim btnclose" data-dismiss="modal" >Cancelar</button>
					                <button type="button" id='confirm-remove-btn'   onclick="hide_modal_remove()"  ng-click='confirmRemove(product.id)' class="btn btn-primary dim"  >Confirmar</button>
					 			</div>	
							
					 			
					 			
                            </div>
                    </div>
                </div>


<div class="modal inmodal" id="myModal" tabindex="-1" role="dialog" aria-hidden="true" >
                                <div class="modal-dialog">
                                <div class="modal-content animated bounceInRight">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                  
                                            <h4 class="modal-title">TAREA</h4>
                                            
                                        </div>
                                        <div class="modal-body modal_scrolable">
                                        
                    
<!-- aca inicia el formulario-->

                      <div  name="formulario">
                            <form class="form-horizontal">

<!--  					<div ng-show="!newreg" id="fileuploader">Upload</div> -->
<!--   			      <input id='product_id' type='hidden' ng-model='product.id' value='{{product.id}}' /> -->
  			      
							<div class="form-group"><label class="col-sm-3 control-label" >Codigo</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="task.shortname" /></div>
                                </div>
                                   <div class="form-group"><label class="col-sm-3 control-label" >Nombre</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="task.name" /></div>
                                </div>
                                <div class="form-group"><label class="col-sm-3 control-label" >Descripcion</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="task.description" /></div>
                                </div>

                       
                                  <div class="form-group"><label class="col-sm-3 control-label" >Otras Especificaciones</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="task.comment" /></div>
                                </div>

                                 <div class="form-group"><label class="col-sm-3 control-label" >Horas Estimadas</label>

                                    <div class="col-sm-9"><input type="number" class="form-control" ng-model="task.estimatehour" /></div>
                                </div>
                                 <div class="form-group"><label class="col-sm-3 control-label" >Horas Real</label>

                                    <div class="col-sm-9"><input type="number" class="form-control" ng-model="task.realhour" /></div>
                                </div>
                                 <div class="form-group"><label class="col-sm-3 control-label" >Presupuesto Estimado</label>

                                    <div class="col-sm-9"><input type="number" class="form-control" ng-model="task.estimateamount" /></div>
                                </div>
                                 <div class="form-group"><label class="col-sm-3 control-label" >Gasto Real</label>

                                    <div class="col-sm-9"><input type="number" class="form-control" ng-model="task.realamount" /></div>
                                </div>
                                  
                                  <div  class="form-group"><label class="col-sm-3 control-label" >Actividad</label>
									<datalist id="activities_list">
									<option ng-repeat="item in activities.list" id="{{item.activity.id}}" value={{item.show}} > 
									</datalist>
                                    <div class="col-sm-9"><input id="activityy" type="text" class="form-control" ng-change="select_activity()" ng-model="task.actividad" list="activities_list"  ></div>
                                    
                                </div>
                                 
                              
                                
                                
                                
                                 

                               
                            </form>
                        </div>
                        
                        
                        </div>

    <!-- aca termina el formuilario -->
                                        <div class="modal-footer">
                                        	
                                            <button type="button" class="btn btn-white dim btnclose" data-dismiss="modal">Cerrar</button>
                                            <button  ng-disabled="!valor()"  type="button"  class="btn btn-primary dim" ng-click="anadir()" >Guardar</button>
                                       	
                                       
                                        </div>
                                   
                                </div>
                            </div>
                    </div>
           




<!-- aca termina el modal-->

    <!-- Mainly scripts -->
    

    <!-- Data Tables -->
   
    <!-- Page-Level Scripts -->
   

</body>

</html>
