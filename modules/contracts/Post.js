var private = {}, self = null,
	library = null, modules = null;

function Post(cb, _library) {
	self = this;
	self.type = 7
	library = _library;
	cb(null, self);
}

Post.prototype.create = function (data, trs) {
	// base data
	//content: data.content,
	//separete tags (array)
	trs.asset = {
		post: {
			caption: data.caption,
			photo: data.photo,
			tags: data.tags
		}
	};

	return trs;
}

Post.prototype.calculateFee = function (trs) {
	return 0;
}

Post.prototype.verify = function (trs, sender, cb, scope) {
	if(trs.asset.post.caption.length > 140) {
		return setImmediate(cb, "Caption must contain up to 140 characters, now there is " + trs.asset.post.caption.length + "!");
	}

	if(!trs.asset.post.photo) {
		return setImmediate(cb, "Photo is mandatory!");
	}

	// array of tags (json maybe)
	if(trs.asset.post.tags.length == 0) {
		return setImmediate(cb, "The post must have at least 1 tag!");
	}

	setImmediate(cb, null, trs);
}

Post.prototype.getBytes = function (trs) {
	var captionBuffer = new Buffer(trs.asset.post.caption, 'utf8');
	var tagsBuffer = new Buffer(trs.asset.post.tags, 'utf8');
	// improve: test content for url, text and photo, test and video, etc...
	var photoBuffer = new Buffer(trs.asset.post.caption, 'utf8');

	return Buffer.concat([captionBuffer, tagsBuffer, photoBuffer]);
}

Post.prototype.apply = function (trs, sender, cb, scope) {
	modules.blockchain.accounts.mergeAccountAndGet({
		address: sender.address,
		balance: -trs.fee
	}, cb);
}

Post.prototype.undo = function (trs, sender, cb, scope) {
	modules.blockchain.accounts.undoMerging({
		address: sender.address,
		balance: -trs.fee
	}, cb);
}

Post.prototype.applyUnconfirmed = function (trs, sender, cb, scope) {
	if(sender.u_balance < trs.fee) {
		return setImmediate(cb, "Sender dont have enough ammount for fee");
	}

	modules.blockchain.accounts.mergeAccountAndGet({
		address: sender.address,
		balance: -trs.fee
	}, cb);
}

Post.prototype.undoUnconfirmed = function (trs, sender, cb, scope) {
	modules.blockchain.accounts.undoMerging({
		address: sender.address,
		balance: -trs.fee
	}, cb);
}

Post.prototype.ready = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Post.prototype.save = function (trs, cb) {
	modules.api.sql.insert({
		table: "asset_posts",
		values: {
			transactionId: trs.id,
			caption: trs.asset.post.caption,
			photo: trs.asset.post.photo,
			tags: trs.asset.post.tags
		}
	}, cb);
}

Post.prototype.dbRead = function (row) {
	if(!row.p_title) {
		return null;
	}

	return {
		post: {
			caption: p_title.caption,
			photo: p_title.photo,
			tags: p_title.tags
		}
	}
}

Post.prototype.normalize = function (asset, cb) {
	library.validator.validate(asset.post, {
		type: "object",
		properties: {
			caption: {
				type: "string",
				minLength: 0,
				maxLength: 140
			},
			photo: {
				type: "string",
				minLength: 1,
				maxLength: 16000
			},
			tags: {
				type: "string",
				minLength: 1,
				maxLength: 5000
			}
		},
		required: ["photo", "tags"]
	}, cb);
}

Post.prototype.add = function (cb, query) {
	library.validator.validate(asset.post, {
		type: "object",
		properties: {
			caption: {
				type: "string",
				minLength: 0,
				maxLength: 140
			},
			photo: {
				type: "string",
				minLength: 1,
				maxLength: 16000
			},
			tags: {
				type: "string",
				minLength: 1,
				maxLength: 5000
			},
			secret: {
				type: "string",
				minLength: 1,
				maxLength: 100
			}
		},
		required: ["photo", "tags", "secret"]
	}, function (err) {
		if (err) {
			return cb(err[0].message);
		}

		
	});
}

Post.prototype.list = function (cb, query) {

}

Post.prototype.onBind = function (_modules) {
	modules = _modules;
	modules.logic.transaction.attachAssetType(self.type, self);
}

module.exports = Post;