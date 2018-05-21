function moveOneUp(){
  // algoritmul posibil al functiei:
  // 1) cauta rand 1 si retine-l intr-o variabila
  var rind1 = document.getElementByClassName('row')[0];
  // 2) cauta rand 2 si retine-l intr-o variabila
  var rind2 = document.getElementByClassName('row')[1];
  // 3) elimina rand 2 din elementul parinte
  var parent = document.getElenentById('table');
  parent.removeChild(rind2);
  // 4) adauga rand 2 din variabila la inceputul parintelui
}
function moveOneDown(){
  // exact acelasi algoritm ca si la functia precedenta doar ca participa rand 2 si rand 3
}
