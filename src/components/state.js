import React, { useEffect, useState } from "react";

const State = () => {

    const [data, setData] = useState([]); 
    const getCovidData = async () => {

        const response = await fetch('https://api.covid19india.org/data.json');
        const actualData = await response.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);

        // or we can use this
        // fetch('https://api.covid19india.org/v4/min/data.min.json')
        // .then((response) => {
        //     const actualData = response.json();
        //     console.log(actualData.statewise);
        // })
        // .catch((err) => {
        //     console.log("Error occured", err);
        // })
    }

    useEffect(() => {
       getCovidData();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="heading">
                    <h1 className="heading__content">INDIA COVID-19 Tracker</h1>
                </div>
                <div className="covid__data">
                    <table className="covid__table">
                        <thead className="covid__table-head">
                            <tr>
                                <th> STATE </th>
                                <th> CONFIRMED </th>
                                <th> RECOVERED </th>
                                <th> DEATH </th>
                                <th> ACTIVE </th>
                                <th> UPDATED </th>
                            </tr>
                        </thead>
                        <tbody className="covid__table-body">
                            {
                                data.map((currEle, index) => {
                                    return (
                                        <tr key = {index}>
                                            <th> {currEle.state} </th>
                                            <th> {currEle.confirmed} </th>
                                            <th> {currEle.recovered} </th>
                                            <th> {currEle.deaths} </th>
                                            <th> {currEle.active} </th>
                                            <th> {currEle.lastupdatedtime} </th>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default State;