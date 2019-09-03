
function ajax(recurso,funcao) {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = funcao
    ajax.open("GET",recurso, true);
    ajax.send();
    //POST ajax.send(dados)
    //var parser= new DOMParser();
  }


  function mostrar()
  {if(this.readyState==4 && this.status==200){
      var parser = new DOMParser();
      var xml = parser.parseFromString(this.responseText,"text/xml");
      var raiz=xml.documentElement;
      var filhos=raiz.childNodes;
      
       

    
      for(let filho of filhos)
      { document.getElementById('resp').innerHTML+=filho.nodeName
        if(filho.nodeType==1){
          document.getElementById('resp').innerHTML+=":"+filho.textContent
        }
        document.getElementById('resp').innerHTML+='<br>'
      }
  }
  }

onload=function(){
    ajax("nota.xml",mostrar)
  }

  