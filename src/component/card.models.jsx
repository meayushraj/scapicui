import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ThreeAnimation from './three'

import './card.models.css';

// const CardBody = props => (
//     console.log('data', props),
//     props.model.map((model, index) => (
//         <div className="card--content">
//             <Carousel showArrows>
//                 <div>
//                     <img src={model.thumb} />
//                 </div>
//             </Carousel>
//         </div>
//     ))
// )


export default class CardModel extends Component {
    render() {
        return (
            <div className="c-w">
                <h1>{this.props.name}</h1>
                <section className="card">
                    <div className="card--content">
                        <Carousel showArrows>
                            {this.props.models.map((model, index) => (
                                <div>
                                    <img className='imgmd' src={model.thumb} alt='Not Found' />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </section>

                <ThreeAnimation />
            </div >
        )
    }
}