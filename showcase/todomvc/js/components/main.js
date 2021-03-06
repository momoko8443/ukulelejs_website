this.tasks = [];
this._isAllCompleted = false;
this.isShowToggleAllBtn = false;
this.toggleAllTodos = function () {
	this._isAllCompleted = !this._isAllCompleted;
	this.fire('toggleall', {
		message: this._isAllCompleted
	});
};

Object.defineProperty(this, 'todos', {
	set: function (value) {
		if (value) {
			this.tasks = value;
		}
	}
});
Object.defineProperty(this, 'showToggleAll', {
	set: function (value) {
		this.isShowToggleAllBtn = value;
	}
});
Object.defineProperty(this, 'isAllCompleted', {
	set: function (value) {
		this._isAllCompleted = value;
	}
});