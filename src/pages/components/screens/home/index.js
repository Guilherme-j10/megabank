import React, { useEffect, useRef } from 'react';
import * as Style from './style';

import Chart from 'chart.js';

export default function HomeScreen(){
    const canvasRef = useRef();

    useEffect(() => {
        const chartCanvas = canvasRef.current.getContext("2d");
        new Chart(chartCanvas, {
            type: 'line',
            gridLines: {
                color: '#fff'
            },
            data: {
                labels: ["dia 1", "dia 2", "dia 3", "dia 4", "dia 5", "dia 6", "dia 7", "dia 8", "dia 9"],
                datasets: [
                    {
                        label: 'ano passado',
                        data: [89,63,54,19,33,54, 54, 97, 65, 23],
                        backgroundColor: ['#00ff2a2d'],
                        borderColor: ['#00ff2a'],
                        borderWidth: 1
                    },
                    {
                        label: 'este ano',
                        data: [19,33,54, 54, 97, 65, 23,89,63,54],
                        backgroundColor: ['#00bbff2d'],
                        borderColor: ['#00bbff'],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                legend: {
                    display: true,
                    labels: {
                        fontColor: '#fff'
                    }
                },
                scales:{
                    xAxes:[{
                        gridLines:{
                            color: 'rgba(51,51,51,.2)'
                        },
                        ticks:{
                            fontColor: '#fff'
                        }
                    }],
                    yAxes:[{
                        gridLines:{
                            color: 'rgba(51,51,51,.2)'
                        },
                        ticks:{
                            fontColor: '#fff'
                        }
                    }]
                }
            },
        })
    }, [])

    return(
        <Style.Main>
            <canvas id="canvasChart" ref={canvasRef} ></canvas>
        </Style.Main>
    );
}