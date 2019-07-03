document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.datepicker');
  let instances = M.Datepicker.init(elems, {

  });

  document.querySelectorAll('.modal-show').forEach(function(elem) {
  	elem.onclick = modalShow;
  });

  document.querySelectorAll('.modal-proj-close').forEach(function(elem) {
    elem.onclick = modalClose;
  });


  function modalShow() {
  	let modal_Id = this.dataset.modal;
  	document.querySelector(modal_Id).classList.remove('hide');
  }

  function modalClose() {
  	let modal_Id = this.dataset.modal;
  	document.querySelector(modal_Id).classList.add('hide');
  }

});

