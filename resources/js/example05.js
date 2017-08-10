export default function () {
    function Child() {
        this.name = "child";
        this.say = function () {
            return "Hi, " + this.name;
        };
    }

    this.child = new Child();
};