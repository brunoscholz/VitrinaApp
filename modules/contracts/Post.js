var private = {}, self = null,
	library = null, modules = null;

function Post(cb, _library) {
	self = this;
	self.type = 7
	library = _library;
	cb(null, self);
}

Post.prototype.create = function (data, trs) {
	return trs;
}

Post.prototype.calculateFee = function (trs) {
	return 0;
}

Post.prototype.verify = function (trs, sender, cb, scope) {
	setImmediate(cb, null, trs);
}

Post.prototype.getBytes = function (trs) {
	return null;
}

Post.prototype.apply = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Post.prototype.undo = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Post.prototype.applyUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Post.prototype.undoUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Post.prototype.ready = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Post.prototype.save = function (trs, cb) {
	setImmediate(cb);
}

Post.prototype.dbRead = function (row) {
	return null;
}

Post.prototype.normalize = function (asset, cb) {
	setImmediate(cb);
}

Post.prototype.onBind = function (_modules) {
	modules = _modules;
	modules.logic.transaction.attachAssetType(self.type, self);
}

module.exports = Post;