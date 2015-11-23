define("Example03Ctrl", function () {
    return function (uku) {
        this.myName = "ukulelejs";
        this.disabled = true;
        this.sayHello = function () {
            alert(this.myName);
        };
        this.sayHelloWithString = function (str) {
            alert(str);
        };
        this.sayHelloWithArgument = function (name) {
            alert("Hi," + name);
        };
    };
});