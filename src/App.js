import logo from './logo.svg';
import './App.css';

function App() {
  // js code
  const movies = [
    {
      title: "Sankratiki vastunam",
      showTimings: ["10AM", "6PM"],
      seatsAvailable: [40, 50],
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgNzEuNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00418119-urxwxzudkv-portrait.jpg"
    },
    {
      title: "Game Changer",
      showTimings: ["9AM", "5PM"],
      seatsAvailable: [30, 50],
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICA4OS4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311772-dyqxbymvgu-portrait.jpg"
    },
    {
      title: "Daku Maharaj",
      showTimings: ["11AM", "5PM"],
      seatsAvailable: [50, 70],
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA2Mi4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00419964-lkjnsvyufh-portrait.jpg"
    },
  ];
  // writing html , css, bootstrap, cards code in return
  return (
   <div>
    <h1>Hey there! Creating virtual DOM in React App.</h1>
    <h3>Displaying movies in a container.</h3>
    <div className="container">
      
      <div className="row">
       
        { movies.map(eachmovie => {
        return (
          <>
           <div className="col-4 mb-4">
          <div className="card" style={{width: "18rem"}}>
         
            <img src={eachmovie.image} className="card-img-top" alt={eachmovie.title}/>
            <div className="card-body">
              <h3 className="card-title">{eachmovie.title}</h3>
              <p>
                <strong>show timings: </strong>
                {eachmovie.showTimings.map(show=>show).join(" , ")}
              </p>
              <p>
                <strong>seats available: </strong>
                {eachmovie.seatsAvailable.map(seats=>seats).join(" , ")}
              </p>
              
              
              <a href="#" className="btn btn-primary">Book ticket</a>
            </div>
          </div>
          </div>
          </>
         )})
        
        }

        </div>
     
      </div>
     
    </div>
    
   
  );
}

export default App;

