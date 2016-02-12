var private = {}, self = null,
	library = null, modules = null;

function Token(cb, _library) {
	self = this;
	self.type = 11
	library = _library;
	cb(null, self);
}

Token.prototype.create = function (data, trs) {
	return trs;
}

Token.prototype.calculateFee = function (trs) {
	return 0;
}

Token.prototype.verify = function (trs, sender, cb, scope) {
	setImmediate(cb, null, trs);
}

Token.prototype.getBytes = function (trs) {
	return null;
}

Token.prototype.apply = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Token.prototype.undo = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Token.prototype.applyUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Token.prototype.undoUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Token.prototype.ready = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Token.prototype.save = function (trs, cb) {
	setImmediate(cb);
}

Token.prototype.dbRead = function (row) {
	return null;
}

Token.prototype.normalize = function (asset, cb) {
	setImmediate(cb);
}

Token.prototype.onBind = function (_modules) {
	modules = _modules;
	modules.logic.transaction.attachAssetType(self.type, self);
}

module.exports = Token;