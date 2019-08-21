function inicializar(){

let parser = new DOMParser()
let xml=parser.parseFromString(livraria,"text/xml")
let raiz=xml.documentElement;
let filhos=raiz.childNodes;

var texto=""
//alert(raiz.getAttribute("carta"))
for(let i=0;i<filhos.length;i++){
	let otos=filhos[i].childNodes;
	texto+="Categoria:"+filhos[i].getAttribute("categoria")+"<br>"
	for(let j=0;j<otos.length;j++){
	texto+="<b>"+otos[j].nodeName+"</b>:"
	texto+=otos[j].firstChild.nodeValue+"<br>"
	}
	texto+='<hr>'

}


document.getElementById('corpo').innerHTML=texto
}


onload=inicializar;
