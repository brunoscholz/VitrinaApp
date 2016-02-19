var private = {}, self = null,
	library = null, modules = null;

function Tags(cb, _library) {
	self = this;
	self.type = 12
	library = _library;
	cb(null, self);
}

Tags.prototype.create = function (data, trs) {
	return trs;
}

Tags.prototype.calculateFee = function (trs) {
	return 0;
}

Tags.prototype.verify = function (trs, sender, cb, scope) {
	setImmediate(cb, null, trs);
}

Tags.prototype.getBytes = function (trs) {
	return null;
}

Tags.prototype.apply = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Tags.prototype.undo = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Tags.prototype.applyUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Tags.prototype.undoUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Tags.prototype.ready = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Tags.prototype.save = function (trs, cb) {
	setImmediate(cb);
}

Tags.prototype.dbRead = function (row) {
	return null;
}

Tags.prototype.normalize = function (asset, cb) {
	setImmediate(cb);
}

Tags.prototype.onBind = function (_modules) {
	modules = _modules;
	modules.logic.transaction.attachAssetType(self.type, self);
}

module.exports = Tags;