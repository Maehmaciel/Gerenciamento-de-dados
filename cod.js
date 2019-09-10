function percorre(xmlNode){
  var arvore = new Array();
     for(var i=0;i<xmlNode.childNodes.length;i++){
     if(xmlNode.childNodes[i].nodeType == 1){
       /*pai:xmlNode*/
           arvore.push({name:xmlNode.nodeName,value:xmlNode.childNodes[i].firstChild.nodeValue,child:percorre(xmlNode.childNodes[i])});
           if(arvore[arvore.length-1].value==="\n\t\t\t" || arvore[arvore.length-1].value==="\n\t\t" ){
             arvore.pop(arvore.length-1)
            }
     }
   }
   arvore.forEach((item)=>{
       document.getElementById('resp').innerHTML+=item.value+"<br>"
       ul=document.getElementById('ul')
       li=document.createElement('li')
       a=document.createElement('a')
       if(item.name==="receita"){
       
       a.innerHTML=item.value
       li.appendChild(a)
       ul.appendChild(li)
      }
      else{
        li=document.createElement('li')
        li.innerHTML=item.value
       ul.appendChild(li)
      }
      
     })
 }




  

onload=function(){
    ajax("receitas.xml",mostrar)
  }

  function ajax(recurso,funcao) {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = funcao
    ajax.open("GET",recurso, true);
    ajax.send();
  }

  function mostrar()
  {
    if(this.readyState==4 && this.status==200){
      var parser = new DOMParser();
      var xml = parser.parseFromString(this.responseText,"text/xml");
      var raiz=xml.documentElement;
      percorre(raiz);
  }
  }