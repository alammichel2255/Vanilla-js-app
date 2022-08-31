import React from 'react';

export const SubSelection = ({ measurement, changeUnit, unit }) => {
    let weights = {
        name: "weights",
        values: ["lbs", "oz"],
        labels: ["kg - lbs", "g - oz", "lbs", "oz"]
    }

    let densities = {
        name: "densities",
        values: ["L", "oz"],
        labels: ["mL - L", "mL - oz", "L", "oz"]
    }

    const SelectForm = ({ name, values, labels }) => (
        <select name={name} value={unit} onChange={({ target }) => changeUnit(target.value)}>
            <option value={values[0]}>{labels[0]}</option>
            <option value={values[1]}>{labels[1]}</option>
        </select>
    )

    // we'll address this later, needs to check tbs to cups
    return measurement === "weight"
        ? SelectForm(weights)
        : SelectForm(densities)
}