<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge;chrome=IE8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GANTT</title>
<%--     <jsp:include page="../../parts/head.jsp"></jsp:include> --%>
<!--     <script src="resources/js/angular/configuration/task/TaskController.js"></script> -->
<!--     <script src="resources/js/uploadfile/jquery.uploadfile.min.js"></script> -->
<!--     <link href="resources/js/uploadfile/uploadfile.css" rel="stylesheet" /> -->
    
    
    
    
        
        
        
       
        <link href="resources/css/gantt/style.css" type="text/css" rel="stylesheet">
        <link href="resources/css/gantt/prettify.min.css" rel="stylesheet" type="text/css">
        
         <script src="resources/js/gantt/js/jquery.min.js"></script>
    <script src="resources/js/gantt/js/jquery.cookie.min.js"></script>
    <script src="resources/js/gantt/js/jquery.fn.gantt.js"></script>
    <script src="resources/js/gantt/js/bootstrap.min.js"></script>
    <script src="resources/js/gantt/js/prettify.min.js"></script>
        
        
        <style type="text/css">
            body {
                font-family: Helvetica, Arial, sans-serif;
                font-size: 13px;
                padding: 0 0 50px 0;
            }
            h1 {
                margin: 40px 0 20px 0;
            }
            h2 {
                font-size: 1.5em;
                padding-bottom: 3px;
                border-bottom: 1px solid #DDD;
                margin-top: 50px;
                margin-bottom: 25px;
            }
            table th:first-child {
                width: 150px;
            }
        </style>
    
    
    
    
    
<script>
var page="gantt";
</script>

</head>
 <body>

        <div class="container">

         

            <div class="gantt"></div>



            

           

        </div>

   
    <script>
        $(function() {

            "use strict";

            $(".gantt").gantt({
                source: [{
                    name: "Analisis de Recursos",
                    desc: "Analysis",
                    values: [{
                        from: "/Date(1320192000000)/",
                        to: "/Date(1322401600000)/",
                        label: "Requirement Gathering",
                        customClass: "ganttRed"
                    }]
                },{
                    desc: "Scoping",
                    values: [{
                        from: "/Date(1322611200000)/",
                        to: "/Date(1323302400000)/",
                        label: "Scoping",
                        customClass: "ganttRed"
                    }]
                },{
                    name: "Revision Documentaria",
                    desc: "Development",
                    values: [{
                        from: "/Date(1323802400000)/",
                        to: "/Date(1325685200000)/",
                        label: "Development",
                        customClass: "ganttGreen"
                    }]
                },{
                    name: " ",
                    desc: "Showcasing",
                    values: [{
                        from: "/Date(1325685200000)/",
                        to: "/Date(1325695200000)/",
                        label: "Showcasing",
                        customClass: "ganttBlue"
                    }]
                },{
                    name: "DISENO",
                    desc: "Development",
                    values: [{
                        from: "/Date(1326785200000)/",
                        to: "/Date(1325785200000)/",
                        label: "Development",
                        customClass: "ganttGreen"
                    }]
                },{
                    desc: "Showcasing",
                    values: [{
                        from: "/Date(1328785200000)/",
                        to: "/Date(1328905200000)/",
                        label: "Showcasing",
                        customClass: "ganttBlue"
                    }]
                },{
                    name: "EJECUCION",
                    desc: "Training",
                    values: [{
                        from: "/Date(1330011200000)/",
                        to: "/Date(1336611200000)/",
                        label: "Training",
                        customClass: "ganttOrange"
                    }]
                },{
                    desc: "Deployment",
                    values: [{
                        from: "/Date(1336611200000)/",
                        to: "/Date(1338711200000)/",
                        label: "Deployment",
                        customClass: "ganttOrange"
                    }]
                },{
                    desc: "Warranty Period",
                    values: [{
                        from: "/Date(1336611200000)/",
                        to: "/Date(1349711200000)/",
                        label: "Warranty Period",
                        customClass: "ganttOrange"
                    }]
                }],
                navigate: "scroll",
                scale: "weeks",
                maxScale: "months",
                minScale: "hours",
                itemsPerPage: 10,
                useCookie: true,
                onItemClick: function(data) {
                    alert("Item clicked - show some details");
                },
                onAddClick: function(dt, rowId) {
                    alert("Empty space clicked - add an item!");
                },
                onRender: function() {
                    if (window.console && typeof console.log === "function") {
                        console.log("chart rendered");
                    }
                }
            });

            $(".gantt").popover({
                selector: ".bar",
                title: "I'm a popover",
                content: "And I'm the content of said popover.",
                trigger: "hover",
                placement: "auto right"
            });

            prettyPrint();

        });
    </script>

    </body>



</html>
