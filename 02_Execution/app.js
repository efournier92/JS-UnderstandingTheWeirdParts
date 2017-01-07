function b() {
    console.log('Called b, thru a!');
}

function a() {
  b();
}

a();
