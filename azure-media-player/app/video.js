import React, {Component} from "react";

class Greeter extends Component{
  componentDidMount() {
    const myOptions = {
	       "nativeControlsForTouch": false,
	       controls: true,
	       autoplay: true,
	        width: "640",
	         height: "400",
    };
    const myPlayer = amp("azuremediaplayer", myOptions);

    myPlayer.src([{
      src: "//ianistesting.origin.mediaservices.windows.net/2b6c38aa-b028-4e98-8ac0-9e10632a322d/Azure-Video.ism/Manifest",
      type: "application/vnd.ms-sstr+xml",
      protectionInfo: [{
        type: "Widevine",
        authenticationToken: " Bearer=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ1cm46Y29udG9zbyIsInVybjptaWNyb3NvZnQ6YXp1cmU6bWVkaWFzZXJ2aWNlczpjb250ZW50a2V5aWRlbnRpZmllciI6Ijc2ZjExZjhkLWE1MDQtNGNjMC04ZDUwLTUzNDE4ZTQ4N2FjNCIsImlzcyI6Imh0dHBzOi8vc3RzLmNvbnRvc28uY29tIiwiZXhwIjoxNDkyMTU5Mzc5LCJpYXQiOjE0NjA2MjMwNzl9.YWQ50QSuDijQnseFFP5SDIYJ6UD5nlSC1rHi2sqo9J8"
      }]}]);

  }
  render() {
    return (
      <div>
        <video id="azuremediaplayer" className="azuremediaplayer amp-default-skin amp-big-play-centered" tabIndex="0"></video>
      </div>
    );
  }
}

export default Greeter
