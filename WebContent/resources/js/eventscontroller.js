$(document)
		.ready(
				function() {
					
					
					  $("input.onlynumbers").keypress(function(event) {
					        return /\d/.test(String.fromCharCode(event.keyCode));
					    });
					// en modales de segundo nivel.
					$("#btnadd").click(function() {
						$("#myModal").modal('toggle');
						$("#myModal_normal").modal('toggle');
						$("#myModal_Client").modal('toggle');
						$("#myModal_Prestamo").modal('toggle');
						$("#myModal_apertura").modal('toggle');
						$("#myModal_productores").modal('toggle');				
						$("#myModal_user").modal('toggle');
						$("#myModal_expense").modal('toggle');
					});

					$("#btnadd2").click(function() {
						$("#myModal_apertura").modal('toggle');	
						$("#myModal2").modal('toggle');
						$("#myModal_reg_prod").modal('toggle');
						$("#myModal_pago_liquidacion").modal('toggle');
						$("#myModal_edit").modal('toggle');
						$("#myModal_lending").modal('toggle');
						$("#myModal_payment_lending").modal('toggle');
						$("#myModal_properties").modal('toggle');
						
						

					});
					$("#btnadd3").click(function() {

						$("#myModal_reg_prod_pago").modal('toggle');
						$("#myModal_pago_liquidacion").modal('toggle');
					});

					$("#confirm-remove-btn").click(function() {
						$("#modal-confirm-remove").hide();
					});

					if ($(".date").length) {
						$.fn.datepicker.dates['en'] = {
							days : [ "Lunes", "Martes", "Miercoles", "Jueves",
									"Viernes", "Sabado", "Domingo" ],
							daysShort : [ "Lun", "Mar", "Mier", "Jue", "Vi",
									"Sab", "Dom" ],
							daysMin : [ "Do", "Lu", "Ma", "Mi", "Ju", "Vi",
									"Sa" ],
							months : [ "Enero", "Febrero", "Marzo", "Abril",
									"Mayo", "Junio", "Julio", "Agosto",
									"Setiembre", "Octubre", "Noviembre",
									"Diciembre" ],
							monthsShort : [ "Ene", "Feb", "Mar", "Abr", "May",
									"Jun", "Jul", "Ago", "Set", "Oct", "Nov",
									"Dic" ],
							today : "Hoy",
							clear : "Limpiar",
							format : "mm/dd/yyyy",
							titleFormat : "MM yyyy", /*
														 * Leverages same syntax
														 * as 'format'
														 */
							weekStart : 0
						};
						$('.date').datepicker({
							language : 'en',
							todayBtn : "linked",
							keyboardNavigation : false,
							forceParse : false,
							calendarWeeks : true,
							autoclose : true,
							format : 'dd/mm/yyyy'

						});
						$('.date').datepicker('update', new Date());
				}

					var $openModal = $(".abrir_modal_regprod"), $modal = $("#myModal_reg_prod");

					$openModal.click(function() {
						$modal.css("margin-top", $(window).scrollTop());
						$modal.toggle();
					});

				});
var restorepage;

$(function(){
    $(document).on('click','input[type=text]',function(){ this.select(); });
});
function isNumberKey(evt)
{
   var charCode = (evt.which) ? evt.which : evt.keyCode;
   if (charCode != 46 && charCode > 31 
     && (charCode < 48 || charCode > 57))
      return false;

   return true;
}
function retener()
{
	restorepage=document.body.innerHTML;
	
}
function printContent(el){

	var printcontent=document.getElementById(el).innerHTML;
	document.body.innerHTML=printcontent;

	window.print();
}

function question_remove() {
	$("#modal-confirm-remove").show();
}

function pago_flete() {
	$("#myModal_reg_prod_pago").show();
}

function hide_modal_remove() {
	$("#modal-confirm-remove").hide();
}
function hide_modal_confirm1() {
	$("#modal-confirm1").hide();
}
function hide_modal_confirm2() {
	$("#modal-confirm2").hide();
}

function click_en_toast() {

}


