import FontFaceObserver from "fontfaceobserver";

const Fonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Metal+Mania&family=Varela+Round&family=Concert+One&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const roboto = new FontFaceObserver("Varela Round");

  roboto.load().then(() => {
    document.body.style.fontFamily = "Varela Round";
  });
};

export default Fonts;
