
function ajax() {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = mostrar;
    ajax.open("GET", "ajax_info.txt", true);
    ajax.send();
  }

  function mostrar(){
    
    if(this.readyState==4 && this.status==200){
    document.getElementById('resp').innerHTML=this.responseText
}
  }

  //cors recursos de outro dominio
  document.getElementById('r').onclick=ajax