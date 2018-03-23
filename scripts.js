var movies = [
  {
    id: 1,
    title: "The Matrix",
    desc: "Film o walce człowieka z maszynami",
    image: "./matrix.jpg"
  },
  {
    id: 2,
    title: "The Lord of The Rings",
    desc: "Trylogia fantasy",
    image: "./lord.jpg"
  },
  {
    id: 3,
    title: "Gladiator",
    desc: "Rola życia Russella Crowe'a",
    image: "./gladiator.jpg"
  },
  {
    id: 4,
    title: "Saving Private Ryan",
    desc: "Jeden z najlepszych filmów wojennych wszechczasów",
    image: "./ryan.jpg"
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement(
    "li",
    { key: movie.id },
    React.createElement("h2", {}, movie.title),
    React.createElement("p", {}, movie.desc),
    React.createElement("img", { src: movie.image })
  );
});

var element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Lista filmów"),
  React.createElement("ul", {}, moviesElements)
);

ReactDOM.render(element, document.getElementById("app"));
