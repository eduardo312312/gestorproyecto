<meta name="_csrf" content="${_csrf.token}" />
	<!-- default header name is X-CSRF-TOKEN -->
	<meta name="_csrf_header" content="${_csrf.headerName}" />
<link href="resources/css/inspinia/css/bootstrap.min.css" rel="stylesheet">
<link href="resources/css/inspinia/font-awesome/css/font-awesome.css" rel="stylesheet">
<link href="resources/css/inspinia/css/plugins/toastr/toastr.min.css" rel="stylesheet">
<link href="resources/css/inspinia/css/plugins/dataTables/dataTables.bootstrap.css" rel="stylesheet">
<link href="resources/css/inspinia/css/plugins/dataTables/dataTables.responsive.css" rel="stylesheet">
<link href="resources/css/inspinia/css/plugins/dataTables/dataTables.tableTools.min.css" rel="stylesheet">
    <link href="resources/css/inspinia/css/animate.css" rel="stylesheet">
    <link href="resources/css/inspinia/css/style.css" rel="stylesheet">
    <link href="resources/css/inspinia/css/plugins/datapicker/datepicker3.css" rel="stylesheet">
        
  <script src="resources/css/inspinia/js/jquery-2.1.1.js"></script>

  <script type="text/javascript">
//   nombre de systemuser  conectado.
  var actualuser="${pageContext.request.userPrincipal.name}";
  
var matched, browser;
jQuery.uaMatch = function( ua ) {
    ua = ua.toLowerCase();
    var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];
    return {
        browser: match[ 1 ] || "",
        version: match[ 2 ] || "0"
    };
};

matched = jQuery.uaMatch( navigator.userAgent );
browser = {};

if ( matched.browser ) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
}

// Chrome is Webkit, but Webkit is also Safari.
if ( browser.chrome ) {
    browser.webkit = true;
} else if ( browser.webkit ) {
    browser.safari = true;
}

jQuery.browser = browser;
</script>
 
  <script src="resources/css/inspinia/js/plugins/dataTables/jquery.dataTables.js"></script>
    <script src="resources/css/inspinia/js/plugins/dataTables/dataTables.bootstrap.js"></script>
    <script src="resources/css/inspinia/js/plugins/dataTables/dataTables.responsive.js"></script>
    <script src="resources/css/inspinia/js/plugins/dataTables/dataTables.tableTools.min.js"></script>

 <script src="resources/css/inspinia/js/plugins/chosen/chosen.jquery.js"></script>

   <script src="resources/css/inspinia/js/plugins/datapicker/bootstrap-datepicker.js"></script>

    <script src="resources/css/inspinia/js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <link href="resources/css/inspinia/css/plugins/ionRangeSlider/ion.rangeSlider.css" rel="stylesheet">
    <link href="resources/css/inspinia/css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css" rel="stylesheet">
  
    <script src="resources/css/inspinia/js/inspinia.js"></script>
    <script src="resources/css/inspinia/js/plugins/pace/pace.min.js"></script>
<script src="resources/css/inspinia/js/plugins/toastr/toastr.min.js"></script>
    <script src="resources/css/inspinia/js/inspinia.js"></script>
      <script src="resources/css/inspinia/js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="resources/css/inspinia/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
    <script src="resources/css/inspinia/js/bootstrap.min.js"></script>
    <script src="resources/js/angular.min.js"></script>
       <script src="resources/js/app.js"></script>    
           <script src="resources/js/services/services.js"></script> 
                  <script src="resources/js/moment.js"></script> 
 <script src="resources/js/eventscontroller.js"></script>
    <link href="resources/css/custom_css.css" rel="stylesheet" />
    <link href="resources/css/validation.css" rel="stylesheet" />        
    <link href="resources/css/inspinia/css/style.css" rel="stylesheet" />
     <link href="resources/css/inspinia/css/animate.css" rel="stylesheet" />
      <link href="resources/css/inspinia/font-awesome/css/font-awesome.css" rel="stylesheet" />



