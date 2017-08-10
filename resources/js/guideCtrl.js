export default function (uku) {
    var currentMenuItem;
    this.guideMenuItemClickHandler = function (e) {
        if (e.target.nodeName === "BUTTON") {
            var menuItem = e.target.dataset.menuItem;
            if (currentMenuItem !== menuItem) {
                var componentTag = "guide-" + menuItem;
                var comp = uku.getComponent(componentTag);
                var guideItem;
                if (comp) {
                    guideItem = document.createElement(componentTag);
                } else {
                    guideItem = document.createElement("guide-building");
                }
                var guideContentPanel = document.getElementById("guideContentPanel");
                guideContentPanel.removeChild(guideContentPanel.children[0]);
                guideContentPanel.appendChild(guideItem);
                uku.handleElement(guideItem);
                currentMenuItem = menuItem;
            }
        }
    };
}