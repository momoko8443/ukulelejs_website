export default function (uku) {
    this.loadSuccessHandler = function () {
        document.getElementById("mainView").classList.remove('blur');
        document.getElementById("loadingBar").style.display = "none";
    }
}