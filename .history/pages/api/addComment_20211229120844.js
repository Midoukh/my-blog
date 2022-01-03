// We need this to generate random keys both here and later when we’ll map React Components
import { nanoid } from "nanoid";
import NextCors from "nextjs-cors";

// Sanitize the html for security reasons
import sanitizeHtml from "sanitize-html";
import { writeClient } from "../../lib/sanityClient";

// RegEx to identify urls and set the comment as unapproved
const urlRegEx = new RegExp(
  "([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?([^ ])+"
);

export default async function handler(req, res) {
  return new Promise((resolve, reject) => {
    console.log(req.body);
    console.log("Hello from Api");
    await NextCors(req, res, {
      // Options
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    // const document = req.body;
    // document._type = "comment";
    // document._key = nanoid();
    // document._id = document._key;
    // document._createdAt = new Date();
    // document.comment = sanitizeHtml(document.comment, {
    //   allowedTags: ["b", "i", "em", "strong", "a", "li", "ul"],
    //   allowedAttributes: {
    //     a: ["href"],
    //   },
    // });

    // if (!doc.name) doc.name = "Anonymous";

    // if (doc.comment.match(urlRegEx)) doc.approved = false;
    // else doc.approved = true;

    // try {
    //   writeClient.create(document).then(() => {
    //     resolve(res.status(200).json({ message: "Comment Created" }));
    //   });
    // } catch (err) {
    //   reject(res.status(500).json({ message: String(err) }));
    // }
  });
}
