import React from 'react';
import './siteHeader.scss';
import { NavLink } from 'react-router-dom';

const SiteHeader = () => {

    return (
        <div className="site-header">
            <div className="site-header-title-wrap">
                <h1>Lodogrub.com</h1>
            </div>
            <div className="site-header-body-wrap">
                <p>With all of the restaurant choices in the downtown Denver area, it can be tough to pick a spot to eat at!</p>
                <p>So this site takes all of the guess work out for you.</p>
                <p>
                    <NavLink exact to="/questions" activeClassName="active">Find your restaurant</NavLink>
                </p>
            </div>
        </div>
    )
}

export default SiteHeader;