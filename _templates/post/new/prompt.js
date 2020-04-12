// Using slugify function from a gist I found:
// https://gist.github.com/matthagemann/382adfc57adbd5af078dc93feef01fe1

const slugify = require("./slugify");

module.exports = {
  prompt: ({ prompter }) => {
    return new Promise((resolve, reject) => {
      prompter
        .prompt([
          {
            type: "input",
            name: "title",
            message: "What is the title?",
          }
        ])
        .then(({ title }) => {
            const date = new Date().toISOString().split("T")[0];
            const filename = slugify(title);
            resolve({
              title,
              date,
              filename: `/${filename}`,
            });
        });
    });
  },
};