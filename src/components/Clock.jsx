import React, { Component } from "react";
import "./Clock.css"

export default class Clock extends Component {
    state = {
        date: new Date(),
        reactMsg:"é incrível"
    }

    reactMsgChange = () => {
        let msg = this.state.reactMsg;

        // if (msg === "é incrível") {
        //     this.setState({reactMsg:" is amazing"}); 
        // } else {
        //     this.setState({reactMsg:"é incrível"});
        // }

        this.setState({reactMsg:" is amazing"});
       
    }

    componentDidMount() {
        this.timer = setInterval(() => {
           this.updateTime();
        },1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    updateTime() {
        this.setState({date: new Date()})
    }

    // reactMsgChange2 = () => {
    //     this.setState({reactMsg:"é incrível"})
        
    // }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Desenvolvedor fullStack junior {this.state.reactMsg}</h1>
                <p>Aluno atual da Innovation Alan Faraj contando dias, horas e minutos para migrar na area de seu sonho e crescer cada vez mais na carreira. </p>
                <h2> Data: {this.state.date.toLocaleString()}</h2>
                <button onClick={this.reactMsgChange}>Amazing</button>
                {/* <button onClick={this.reactMsgChange2}>Incrivel</button> */}
            </div>
        );
    }
}