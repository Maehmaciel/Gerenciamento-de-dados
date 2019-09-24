onload=function(){
    ajax("livraria.xml",mostrar)
  }

  function ajax(recurso,funcao) {
  let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = funcao
    ajax.open("GET",recurso, true);
    ajax.send();
  }

  function mostrar()
  { 
    if(this.readyState==4 && this.status==200){
      let raiz = this.responseXML;
  }
  }
