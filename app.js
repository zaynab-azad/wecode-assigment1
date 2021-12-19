const App = () => {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("<h4>", {}, ""),
    [
      {
        image:
          "https://image.freepik.com/free-photo/young-lady-hijab-looking-sae-seaside_114579-3989.jpg",
        name: "",
        job: "Study: Software Engineering",
        hobbies: "Hobbies: Nobody Cares",
      },
      {
        image:
          "https://i.pinimg.com/originals/00/52/6f/00526f8a4aada0fd55a6664993432e2a.jpg",
        name: "Name:osman",
        job: "Study:Collage",
        hobbies: "Hobbies:Eating",
      },
    ].map((info) =>
      React.createElement(personDetail, {
        image: info.image,
        name: info.name,
        job: info.job,
        hobbies: info.hobbies,
      })
    )
  );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
