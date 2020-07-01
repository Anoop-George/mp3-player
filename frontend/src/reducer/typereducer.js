const songtype = (state = { genre: "r" }, action) => {
  switch (action.type) {
    case "ROCK":
      return { genre: "r" };
    case "POP":
      return { genre: "p" };
    case "CLASSIC":
      return { genre: "c" };
    case "FAVOURITE":
      return { genre: "f" };

    default:
      return state;
  }
};

export default songtype;
