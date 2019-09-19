
/*
1. Función que muestra y esconde la sección para hacer comentarios 
   al hacer click el botón 'Escribe una reseña'. 
   on click!
   (5 puntos)
*/
$("#seccion_comentario").css("display", "none");

$(document).ready(function(){
    $("#escribe_reseña").on( "click", function() {
      $('#seccion_comentario').show(); //muestro mediante id
     });
  });

/*
2. Cargar los comentarios de el archivo comentarios.xml o bien de 
  https://tc2026daw.github.io/instrucciones/misc/comentarios.xml 
  (función ajax, 25 puntos)
*/
$.ajax({
  url: "https://tc2026daw.github.io/instrucciones/misc/comentarios.xml",
  type: 'GET',
  dataType: 'xml',
  success: function(data) {
    // console.log(data);
    let new_html = "";

    $(data).find("comments").each(function(event) {
      new_html += `
      <ul>${$(this).find("name").text()}
      ${$(this).find("text").text()}</ul>
      `;
    });
    $("#seccion_reviews").append(new_html);
  },
  error: function(errorMsg){
    console.log(errorMsg)

  },
})


/*
3. Funcion que apendiza el nuevo comentario al darle click a PUBLICAR
  on click!
  (función, 35 puntos)
*/

$(document).ready(function(){
        $("#btn-publicar").click(function(){
        //$("#seccion_comentario").append(document.getElementById("email").value);
          $("#seccion_comentario").append(document.getElementById("nombre").value);
          var content = $('#comentario').html();
          $("#seccion_comentario").append(content);
  }); 
});

/*
4. Funcion que limpia el nombre, el email y el div "#comentarios" al darle
   click en "btn-limpiar" con leyenda de "CANCELAR"
   on click!
  (5 puntos)
*/

$(document).ready(function() {
  $('#btn-limpiar').click(function() {
    $('#nombre').val('');
    $('#email').val('');
    $('#comentario').empty();
  });
});


/*
Funcion que recibe un numero de stars y regresa los 5 spans 
que simbolizan las estrellas del rating. por ejemplo:
let stars = 3;
let html = getStarsSpans(stars);

html = '
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
'
*/
function getStarsSpans(stars) {
  let new_html = '';
  for( let i = 0; i < stars; i++) {
    new_html += `
      <span class="fa fa-star checked"></span>
    `;
  }

  for ( let i = 0; i < 5 - stars; i++ ) {
    new_html += `
      <span class="fa fa-star"></span>
    `;
  }

  return new_html;
}
