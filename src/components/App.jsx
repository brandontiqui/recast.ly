// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={window.exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={window.exampleVideoData}/>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props); 
    // console.log(window.exampleVideoData);
    this.state = {
      // video: this.props.searchYouTube[0],
      videos: this.props.vids
    };
  }

  render() {
    if (this.state.videos && this.state.videos[0]) {
      var current = this.state.videos[0];
      var videos = this.state.videos;
    }

    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={current}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={videos}/>
       </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;