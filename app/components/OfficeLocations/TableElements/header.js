import React from 'react'

import styles from "../styles.scss";

const headers = ['Id (TimeStamp)','Office name', 'Office type', 'Start date', 'End date', 'Latitude', 'Longitude', 'Contact Name(s)', 'Contact Number(s)', 'Contact Email(s)']

const tableHeader = () => (
    <div className = {styles.tableHeader}>
        {headers.map((headerColumn, i) => {
            return (
                <div className = {styles.tableHeaderCell} key = {i}>{headerColumn}</div>
            )
        })}
    </div>
);

export default tableHeader
