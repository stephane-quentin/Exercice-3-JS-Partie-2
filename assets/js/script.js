function toucheClavier(event){ //KeyboardEvent
  var number = event.which; // Retourne la valeur de la touche clavier
  var letter = event.key; //  Retourne la touche clavier
  alert('Lettre : ' + letter + '\n' + 'Unicode : ' + number);
}
