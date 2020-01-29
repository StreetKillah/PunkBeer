import React from 'react';



class Navbar extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar has-background-primary" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io" >
                            <div className="subtitle is-1 is-family-sans-serif is-size-2 has-text-weight-light has-text-white">Beans Love Beers</div>
                        </a>
                      

                      
                        
                    </div>


                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="navbar-menu is-family-sans-serif">
                                <a className="navbar-item has-text-white-ter">
                                Home
                                </a>
                                <a className="navbar-item has-text-grey-lighter">
                                Favourites
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
            
        
    }
}

export default Navbar;