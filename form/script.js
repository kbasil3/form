window.onload = function () {
    var form = document.getElementById('form');
    form.button.onclick = function (){
      for(var i=0; i < form.elements.length; i++){
        if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
          alert('There are some required fields!');
          return false;
        }
      }
      form.submit();
    }; 
};