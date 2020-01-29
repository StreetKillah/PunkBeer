import React from 'react';
import '../App.scss';
import Searchpanel from './Searchpanel';



 class Beers extends React.Component {
 constructor(props){
     super(props);
 }
  
   
    render() {
        return <div className="beers">
                
                 
                         
                  <div className="container" id="container">
            
                    <div className="columns" id="columns">
                       {this.props.beers.map(el=>     
                         <div className="column is-one-third">
                                <div className="box">
                                    <article className="media">
                                        <div className="media-left">
                                                <figure className="image is-64x64">
                                                <img src={el.image_url} alt="Image" />
                                                </figure>
                                        </div>
    
                                        <div className="media-content">
                                            <div className="content">
                                                <p className="is-size-5">
                                                <strong>{el.name}</strong> 
                                                <br/>
                                                {el.description}
                                                </p>
                                            </div>
                                            <nav className="level is-mobile">
                                                <div className="level-left">   
                                                    <a className="level-item" aria-label="star">
                                                        <span className="icon is-small">
                                                        <i className="fas fa-lg" aria-hidden="true"></i>
                                                        </span>
                                                    </a>
                                                </div>
                                            </nav>
                                        </div>
                                    </article>
                                </div>
                         </div> 
                              ) }   
                       </div> 
                      
                   </div>
               
                 </div>
        
    }




}

export default Beers;