import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";

ReactDOM.render(<Counter />, document.getElementById("root"));

function App() {
    const[image,setImage] = userState("https://randomfox.ca/images/41.jpg")

    const [likes,setLikes] = userState(0)
    
    function handleNewFoxClick() {
      fetch("https://randomfox.ca/floof/")
        .then((response) => response.json())
        .then(({ image }) => {
            setImage (image)
            setLikes(0)
        })
        function handleLikeClick(){
            setLikes(likes + 1)
        }
    }
     
  return (
    <div>
      <h1>🦊 FoxFindr 🦊</h1>
      <div className="buttons">
          <button onClick={handleNewFoxClick}>New 🦊 Please</button>
          <button onClick={handleLikeClick}>Likes: {likes}</button>
      </div>
      <img src={image} alt="Random Fox" />
    </div>
  );
}

export default App