function b() {
    console.log('Called b, thru c');
}

function a() {
  b();
}

a();
 
