var private = {}, self = null,
	library = null, modules = null;

function Comment(cb, _library) {
	self = this;
	self.type = 9
	library = _library;
	cb(null, self);
}

Comment.prototype.create = function (data, trs) {
	return trs;
}

Comment.prototype.calculateFee = function (trs) {
	return 0;
}

Comment.prototype.verify = function (trs, sender, cb, scope) {
	setImmediate(cb, null, trs);
}

Comment.prototype.getBytes = function (trs) {
	return null;
}

Comment.prototype.apply = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Comment.prototype.undo = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Comment.prototype.applyUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Comment.prototype.undoUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Comment.prototype.ready = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Comment.prototype.save = function (trs, cb) {
	setImmediate(cb);
}

Comment.prototype.dbRead = function (row) {
	return null;
}

Comment.prototype.normalize = function (asset, cb) {
	setImmediate(cb);
}

Comment.prototype.onBind = function (_modules) {
	modules = _modules;
	modules.logic.transaction.attachAssetType(self.type, self);
}

module.exports = Comment;