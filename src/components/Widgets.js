import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InfoIcon from '@material-ui/icons/Info';
import './Widgets.css';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
                <div className='widgets__articleLeft'>
                    <FiberManualRecordIcon />
                </div>
                <div className='widgets__articleRight'>
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className='widgets__header'>
                    <h2>LinkedIn News</h2>
                    <InfoIcon />

                
            </div>
            {newsArticle('Reactjs top front end library', "Web Dev news - 2293 readers")}
            {newsArticle('Coronavirus USA updates', "Top news - 3023 readers")}
            {newsArticle('Bitcoin Breaks $30,000', "Crypto news - 9299 readers")}
        </div>
    )
}

export default Widgets
