

export default (req, res) => {
	return new Promise((resolve, reject) => {
		const document = JSON.parse(req.body);
		document._type = "comment";
		document._key = nanoid();
		document._id = document._key;
		document._createdAt = new Date();
		document.comment = sanitizeHtml(document.comment, {
			allowedTags: ["b", "i", "em", "strong", "a", "li", "ul"],
			allowedAttributes: {
				a: ["href"],
			},
		});

		if (!doc.name) doc.name = "Anonymous";
		
		if (doc.comment.match(urlRegEx)) doc.approved = false;
		else doc.approved = true;
		
		try {
			writeClient.create(document).then(() => {
					resolve(
						res.status(200).json({ message: "Comment Created" })
					);
				});

		} 
        catch (err) {
			reject(res.status(500).json({ message: String(err) }));
        }
	}
}