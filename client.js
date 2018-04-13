document.getElementById('output').style.visibility = 'hidden';
// Input:  Add Event Listener
// Grab the input id
document.getElementById('lbsInput').addEventListener('input', function(e) {
  console.log('input event listener function');
  document.getElementById('output').style.visibility = 'visible';
  let lbs = e.target.value;
  console.log(lbs);
  // Target different outputs and convert pounds to grams
  document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
  document.getElementById('kgOutput').innerHTML = lbs/2.2046;
  document.getElementById('ozOutput').innerHTML = lbs*16;
});
