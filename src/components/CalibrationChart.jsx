import React, { useEffect, useRef } from 'react';
    import ApexCharts from 'apexcharts';

    function CalibrationChart() {
      const chartRef = useRef(null);

      useEffect(() => {
        const options = {
          series: [45, 35, 20],
          chart: {
            type: 'donut',
            height: 180,
            toolbar: {
              show: false
            }
          },
          colors: ['#4299e1', '#f56565', '#e2e8f0'],
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          tooltip: {
            enabled: true
          },
          stroke: {
            width: 0
          },
          plotOptions: {
            pie: {
              donut: {
                size: '75%',
                labels: {
                  show: false
                }
              }
            }
          }
        };

        if (chartRef.current) {
          chartRef.current.destroy();
        }

        const chart = new ApexCharts(document.querySelector("#calibration-chart"), options);
        chartRef.current = chart;
        chart.render();

        return () => {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        };
      }, []);

      return (
        <div id="calibration-chart"></div>
      );
    }

    export default CalibrationChart;
