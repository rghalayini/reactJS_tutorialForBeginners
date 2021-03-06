import React, { Component } from 'react';

class Counter extends Component {
    // state={
    //     value: this.props.counter.value
    // };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }
    
    // handleIncrement = (product) =>{
    //     console.log(this.state.value);
    //     this.setState({value: this.state.value + 1});
    // }

    // handleIncrement = () =>{
    //     this.setState({count:this.state.count + 1})
    // }
    

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                //onClick = {this.handleIncrement}
                //onClick={(product) =>this.handleIncrement({product})} 
                onClick ={()=> this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button 
                    onClick={()=>this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>  
            </div>       
        );
    }



    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        //classes += (this.state.value === 0) ? "warning" : "primary";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value ;
    }

}
 
export default Counter;

/*{ <ul>
{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
</ul> }*/

// class Counter extends Component {
//     state={
//         count:0,
//         tags : []   
//     };
    
//     renderTags(){
//         if (this.state.tags.length === 0) return <p>There are no tags</p>;
//         return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
//     }

//     render() { 
//         return <div>
//             {this.state.tags.length === 0 && 'Please create a new tag'}
//             {this.renderTags()}
//         </div>;
//     }
// }