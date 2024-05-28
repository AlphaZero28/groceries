import React, { useState } from 'react'
import styles from './main.module.css';

function Main() {
    const [costWithoutTax, setCostWithoutTax] = useState('');
    const [totalTax, setTotalTax] = useState('');
    const [totalTip, setTotalTip] = useState('');
    const [costList, setCostList] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // const cost = parseFloat(costWithoutTax) + parseFloat(totalTax) + parseFloat(totalTip);
        const tax_per = totalTax / costWithoutTax
        const tip_per = totalTip / costWithoutTax

        const costArray = costList.split(';').filter(Boolean).map(Number); // Split the string by ';' and convert each part to a number
        const person1 = costArray.reduce((acc, curr) => acc + curr, 0); // Sum all the numbers in the array


        const person2 = costWithoutTax - person1

        const person1Total = person1 + person1 * tax_per + person1 * tip_per
        const person2Total = person2 + person2 * tax_per + person2 * tip_per

        console.log(person1);


        alert(`
        Cost of Person 1: ${person1Total.toFixed(2)}
        Cost of Person 2: ${person2Total.toFixed(2)}
        `);

    };

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                    Total cost without Tax
                </label>
                <input
                    type='number'
                    value={costWithoutTax}
                    onChange={(e) => setCostWithoutTax(e.target.value)}
                    required
                    placeholder='50.25'
                />
                <label>
                    Total Tax
                </label>
                <input
                    type='number'
                    value={totalTax}
                    onChange={e => setTotalTax(e.target.value)}
                    required
                />
                <label>
                    Total tip
                </label>
                <input
                    type='number'
                    value={totalTip}
                    onChange={e => setTotalTip(e.target.value)}
                    required
                />
                <label>
                    Cost list for one person
                </label>
                <input
                    type='text'
                    placeholder='25 ; 30'
                    onChange={e => setCostList(e.target.value)}
                    required
                />
                {/* <button type='submit' > Submit</button> */}
                <input type='submit' className={styles.submitBtn} />
            </form>
        </div>
    )
}

export default Main