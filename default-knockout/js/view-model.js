function ViewModel() {
    var self = this;
}

var vm = new ViewModel();
ko.applyBindings(vm, document.getElementById("koMain"));