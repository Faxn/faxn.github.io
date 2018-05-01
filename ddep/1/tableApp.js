/** Random Tables */
const PurposeTable = ["Kitchen", "Barracks", "Armory"];

/** Components */

/**
 * Represents a roll on a random table. 
 * @prop{roll} random number in the interval [0, 1.0) (0 included 1 not included.). It is used to determine the table roll. 
 * @prop{table} the table. should be an array of things react can render, like strings.
 */
class TableRoll extends React.Component{
    render() {
        return this.getEntry(this.props.roll);
    }
    
    /** */
    getEntry(i){
        let idx = Math.floor(i*this.props.table.length);
        return this.props.table[idx];
    }
}



class TableApp extends React.Component {
    constructor(){
        super();
        this.state = {roll: Math.random()};
    }
    
    roll(){
        //Component.prototype.setState takes an updater not a new state.
        let r = Math.random();
        console.log(r)
        console.log(this)
        this.setState({roll: r});
    }
    
    render() {
        console.log('render')
        console.log(this.state)
        return (<div>
            <button onClick = {() => this.roll()}>Roll!</button>
            <p>Here we have a <TableRoll roll={this.state.roll} table={PurposeTable}/>.</p>
        </div>);
    }
}


ReactDOM.render( <TableApp/>,document.getElementById('TableApp'));
