const Pet = (props) => { //one way data flow
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {}, //null or empty object here
        [
            React.createElement("h1", {}, "Adopt Me!"),
            //one way data flow - passing as the props to the component
            React.createElement(Pet, {
                name: "Ricky",
                animal: "Dog", 
                breed: "Cocker Spaniel"
            }),
            React.createElement(Pet, {
                name: "Melman",
                animal: "Hamster", 
                breed: "Roborovsky"
            }),
            React.createElement(Pet, {
                name: "Bernia",
                animal: "Hamster", 
                breed: "Djungarian"
            }),
        ]
    )
 };

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App)); //passing an component