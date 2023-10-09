import React from "react";
import SearchInput from "./SearchInput";
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {images: [], }

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    async onSearchSubmit(entry) {
        const response = await axios.get(`https://pixabay.com/api/?key=39927934-39c5b7da3ff43b6ea29d7fb3e&q=${entry}s&image_type=photo`)
        this.setState({images: response.data.hits});
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '30px'}}>
                <SearchInput onSearchSubmit={ this.onSearchSubmit } />
                { this.state.images.length > 0 ? `We have ${this.state.images.length} images.`: '' }
            </div>
        )
    }
}

export default App;