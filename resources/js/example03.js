export default function (uku) {
    this.myName = "ukulelejs";
    this.disabled = true;
    this.sayHello = function () {
        alert(this.myName);
    };
    this.sayHelloWithString = function (e, str) {
        alert(str);
    };
    this.sayHelloWithArgument = function (e, name) {
        alert("Hi," + name);
    };
};