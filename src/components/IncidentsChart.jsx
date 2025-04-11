import React, { useEffect, useRef } from 'react';
    import ApexCharts from 'apexcharts';

    function IncidentsChart() {
      const chartRef = useRef(null);

      useEffect(() => {
        const options = {
          series: [{
            name: 'Incidents',
            data: [35, 45, 30, 40, 35, 55, 40]
          }],
          chart: {
            type: 'bar',
            height: 220,
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          colors: ['#4299e1'],
          plotOptions: {
            bar: {
              borderRadius: 4,
              columnWidth: '50%',
              dataLabels: {
                position: 'top'
              }
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          yaxis: {
            show: false
          },
          grid: {
            show: false
          }
        };

        if (chartRef.current) {
          chartRef.current.destroy();
        }

        const chart = new ApexCharts(document.querySelector("#incidents-chart"), options);
        chartRef.current = chart;
        chart.render();

        return () => {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        };
      }, []);

      return (
        <div id="incidents-chart"></div>
      );
    }

    export default IncidentsChart;
