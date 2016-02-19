var private = {}, self = null,
	library = null, modules = null;

function Like(cb, _library) {
	self = this;
	self.type = 8
	library = _library;
	cb(null, self);
}

Like.prototype.create = function (data, trs) {
	return trs;
}

Like.prototype.calculateFee = function (trs) {
	return 0;
}

Like.prototype.verify = function (trs, sender, cb, scope) {
	setImmediate(cb, null, trs);
}

Like.prototype.getBytes = function (trs) {
	return null;
}

Like.prototype.apply = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Like.prototype.undo = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Like.prototype.applyUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Like.prototype.undoUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Like.prototype.ready = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Like.prototype.save = function (trs, cb) {
	setImmediate(cb);
}

Like.prototype.dbRead = function (row) {
	return null;
}

Like.prototype.normalize = function (asset, cb) {
	setImmediate(cb);
}

Like.prototype.onBind = function (_modules) {
	modules = _modules;
	modules.logic.transaction.attachAssetType(self.type, self);
}

module.exports = Like;