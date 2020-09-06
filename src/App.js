import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1>Mern</h1>

      <div className="app__videos">
        <Video
          url="https://v16m.tiktokcdn.com/c476757d0cbc2908d6f330b5b0c10373/5f54b1d0/video/tos/useast2a/tos-useast2a-pve-0068/c657fb2c5ff24732a242da9e00746bda/?a=1233&br=1742&bt=871&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009060354150101890720724E009A2A&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajZnNmYzO3htdjMzNzczM0ApNjRoOztmZmQzNzc3OWU5NWdrL3ByMmdpM2hfLS0yMTZzczA2YC8yMTIwNDYvLmNeXzI6Yw%3D%3D&vl=&vr="
          likes={800}
          share={234}
          messages={88}
          channel="comjuanitapetrie6"
          description="Adults don’t make choices! 😏 I like’em all!😎. #ctue #dog #pet #fory"
          song="Savage Love (Laxed - Siren Beat)"
        />
        <Video
          url="https://v16m.tiktokcdn.com/a1e36b3318e8a961e29dc52ae39d9fd0/5f54d797/video/tos/useast2a/tos-useast2a-ve-0068c003/1679a047bf5c4938966825706deef317/?a=1233&br=2254&bt=1127&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009060635240101890730194E0771F1&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=amlpcXZsO2lldjMzOTczM0ApZ2VoMzs2Ojs7Nzk1ZGZpM2dpZGBfZXBvYXJfLS0zMTZzcy5iLTFjYDFfLy9eMzExXl46Yw%3D%3D&vl=&vr="
          likes={9303}
          share={89}
          messages={133}
          channel="Teegy Carmichael"
          description="keep switching which one u see first #ItStartsOnTikTok #Snapshot #bga #fyp #clotheschange #change #foxracing #motogear #moto #dayum"
          song="kimset by xix - ir1miku"
        />
      </div>

      {/* app container */}
      {/* Video */}
      {/* <Video> */}
      {/* <Video> */}
      {/* <Video> */}
      {/* <Video> */}
    </div>
  );
}

export default App;
