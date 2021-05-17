import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards' id='cards'>
            <h1>MY PROJECTS</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={require('../images/img-9.jpg').default}
                            text='Explore the hidden waterfall
                            deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services' />
                        <CardItem
                            src={require('../images/img-2.jpg').default}
                            text='Travel Through the Islands Of Salda in a private cruise'
                            label='Luxury'
                            path='/services' />
                        <CardItem
                            src={require('../images/img-8.jpg').default}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/about'
                        />
                        <CardItem
                            src={require('../images/img-8.jpg').default}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/about'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={require('../images/img-3.jpg').default}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={require('../images/img-4.jpg').default}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={require('../images/img-8.jpg').default}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/about'
                        />
                        <CardItem
                            src={require('../images/img-8.jpg').default}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/about'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards