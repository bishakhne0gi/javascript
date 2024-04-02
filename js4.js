function a() {
    console.log(b);
    function c() {
        console.log(b);
    }
    c();
}
var b = 10;
a();