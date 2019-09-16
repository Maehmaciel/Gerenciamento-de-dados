onload=function(){
    ajax("receitas.xml",mostrar)
  }

  function ajax(recurso,funcao) {
  let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = funcao
    ajax.open("GET",recurso, true);
    ajax.send();
  }

  function mostrar()
  { tam=0
    if(this.readyState==4 && this.status==200){
      let raiz = this.responseXML;
     asReceitas(raiz)

  }
  }

  function asReceitas(raiz){
    let receita =[]
    let receitas =raiz.getElementsByTagName("receita")
  for( r in receitas){
    if(receitas[r].nodeType!=1 )
    continue
  else{
  let uRec = receitas[r].children;
  for(i in uRec){
    if(uRec[i].nodeType!=1 )
    continue
    else{
     
    receita.push(uRec[i])
    }
  }
  } 
  }
umaReceita(receita)
  }

  function umaReceita(receita){
    ul=document.getElementById('ul')

    for(r in receita){
      link_a=document.createElement('a')
      li=document.createElement('li')
      u=document.createElement('ul')
      if(r%4==0){
      link_a.innerHTML=receita[r].innerHTML
      b=parseInt(r)+1
      c=parseInt(r)+2
      
      ingrediente=receita[b]
      preparo=receita[c]
      let conteudo =[]
      conteudo.push(ingrediente)
      conteudo.push(preparo)
      link_a.onclick=e=>{
        e.preventDefault()
        main=document.getElementById('resp')
        main.innerHTML=""
        emoji="&#10000;"
       for(c in conteudo){
        filhos=conteudo[c].children
       
        for(f in filhos){

          if(filhos[f].nodeType!=1 )
          continue
        else{
          main.innerHTML+=emoji+filhos[f].innerHTML+"<br>"
        }
        }
        emoji="	&#9745;"
        main.innerHTML+="<br>"
       }
        
      
      }
      li.appendChild(link_a)
    a=parseInt(r)+3
    fotos=receita[a].children
    for(f in fotos){
      l=document.createElement('li')
      if(fotos[f].innerHTML===undefined)
      continue
      else{
        img=document.createElement('img')
        //imagens retiradas dos sites; FreePic e Pexels
        img.src='imagens/'+fotos[f].innerHTML
        img.classList.add('desceu')
        l.appendChild(img)
      }
      
      u.appendChild(l)

      li.appendChild(u)
      ul.appendChild(li)
    }
   
    }
    }
  }


