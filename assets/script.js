var celulaSorteioAtual = 0;
document.body.onkeydown = function (e) {
  console.log(e.keyCode);

  if(e.keyCode == 49 || e.keyCode ==  97){
    ativarSorteioDeMandos(1);
  }

  if(e.keyCode == 50 || e.keyCode ==  98){
    ativarSorteioDeMandos(2);
  }

  if(e.keyCode == 51 || e.keyCode ==  99){
    ativarSorteioDeMandos(3);
  }

  if(e.keyCode == 52 || e.keyCode ==  100){
    ativarSorteioDeMandos(4);
  }

  if(e.keyCode == 53 || e.keyCode ==  101){
    ativarSorteioDeMandos(5);
  }

  if(e.keyCode == 48 || e.keyCode ==  96){
    desativarSorteioDeMandos();
  }

  if(e.keyCode == 32){
    sortearMando();
  }
};

function ativarSorteioDeMandos(id) {
  $(".background-confronto-"+id).fadeIn(1000);
  $(".confronto-"+id).addClass('confronto-ativo');
}

function desativarSorteioDeMandos(){
  $(".background-celula").fadeOut(1000);
  $(".confronto").removeClass('confronto-ativo');
}

function sortearMando(){
  var timesEsquerda = [];
  var timesDireita = [];

  obtemMandosAtuais(timesEsquerda, timesDireita);
  inverterMando(timesEsquerda, timesDireita)

  console.log(timesEsquerda);
  console.log(timesDireita);
}


function obtemMandosAtuais(timesEsquerda, timesDireita) {
  $('.confronto-ativo').each(function(index){
    if( $( this ).hasClass( 'time-esquerda' ) ){
      timesEsquerda.push( $( this ).attr( 'src' ) );
    }

    if( $( this ).hasClass( 'time-direita' ) ){
      timesDireita.push( $( this ).attr( 'src' ) );
    }
  });
}

function inverterMando(timesEsquerda, timesDireita) {
  $('.confronto-ativo').each(function(index){
    if( $( this ).hasClass( 'time-esquerda' ) ){
      $( this ).fadeOut( 1000, function(){
        var imagem = timesDireita.shift();
        imagem = imagem.split('_');
        imagem = imagem[0] + '_esq-8.png'
        $( this ).attr( 'src', imagem);
        $( this ).fadeIn( 1000 );
      });
    }

    if( $( this ).hasClass( 'time-direita' ) ){
      $( this ).fadeOut( 1000, function(){
        var imagem = timesEsquerda.shift();
        imagem = imagem.split('_');
        imagem = imagem[0] + '_dir-8.png'
        $( this ).attr( 'src', imagem );
        $( this ).fadeIn( 1000 );
      });
    }
  });
}
