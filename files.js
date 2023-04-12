const fs = require("fs");

// reading files

fs.readFile("./sample/blog.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log("last line");

// writing files

fs.writeFile("./sample/blog2.txt", "Heloooooo", () => {
  console.log("file was written");
});

directories;

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder removed");
  });
}

// deleting files

if (!fs.existsSync("./sample/blog.txt")) {
  fs.writeFile("./sample/blog.txt", "Blog 1 lessgoooo", () => {});
} else {
  fs.unlink("./sample/blog.txt", () => {});
}
