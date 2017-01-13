var EventBusSingleton = (function () {
    var instance;

    function generateInstance() {
        if (!instance) {
            instance = new EventBus;
        }
        return instance;
    }
    return {
        "getInstance": generateInstance
    };
})();