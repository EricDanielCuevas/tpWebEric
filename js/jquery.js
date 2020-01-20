$(document).ready(function(){
    var imgItems =$(".slideShow li").length;
    var imgPos =1;

    $(".slideShow li").hide();
    $(".slideShow li:first").show();
    $('#pagination li:first').css({'color':'#CD6E2E'});

    $("#pagination li").click(pagination);

    setInterval(function(){
        nextSlider();

    },3000);
    
    function pagination(){
        var paginationPos=$(this).index()+1;
        
        $(".slideShow li").hide();
        $(".slideShow li:nth-child( " +paginationPos+ " )").fadeIn();

        $("#pagination li").css({'color':'#858585'});
        $(this).css({'color':'#CD6E2E'});
    }

    function nextSlider(){
      
      if (imgPos >=imgItems) {
        
        imgPos=1;

      }else{

        imgPos++;
      }

      $(".slideShow li").hide();
      $(".slideShow li:nth-child( " +imgPos+ " )").fadeIn();  
    }
});

var contador = 0;

function count_click_add() {
  contador += 1;
}

$( ":input" ).click(function() {
   contador +=1;
   $("#numeroContador").text(contador);
});//llave del document ready   

//fin index


function validar(){


    var nombreYapellido=$("#nombreYapellido").val();
    var email=$("#email").val();
  //var email = document.getElementById("mail").value;
    var tel =$("#telefono").val();
    var mensaje =$("#mensaje").val();
    
    var regMail=/\w+@+\w+\.+[a-z]/; /* valida el formato de correo*/
    var regTel=/^\d{4}-\d{4}$/; //0000-0000

    if (nombreYapellido=='')
    {
        alert("el nombre y apellido no puede estar vacio");
        return false;
    }
    else if(!regMail.test(email))
    { 
       $("#email").addClass("error");
       $(".mensajeError").css("visibility","visible");

       return false;
    }
   /* else if(!regMail.test(email))
    {
    var input = document.getElementById("email");
    input.className += "error";
    document.getElementById("mensajeError").style.visibility="visible";
    return false;
    }*/
    else if(!regTel.test(tel))
    {
        $("#telefono").addClass("error");
        $(".mensajeError").css("visibility","visible");
        return false;
    }    

 
 }
 

   
