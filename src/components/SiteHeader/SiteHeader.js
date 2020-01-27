import React from 'react';
import './siteHeader.scss';
import { MyContext } from '../../App.js';

const SiteHeader = () => {

    const { state, dispatch } = React.useContext(MyContext);

    const startQuestions = () => {
        console.log('startQuestions fired');
        state.startQuestionnaire = true;
        dispatch()
    }

    return (
        <div className="site-header">
            <div className="site-header-title-wrap">
                <h1>Lodogrub.com</h1>
            </div>
            <div className="site-header-body-wrap">
                <p>With all of the restaurant choices in the downtown Denver area, it can be tough to pick a spot to eat at!</p>
                <p>So this site takes all of the guess work out for you.</p>
                <p>
                    <a href="!#" onClick={startQuestions}>Find your restaurant</a>
                </p>
            </div>
        </div>
    )
}

export default SiteHeader;