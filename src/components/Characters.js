import React from 'react';
import axios from "axios";
import '../styles/Characters.css'
class Characters extends React.Component {
    state ={
        characters: [],
        isLoader: false,
    }
    getCharacters = async() =>{
        const result = await axios.get("https://miadil.github.io/starwars-api/api/all.json")
        this.setState({characters: result.data, isLoader: true})

        /*axios.get("https://miadil.github.io/starwars-api/api/all.json")
            .then(res => this.setState({characters: res.data, isLoader: true}))*/

      /*  fetch("https://miadil.github.io/starwars-api/api/all.json")
            .then(res => res.json())
            .then(res => this.setState({characters: res, isLoader: true}))*/
    }

    componentDidMount() {
this.getCharacters()
    }
    render() {
        const {characters, isLoader} = this.state
        return (
            <>
                <h1>Star wars librairie</h1>
                {
                    !isLoader ? (
                        <div className="lds-ripple">
                            <div></div>
                            <div></div>
                        </div> ) : (
                        <div>
                            { characters.map(character => (
                                <div key={character.id}>
                                    <img
                                        className="img"
                                        src={character.image}
                                        alt={character.name}
                                    />
                                    <h2 >
                                        {character.name}
                                    </h2>
                                </div>
                            ))}
                        </div> )
                }
            </>
        );
    }
}


export default Characters;