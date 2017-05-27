<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>JUGUERIA VERO</title>
 <jsp:include page="/pages/parts/head.jsp"></jsp:include>
 
 <script>
var page="registro-gastos";
</script>
</head>
<body>

<div id="wrapper" >


    <nav class="navbar-default navbar-static-side" role="navigation">
        <jsp:include page="/pages/parts/part_sidemenu_commerce.jsp"></jsp:include>
     </nav>
    <div id="page-wrapper" class="gray-bg">
        <div class="row border-bottom">
    <!-- aca inicia el header-->
       <nav style="margin-bottom: 0" role="navigation" class="navbar navbar-fixed-top">
      <jsp:include page="/pages/parts/part_navbar.jsp"></jsp:include>
        </nav>
       </div>
       <div class="wrapper wrapper-content animated fadeInRight">
          
            <div class="ibox float-e-margins">
                <br>
                <br>
            <div class="centrar_titulo">
                <h5>GASTOS</h5>
                
            </div>
            <div class="ibox-content">
            <div class="row">
            <button  class="btn btn-primary dim" title="Nuevo"  ng-click="Nuevo()" data-toggle="modal" data-target="#myModal_expense" href="javascript:void(0);" >Nuevo Registro</button>
			</div>
            <div class="row">
            <div class="col-sm-2"> 
               <div class="ibox float-e-margins">  
                                 
               <div class="form-group" id="data_1">
                  <span>Desde</span> <br />    
                     <div class="input-group date">                                        
                <span class="input-group-addon"><i class="fa 
                fa-calendar"></i></span><input type="text"  class="form-control"  ng-model="filter.datefrom" placeholder="dia/mes/año">
                </div>
                    </div>
                   
                    </div>
            </div>
            <div class="col-sm-2">
               <div class="ibox float-e-margins">  
                                 
               <div class="form-group" id="data_1">
                  <span>Hasta</span> <br />    
                     <div class="input-group date">                                        
                <span class="input-group-addon"><i class="fa 
                fa-calendar"></i></span><input type="text"   class="form-control" ng-model="filter.dateto" placeholder="dia/mes/año">
                </div>
                    </div>
                   
                    </div>
             </div>
             
              <div class="col-sm-4"> <br /> 
                    <button class="btn btn-primary" title="Filtrar" ng-click="filter()">Filtrar</button>
     	<button class="btn btn-info" ng-click="exportToExcel('#exportable')"><span class="glyphicon glyphicon-share"></span>Excel</button>
               </div>
            
   	 </div>
     <p>{{message}}</p>
     
            <table class="table table-striped table-bordered table-hover" id="exportable" ng-cloak>
            <thead>
            <tr>
<!--                 <th>ID</th> -->
             
                <th>FECHA</th>
                <th>CONCEPTO</th>
                <th>MONTO</th>
                <th>ACCION</th>
         
            
            </tr>
            </thead>
            <tbody>

            <tr ng-repeat="item in expenses.list ">
               
                <td >{{ item.fecha.fecha}}</td>
                <td >{{  item.detail.detail[0].subtransactiondetail.detail }} </td>
                <td class="alineacion_d" >{{ item.subtransaction.totalmoney | number:2}}</td> 
                <td class="center">
                    <button type="button" title="Editar" ng-click="edit(item)"  data-toggle="modal" data-target="#myModal_expense" class="btn btn-warning btn-sm"><i class="fa fa-edit"></i></button>
                    <button type="button" title="Eliminar"  ng-click="edit(item)" onclick='question_remove()' class="btn btn-danger btn-sm" href><i class="fa fa-trash-o"></i></button>
                     
                </td>
                
            </tr>
            
            </tbody>
             <tfoot>
             <tr>
            <td></td>
            <td>TOTAL</td>
            <td class="alineacion_d">{{getTotal() | number:2}}</td>
            <td> </td>
            </tr>
            </tfoot>
          
            
            </table>
              <div  id='paginator-content'>
	    <div><a class='btn btn-default' ng-click='movePager(-1)' href > << </a></div>
	    <div>
	      <ul class="pagination">
	        <li ng-repeat="i in pagesPaginator" title="Ir a Pagina {{i}}" class='{{i==page?"active":""}}'><a class="red-btn" href="#" ng-click='changePage(i)'>{{i}}</a></li>
	        
	      </ul>
	   </div>

      <div><a class='btn btn-default' ng-click='movePager(1)' href > >> </a></div>
     </div>
         

            </div>
            </div>
            </div>
          
    

        </div>




   </div>

</body>
</html>