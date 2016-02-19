var private = {}, self = null,
	library = null, modules = null;

function Profile(cb, _library) {
	self = this;
	self.type = 10
	library = _library;
	cb(null, self);
}

Profile.prototype.create = function (data, trs) {
	return trs;
}

Profile.prototype.calculateFee = function (trs) {
	return 0;
}

Profile.prototype.verify = function (trs, sender, cb, scope) {
	setImmediate(cb, null, trs);
}

Profile.prototype.getBytes = function (trs) {
	return null;
}

Profile.prototype.apply = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Profile.prototype.undo = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Profile.prototype.applyUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Profile.prototype.undoUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Profile.prototype.ready = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Profile.prototype.save = function (trs, cb) {
	setImmediate(cb);
}

Profile.prototype.dbRead = function (row) {
	return null;
}

Profile.prototype.normalize = function (asset, cb) {
	setImmediate(cb);
}

Profile.prototype.onBind = function (_modules) {
	modules = _modules;
	modules.logic.transaction.attachAssetType(self.type, self);
}

module.exports = Profile;