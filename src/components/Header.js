import React,{Component} from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    handleAdd = ()=> {
        this.props.addTodo(this.input.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={input => this.input = input} />
                <button onClick={this.handleAdd}>
                    添加
                </button>
            </div>
        )
    }
}