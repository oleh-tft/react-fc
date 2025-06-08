import React from "react";
import './Info.css'

export class Info extends React.Component {

    constructor(props) {
        super(props);
        this.state = {border: ''};
    }

    render() {
        const borders = ['b1', 'b2', 'b3'];
        const titles = ['t1', 't2', 't3'];
        const texts = ['txt1', 'txt2', 'txt3'];
        return (
            <div className={borders[Math.floor(Math.random() * 3)]}>
                <h2 className={titles[Math.floor(Math.random() * 3)]}>{this.props.title}</h2>
                <img src={this.props.img} />
                <p className={texts[Math.floor(Math.random() * 3)]}>City: {this.props.city}</p>
                <p className={texts[Math.floor(Math.random() * 3)]}>Year: {this.props.year}</p>
            </div>
        );
    }

}