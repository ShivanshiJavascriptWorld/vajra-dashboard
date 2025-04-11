import React, { useEffect, useRef } from 'react';
    import ApexCharts from 'apexcharts';

    function WarrantyChart() {
      const chartRef = useRef(null);

      useEffect(() => {
        const options = {
          series: [50, 30, 20],
          chart: {
            type: 'donut',
            height: 180,
            toolbar: {
              show: false
            }
          },
          colors: ['#48bb78', '#ed8936', '#9f7aea'],
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

        const chart = new ApexCharts(document.querySelector("#warranty-chart"), options);
        chartRef.current = chart;
        chart.render();

        return () => {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        };
      }, []);

      return (
        <div id="warranty-chart"></div>
      );
    }

    export default WarrantyChart;
