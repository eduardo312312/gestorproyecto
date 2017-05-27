var app=angular.module('app', []);

app.run(function($rootScope, $timeout, ExcelService) {
	$rootScope.excel=function(tableId){ // ex: '#my-table'
		$rootScope.exportHref=ExcelService.tableToExcel(tableId,'excel');
	       $timeout(function(){location.href=$rootScope.exportHref;},100); // trigger download
	   }
	});

