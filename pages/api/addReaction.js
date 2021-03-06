import { writeClient } from "../../lib/sanityClient";

export default (req, res) => {
  return new Promise((resolve) => {
    const body = req.body;
    const _id = body.commentId;
    const reactions = body.reactions;
    reactions.forEach((r) => (r._key = r.label));

    const query = `*[_type == "commentReactions" && commentId == "${_id}"]{_id}[0]`;
    writeClient.fetch(query).then((comment) => {
      if (comment) {
        writeClient
          .patch(comment._id)
          .set({ reactions: reactions })
          .commit()
          .then(() => {
            resolve(res.status(200).end());
          });
      } else {
        writeClient
          .create({
            _type: "commentReactions",
            commentId: _id,
            reactions: reactions,
          })
          .then(() => {
            resolve(res.status(200).end());
          });
      }
    });
  });
};
