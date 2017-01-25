function b() {
    console.log('Called b, thru a');
}

a();

function a() {
  b();
}

 
