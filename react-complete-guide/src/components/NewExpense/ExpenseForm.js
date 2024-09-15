import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
         setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type='text' 
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min="0.01" 
                        step="0.01" 
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type='date' 
                        min="2020-01-01" 
                        max="2023-09-01" 
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;

const useStyles = makeStyles({
    gridRow: {
        flexGrow: 1,
        color: '#483D8B'
    }
})

export default function Home() {
    const cardsRow1: ApplicationCardData[] = [
        {
            id: 0,
            header: 'AAA',
            buttons: [
                {
                    linkDestionation: "",
                    isDisabled: false,
                }
            ]
        },
        {
            id: 1,
            header: 'BBB',
            buttons: [
                {
                    linkDestionation: "",
                    isDisabled: false,
                }
            ]
        },
        {
            id: 2,
            header: 'CCC',
            buttons: [
                {
                    linkDestionation: "",
                    isDisabled: false,
                }
            ]
        },
    ];

    const cardsRow2: ApplicationCardData[] = [
        {
            id: 3,
            header: 'DDD',
            buttons: [
                {
                    linkDestionation: "",
                    isDisabled: false,
                }
            ]
        },
        {
            id: 4,
            header: 'Environment Setup',
            buttons: [
                {
                    linkDestionation: "",
                    isDisabled: false,
                }
            ]
        },
        {
            id: 5,
            header: 'FFF',
            buttons: [
                {
                    linkDestionation: "",
                    isDisabled: false,
                }
            ]
        },
    ];

    const rowsData = [cardsRow1, cardsRow2]

    const rows = rowsData.map((row, index) => {
        return (
            <div key={`row-${index}`} className={classes.gridRow}>
                <h3>{rowHeaders[index]}</h3>
                <Grid item xs={7}>
                    <Grid container spacing={2}>
                        {row.map((cardDatum) => (
                            <Grid item xs={cardWidth} key={cardDatum.id}>

                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </div>
        )
    })

    return (
        <Grid container className={classes.gridRow} spacing={2}>
            {rows}
        </Grid>
    )
}