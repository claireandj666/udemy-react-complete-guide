import './Card.css';

//function Card(props) {
const Card = (props) => {
    const classes = 'card ' + props.className;   // whitespace needed after card
    return <div className={classes}>{props.children}</div>;
}

export default Card;