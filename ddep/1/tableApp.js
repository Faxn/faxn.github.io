/** Random Tables */
const PurposeTable = ["Kitchen", "Barracks", "Armory"];
const ConditionTable = ["The ceiling is collapsed.", "Most of the Room was destroyed in a fire.", ];
const ContentsTable = ["a monster", "a trap", "a treasure", "a monster and a treasure", "a trap and a treasure", "a dead adventurer and a trap"];

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
        this.state= {rolls: [0, 0, 0]};
    }
    
    componentDidMount(){
        this.roll();
    }
    
    roll(){
        let rolls = [];
        for (let i =0; i< 10; i++){
            rolls.push(Math.random());
        }
        //Component.prototype.setState takes an updater not a new state.
        this.setState({rolls: rolls});
    }
        
    render() {
        console.log('render')
        console.log(this.state)
        return (<div>
            <button onClick = {() => this.roll()}>Roll!</button>
            <p>Here we have a <TableRoll roll={this.state.rolls[0]} table={PurposeTable}/>.&nbsp;
            <TableRoll roll={this.state.rolls[1]} table={ConditionTable}/>&nbsp;
            There is <TableRoll table={ContentsTable} roll={this.state.rolls[2]}/> in the room. </p>
        </div>);
    }
}


ReactDOM.render( <TableApp/>,document.getElementById('TableApp'));
