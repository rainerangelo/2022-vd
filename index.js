const window_height_half = window.innerHeight / 2;
const messages = document.getElementsByClassName("message");
const images = document.getElementsByClassName("image");

window.onscroll = function () {
  for (let i = 0; i < messages.length; i++) {
    if (
      document.body.scrollTop > messages[i].offsetTop - window_height_half ||
      document.documentElement.scrollTop >
        messages[i].offsetTop - window_height_half
    ) {
      console.log("Passed image " + i.toString());
      messages[i].classList.add("animate__animated", "animate__fadeIn");
      messages[i].classList.remove("hide");

      // If we are on the second last message, show the last message as well
      if (i == messages.length - 2) {
        messages[i + 1].classList.add("animate__animated", "animate__fadeIn");
        messages[i + 1].classList.remove("hide");
        break;
      }
    }
  }

  for (let i = 0; i < images.length; i++) {
    if (
      document.body.scrollTop > images[i].offsetTop - window_height_half ||
      document.documentElement.scrollTop >
        images[i].offsetTop - window_height_half
    ) {
      console.log("Passed image " + i.toString());
      images[i].classList.add("animate__animated", "animate__fadeIn");
      images[i].classList.remove("hide");
    }
  }
};
