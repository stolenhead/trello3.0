var addList=function(){
	this.setAttribute("data-toggle","modal");
    this.setAttribute("data-target",".bs-example-modal-sm")
    $("#checkPeque").removeClass("none");
}
var addTitleCheck=function(){
	var area =$("#checkArea");
	var contenido=$("#contenido").val();
	var cajaCheck=$("<h4>");
	var addDiv =$("<div>");
	var checkListArea=$("<div>");
	checkListArea.addClass("areaChecks");
	var botonAdd=$("<button>");
	var inputCheckList=$("<input></input><br>");
	inputCheckList.attr("id","inCheck");
	botonAdd.attr("id","bottonAdd");
	botonAdd.attr("type","button");
	 botonAdd.addClass("btn-warning","boton2","btn");
    area.append(cajaCheck);
	cajaCheck.attr("id","tituloCheck")
	cajaCheck.text(contenido);
	area.append(addDiv);
	addDiv.append(inputCheckList);
	addDiv.append(botonAdd);
	checkListArea.attr("id","checkListAre");
	checkListArea.insertBefore(addDiv);
	inputCheckList.attr("placeholder","add a list");
	var desaparece=$("#checkPeque");
	desaparece.addClass("none");
	$("#contenido").val("");

	$("#bottonAdd").click(function(e){
		e.preventDefault();
		addCheckBoxes(e, inputCheckList.val(), checkListArea);
	});
}
var addCheckBoxes=function(e, contenido2, divPapa){
	e.preventDefault();
	// var divPapa =$("#checkListAre");
	var cajaCheck=$("<div>");
	var box =$("<input>");
	box.attr("type","checkbox");
	// var contenido2=$("#inCheck");
	var conte=$("<p>");
	conte.text(contenido2);
	divPapa.append(cajaCheck);
	box.addClass("left");
	cajaCheck.append(box);
	cajaCheck.append(conte);
	$("#inCheck").val("");
}
$(document).ready(function(){
 $("#checkList").click(addList);
 $("#botonCheck").click(addTitleCheck);
 // $("#bottonAdd").click(addCheckBoxes);
});
