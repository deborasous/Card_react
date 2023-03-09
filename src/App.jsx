import "./App.css";
import Card from "./components/Card";
import imageProfile from "./assets/debora.png";

const App = () => {
  const user = {
    name: "Debora Sousa",
    age: "35",
    profile: imageProfile,
    github: "https://github.com/deborasous",
    linkedin: "https://www.linkedin.com/in/deborasous/",
  };

  const { name, age, profile, github, linkedin } = user;

  return (
    <div className="App">
      <Card
        profile={profile}
        name={name}
        age={age}
        github={github}
        linkedin={linkedin}
      />
    </div>
  );
};

export default App;
