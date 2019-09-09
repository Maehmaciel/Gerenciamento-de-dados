function xmlMontarArvore(xmlNode){
    var arvore = new Array();
          
   
    for(var i=0;i<xmlNode.childNodes.length;i++){
       if(xmlNode.childNodes[i].nodeType == 1){
          if(xmlNode.childNodes[i].childNodes.length==0){
              var atri="";
            for(var z=0;z<xmlNode.childNodes[i].attributes.length;z++){
              var atrib = xmlNode.childNodes[i].attributes[z];
              atri = atri + "(" + atrib.nodeName + " = " + atrib.nodeValue + ")";
            
            }
           
           arvore.push({value:xmlNode.childNodes[i].nodeValue, atr:atri, child:null});
          }else if(xmlNode.childNodes[i].childNodes.length>0){
            var atri = "";
            for(var z=0;z<xmlNode.childNodes[i].attributes.length;z++){
               var atrib = xmlNode.childNodes[i].attributes[z];
               atri = atri + "(" + atrib.nodeName + " = " + atrib.nodeValue + ")";
              
            }
             arvore.push( { value:xmlNode.childNodes[i].firstChild.nodeValue, atr:atri, child:xmlMontarArvore(xmlNode.childNodes[i])});
         }
       }
     }
     arvore.forEach((item)=>{
         if(item.atr==="" && item.child==undefined)
        console.log(item.value);
        else
        console.log(item)                        
       });
   }

function inicializar()
{
    var parser = new DOMParser();
    var xml = parser.parseFromString(nota,"text/xml");
    var raiz=xml.documentElement;
    xmlMontarArvore(raiz);
    corpo=document.getElementById("corpo")
    
    

}
onload=inicializar;