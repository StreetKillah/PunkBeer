import React from 'react';
import '../App.scss';
import * as axios from 'axios';


class Searchpanel extends React.Component {
constructor(props){
    super(props);
}
  
  

    render() {
        return (
                 <div className="search_bar">
                        <div className="container">
                            <div className="columns ">
                                <div className="column is-three-fifths is-offset-one-fifth">
                                    <div className="field has-addons">
                                            <div className="control is-expanded">
                                            <input className="input" value={this.props.input_item} onChange={this.props.addItem} type="text" placeholder="Search for beer..." />
                                            </div>
                                            <div className="control ">
                                                <a className="button is-info has-background-link" onClick={this.props.newQuery}>
                                                Search
                                                </a>
                                            </div>
                                    </div>
                                </div>        
                            </div>
                        </div>
                 </div>
        );
    }
}

export default Searchpanel;