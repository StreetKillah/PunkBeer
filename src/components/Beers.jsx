import React from 'react';
import '../App.scss';
import '../App.js';


class Beers extends React.Component {
 constructor(props){
     super(props);
 }
  

    render() {
        return (<div className="beers">
                
                 
                         
                  <div className="container" id="container">
            
                    <div className="columns" id="columns">
                       {this.props.beers.map((el) => 
                         
                          
                         <div className="column is-one-third" key={el.id}>
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
                                        <nav className="level is-mobile" onClick={() => this.props.favs(el.id)}>
                                                <div className="level-left">   
                                                    <a className="level-item"  aria-label="star">
                                                        <span className="icon is-small" onClick={() => this.props.starClick}>
                                                        <i className="far fa-star has-text-primary" /> 
                                                        </span>
                                                    </a>
                                                </div>
                                        </nav>
                                    </article> 
                                </div>
                       </div> ) }   
                       </div> 
                      
                   </div>
               
                 </div>);
        
    }




}

export default Beers;