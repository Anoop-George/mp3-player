const addremovefromfavourite = (state = { result: "" }, action) => {
  switch (action.type) {
    case "ADDEDTOFAVSONGS":
      return { result: "Added to favourites" };
    case "ERRORADDTOFAVSONGS":
      return { result: "Login to add favourites" };
    case "REMOVEFROMFAVSONGS":
      return { result: "Removed from favourites" };
    case "ERRORREMOVEFROMFAVSONGS":
      return { result: "Error removing from favourites" };
    case "CLEARSTATE":
      return { result: "" };
    default:
      return state;
  }
};

export default addremovefromfavourite;
