import React, {Component} from 'react';
import User from './User'
export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User src='https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg' 
                alt='man' 
                name='Harry_prince'
                min/>
                <img  src={this.props.src} alt={this.props.alt}/>
                <div className="post__name">some account</div>
                <div className="post__descr">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eaque quam nesciunt, minima dolores sapiente assumenda esse, enim non maxime, rem eligendi sint laborum adipisci id architecto! Architecto, sapiente quibusdam.
                </div>
            </div>
        )
    }
}