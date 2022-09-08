let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
  },
  {
    author: "Suzanne Collins",
    title: " Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

newObject = library.sort((x, y) =>
  x.title > y.title ? 1 : y.title > x.title ? -1 : 0
);
let html = "<table><tr><th>Author</th><th> ReadingStatus</th><th>Title</th></tr>";

newObject.map((item) => {
  html += "<tr>";
  console.log(item.author);
  html += "<td>" + item.author + "</td>";
  html += "<td>" + item.readingStatus + "</td>";
  html += "<td>" + item.title + "</td>";
  html += "</tr>";
});
html += "</table>";
document.getElementById("data").innerHTML = html;
