import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import slideimdone from '../../Asset/images/slide-img-one.png'
import slideimg2 from '../../Asset/images/slide-img-2.png'
import slideimg3 from '../../Asset/images/slide-img-3.png'
import slideimg4 from '../../Asset/images/slide-img-4.png'
import slideimg5 from '../../Asset/images/slide-img-5.png'
import slideimg6 from '../../Asset/images/slide-img-6.png'
import slideimg7 from '../../Asset/images/slide-img-7.png'

const getTouches = (evt) => {
    return (
        evt.touches || evt.originalEvent.touches // browser API
    );
};

export default class Example extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 7,
        showNavigation: true,
        enableSwipe: true,
        config: config.gentle
    };

    slides = [
        {
            key: uuidv4(),
            content: <img src={slideimdone} alt="1" />
        },
        {
            key: uuidv4(),
            content: <img src={slideimg2} alt="1" />
        },
        {
            key: uuidv4(),
            content: <img src={slideimg3} alt="1" />
        },
        {
            key: uuidv4(),
            content: <img src={slideimg4} alt="1" />
        },
        {
            key: uuidv4(),
            content: <img src={slideimg5} alt="1" />
        },
        {
            key: uuidv4(),
            content: <img src={slideimg6} alt="1" />
        },
        {
            key: uuidv4(),
            content: <img src={slideimg7} alt="1" />
        },
        {
            key: uuidv4(),
            content: <img src={slideimg4} alt="1" />
        },
        {
            key: uuidv4(),
            content: <img src={slideimg2} alt="1" />
        },
    ]
    .map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value, 10) || 0
        });
    };

    handleTouchStart = (evt) => {
        if (!this.state.enableSwipe) {
            return;
        }

        const firstTouch = getTouches(evt)[0];
        this.setState({
            ...this.state,
            xDown: firstTouch.clientX,
            yDown: firstTouch.clientY
        });
    };

    handleTouchMove = (evt) => {
        if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = this.state.xDown - xUp;
        let yDiff = this.state.yDown - yUp;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                /* left swipe */
                this.setState({
                    goToSlide: this.state.goToSlide + 1,
                    xDown: null,
                    yDown: null
                });
            } else {
                /* right swipe */
                this.setState({
                    goToSlide: this.state.goToSlide - 1,
                    xDown: null,
                    yDown: null
                });
            }
        }
    };

    render() {
        return (
            <div
                style={{ width: "100%", height: "200px", margin: "0 auto" }}
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
            >
                <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius={this.state.offsetRadius}
                    showNavigation={this.state.showNavigation}
                    animationConfig={this.state.config}
                />
            </div>
        );
    }
}
