const display = document.getElementById('display');

function currentValue() {
  return parseFloat(display.innerText) || 0;
}

function update(val) {
  display.innerText = val;
}

function insert(char) {
  if (display.innerText === '0') {
    update(char);
  } else {
    update(display.innerText + char);
  }
}

function remov() {
  update('0');
}
function BACKSPACE() {
  const text = display.innerText;
  update(text.length > 1 ? text.slice(0, -1) : '0');
}

function sin()    { insert('sin('); }
function cos()    { insert('cos('); }
function tan()    { insert('tan('); }
function sqrt2()  { insert('sqrt('); }
function sqrt3()  { insert('cbrt('); }
function square() { insert('^2'); }
function cubed()  { insert('^3'); }
function ln()     { insert('ln('); }
function log()    { insert('log('); }
function percent(){ insert('%'); }

function equal() {
  let expr = display.innerText;
  expr = expr
    .replace(/÷/g, '/')
    .replace(/×/g, '*')
    .replace(/−/g, '-')
    .replace(/π/g, Math.PI)
    .replace(/(\d+)%/g, '($1*0.01)')
    .replace(/\^(\d+)/g, '**$1')
    .replace(/sin\(/g, 'Math.sin(')
    .replace(/cos\(/g, 'Math.cos(')
    .replace(/tan\(/g, 'Math.tan(')
    .replace(/sqrt\(/g, 'Math.sqrt(')
    .replace(/cbrt\(/g, 'Math.cbrt(')
    .replace(/ln\(/g, 'Math.log(')
    .replace(/log\(/g, 'Math.log10(');
  try {
    const result = eval(expr);
    update(result);
  } catch {
    update('Error');
  }
}