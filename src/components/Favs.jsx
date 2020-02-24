import React from 'react';
import '../App.scss';
import '../App.js';


class Favs extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
               <div className="container" id="container">
            
            <div className="columns" id="columns">
               {this.props.favourbeers.map((el) => 
                  
                 <div className="column is-one-third" >
                        <div className="box">
                            <article className="media">
                                <div className="media-left">
                                        <figure className="image is-48x48">
                                        <img src={el.image_url} alt="Image" />
                                        </figure>
                                </div>
                                
                                <div className="media-content">
                                    <div className="content">
                                        <p className="txt is-size-5 ">
                                        <strong>{el.name}</strong> 
                                        <br/>
                                        {el.description}
                                        </p>
                                    </div>
                                </div>
                                
                            </article> 
                        </div>
               </div> 
                      ) }   
               </div> 
              
           </div>
            </div>);
            
        
    }
}

export default Favs;