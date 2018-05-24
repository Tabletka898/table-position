function moveOneUp(){
  // algoritmul posibil al functiei:
  // 1) cauta rand 1 si retine-l intr-o variabila
  var rind1_el_1 = document.getElementsByClassName('name')[0];
  var rind1_el_2 = document.getElementsByClassName('price')[0];
  var rind1_el_3 = document.getElementsByClassName('quantity')[0];

  var rind2 = document.getElementsByClassName('operations')[1];
  var parent2 = document.getElementsByClassName('row')[1];

  parent2.insertBefore(rind1_el_3, rind2);
  parent2.insertBefore(rind1_el_2, rind1_el_3);
  parent2.insertBefore(rind1_el_1, rind1_el_2);

  var rind2_el_1 = document.getElementsByClassName('name')[1];
  var rind2_el_2 = document.getElementsByClassName('price')[1];
  var rind2_el_3 = document.getElementsByClassName('quantity')[1];

  var rind1 = document.getElementsByClassName('operations')[0];
  var parent1 = document.getElementsByClassName('row')[0];


  parent1.insertBefore(rind2_el_3, rind1);
  parent1.insertBefore(rind2_el_2, rind2_el_3);
  parent1.insertBefore(rind2_el_1, rind2_el_2);

}
function moveOneDown(){
  // exact acelasi algoritm ca si la functia precedenta doar ca participa rand 2 si rand 3
}
