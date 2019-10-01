function findmax(x,y){
if (x>y){
return x ;
}else {
    return y ;
}
}
let a=parseInt(prompt("nhap so thu nhat:"));
let b=parseInt(prompt("nhap so thu hai:"));
let c=parseInt(prompt("nhap so thu ba:"));
  var max =  findmax(a,b);
  alert('So lon nhat la:'+findmax(max,c))


