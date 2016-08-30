var a1=prompt('Enter value a');
var b1=prompt('Enter value b');
var c1=prompt('Enter value c');

function qua_equation(a,b,c){
var D=Math.pow(b,2)-4*a*c;
if(D>0){
   var x1= ((-b)+Math.sqrt(D))/(2*a);
   var x2= ((-b)-Math.sqrt(D))/(2*a);
   document.writeln(x1);
   document.writeln('<br>');
   document.writeln(x2);
}
if(D===0){
   var x1=x2=(-b)/(2*a);
   document.writeln(x1);
   document.writeln('<br>');
   document.writeln(x2);
}if(D<0){
   document.writeln('no decision') 
}
}

qua_equation(a1,b1,c1);
