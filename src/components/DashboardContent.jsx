import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import CalibrationChart from "./CalibrationChart";
import WarrantyChart from "./WarrantyChart";
import ServicesChart from "./ServicesChart";
import IncidentsChart from "./IncidentsChart";

function DashboardContent() {
  const [selected, setSelected] = useState(0);
  const positions = {
    0: "2px",
    1: "calc(33.33% + 2px)",
    2: "calc(66.66% + 2px)",
  };

  const handleClick = (index) => {
    setSelected(index);
  };
  useEffect(() => {
    // Calibration Status Chart (moved to CalibrationChart.jsx)
    // Warranty Status Chart (moved to WarrantyChart.jsx)
    // Services Chart (moved to ServicesChart.jsx)
    // Incidents Chart (moved to IncidentsChart.jsx)
  }, []);

  return (
    <div className="ml-60 flex-grow bg-[#f3f4f6]">
      {/* Topbar */}

      <div
        className="bg-white shadow-sm flex justify-between items-center px-6 py-3 sticky top-0 z-50 drop-shadow-lg"
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
      >
        <h1 className="text-xl ml-6 font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div
            className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full drop-shadow-lg"
            style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="bg-black text-white rounded-full h-6 w-6 flex items-center justify-center">
              B
            </div>
            <span className="text-sm">Non Bio Medical</span>
          </div>

          <div
            className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full drop-shadow-lg"
            style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
          >
            <span className="text-sm ">Vijayanagar</span>
            <i className="bi bi-chevron-down"></i>
          </div>
          <div
            className="flex items-center justify-center bg-white h-8 w-8 rounded-full drop-shadow-lg"
            style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="text-black font-bold cursor-pointer text-lg">
              <i className="bi bi-grid-3x3-gap-fill"></i>
            </div>
          </div>

          <div
            className="flex items-center justify-center bg-white h-8 w-8 rounded-full drop-shadow-lg"
            style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="text-black font-bold cursor-pointer">
              <i className="bi bi-bell"></i>
            </div>
          </div>

          <div className="bg-gray-900 rounded-full h-8 w-8 flex items-center justify-center text-white">
            A
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="p-6">
        {/* Hospital Info */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 h-[14rem]">
          <div className="mt-4 flex ">
            <div className="flex-shrink-0 mr-4">
              <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center">
                <i className="bi bi-hospital text-xl"></i>
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center">
                <h3 className="font-medium">City General Hospital</h3>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 rounded ml-2">
                  Active Client
                </span>
              </div>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                <span>Online</span>
                <span className="mx-2">•</span>
                <span>Last updated 2 mins ago</span>
              </div>
            </div>
            <div className="w-2/4 flex">
              <div
                className="w-1/4 flex flex-col justify-center items-center bg-blue-600/20  rounded-lg shadow-sm"
                style={{ height: "5rem" }}
              >
                <div>
                  <span className="text-xs text-blue-600 font-semibold">
                    Performance
                  </span>
                  <div className="flex items-center justify-center">
                    <span className="text-md font-semibold">98.5%</span>
                  </div>
                  <div className="bg-blue-100 h-1.5 rounded-full w-20">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full mt-1"
                      style={{ width: "98.5%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div
                className="w-1/4 flex flex-col justify-center items-center bg-green-500/20 ml-4  rounded-lg shadow-sm"
                style={{ height: "5rem" }}
              >
                <div>
                  <span className="text-xs text-green-500 font-semibold">
                    Satisfaction
                  </span>
                  <div className="flex items-center justify-center ">
                    <span className="text-md font-semibold">4.8/5</span>
                  </div>
                  <div className="flex mt-1">
                    <i className="bi bi-circle-fill text-green-500 text-xs"></i>
                    <i className="bi bi-circle-fill text-green-500 text-xs"></i>
                    <i className="bi bi-circle-fill text-green-500 text-xs"></i>
                    <i className="bi bi-circle-fill text-green-500 text-xs"></i>
                    <i className="bi bi-circle-fill text-green-500 text-xs"></i>
                  </div>
                </div>
              </div>
              <div
                className="w-1/4 flex flex-col justify-center items-center ml-4 rounded-lg shadow-sm"
                style={{
                  height: "5rem",
                  background:
                    "linear-gradient(155deg,rgba(238, 174, 202, 0.34) 0%, rgba(148, 187, 233, 1) 100%)",
                }}
              >
                <div>
                  <span className="text-xs text-blue-600 font-semibold">
                    Asset Utilization
                  </span>
                  <div className="flex items-center justify-center">
                    <span className="text-md font-semibold">95.3%</span>
                  </div>
                  <div className="flex">
                    <i className="bi bi-dot text-purple-500 text-md"></i>
                    <i className="bi bi-dot text-purple-500 text-md"></i>
                    <i className="bi bi-dot text-purple-500 text-md"></i>
                    <i className="bi bi-dot text-purple-500 text-md"></i>
                    <i className="bi bi-dot text-purple-500 text-md"></i>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-blue-600 text-white rounded-lg px-3 py-1.5 text-sm flex items-center self-start mt-4">
              <i className="bi bi-plus-lg mr-1"></i> Generate Report
            </button>
          </div>
          <div className="mt-4 flex">
            <div className="flex-shrink-0 mr-4"></div>
            <div className="flex-grow">
              <div className="">
                <p className="text-sm text-gray-500">Annual Contract Value</p>
                <h2 className="text-2xl font-semibold mt-1">₹2,50,00,000</h2>
              </div>
            </div>
            <div className="w-2/4 flex">
              <div
                className="w-1/4 flex flex-col justify-center items-center   "
                style={{ height: "5rem" }}
              >
                <div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <span className="text-gray-500 text-sm">Assets</span>
                    </div>
                    <div className="font-semibold text-xl mt-2">487</div>
                  </div>
                </div>
              </div>
              <div
                className="w-1/4 flex flex-col justify-center items-center   "
                style={{ height: "5rem" }}
              >
                <div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <span className="text-gray-500 text-sm">Services</span>
                    </div>
                    <div className="font-semibold text-xl mt-2">24</div>
                  </div>
                </div>
              </div>
              <div
                className="w-1/4 flex flex-col justify-center items-center   "
                style={{ height: "5rem" }}
              >
                <div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <span className="text-gray-500 text-sm">Uptime</span>
                    </div>
                    <div className="font-semibold text-xl mt-2">99.9%</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-white rounded-lg px-3 py-1.5 text-sm flex w-[10rem] h-[8rem] mt-[-43px]"
              style={{
                background:
                  "linear-gradient(155deg,rgba(219, 219, 219, 1) 24%, rgba(18, 136, 255, 1) 100%)",
              }}
            >
              <div className=" rounded-full w-full h-full flex flex-col items-center justify-center ">
                <div className="text-xs text-white font-bold">XXXXXXXXXX</div>
                <div className="text-xs text-white font-bold">XXXXXXXXXX</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex space-x-4 mb-6 ">
          <div className="bg-white rounded-lg shadow-sm p-4 w-1/4">
            <div className="flex items-center p-2">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <i className="bi bi-bar-chart text-blue-600"></i>
              </div>
              <div>
                <div className="text-gray-500 text-md">Assets</div>
                <div className="font-semibold text-xl ">487</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 w-1/4">
            <div className="flex items-center p-2">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <i className="bi bi-x-circle text-red-600"></i>
              </div>
              <div>
                <div className="text-gray-500 text-md">Not Working</div>
                <div className="font-semibold text-xl ">24</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 w-1/4">
            <div className="flex items-center p-2">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                <i className="bi bi-trash text-orange-600"></i>
              </div>
              <div>
                <div className="text-gray-500 text-md">Discarded</div>
                <div className="font-semibold text-xl ">18</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 w-1/4">
            <div className="flex items-center p-2">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <i className="bi bi-building text-green-600"></i>
              </div>
              <div>
                <div className="text-gray-500 text-md">Department</div>
                <div className="font-semibold text-xl ">12</div>
              </div>
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="flex space-x-4 mb-6">
          {/* Downtime Card */}
          <div className="bg-white rounded-lg shadow-sm p-4 w-1/3">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-2">
                  <i className="bi bi-clock-history text-red-500 text-xs"></i>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">
                    Cumulative <br />
                    Downtime
                  </h3>
                </div>
              </div>
              <div className="text-gray-400 cursor-pointer">
                <i className="bi bi-three-dots-vertical"></i>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Time wasted due to downtime
            </p>
            <div className="text-2xl font-semibold mt-2">17:45:30</div>
          </div>

          {/* Asset Tracking Card */}
          <div className="bg-white rounded-lg shadow-sm p-4 w-1/3">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="w-8 h-8  rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <i className="bi bi-geo-alt text-blue-500 text-xs"></i>
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="text-sm font-medium mr-2">
                      User Asset Tracking 2.0
                    </h3>
                    <span className="bg-blue-100 text-blue-600 text-xs px-1.5 py-0.5 rounded">
                      New
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-gray-400 cursor-pointer">
                <i className="bi bi-three-dots-vertical"></i>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Uptime tracking for monitoring and performance
            </p>
            <div className="flex justify-between items-center">
              <div className="flex mt-3 text-whites">
                <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center -mr-1 z-10 text-white">
                  R
                </div>
                <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white -mr-1 z-20">
                  G
                </div>
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white -mr-1 z-30">
                  B
                </div>
                <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white -mr-1 z-40">
                  Y
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 text-xs border-2 border-white z-50">
                  +4
                </div>
              </div>
              <div className="mt-3">
                <button
                  className="bg-blue-600 text-white text-xs rounded-lg px-3 py-1.5 flex items-center"
                  style={{
                    background:
                      "linear-gradient(155deg,rgba(54, 154, 255, 1) 25%, rgba(0, 7, 15, 1) 91%)",
                  }}
                >
                  Learn More <i className="bi bi-arrow-right ml-1"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-sm p-4 w-1/3">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <i className="bi bi-shield-check text-blue-500 text-xs"></i>
                </div>
                <div>
                  <h3 className="text-sm font-medium">XXXXXXXXXXXXXX</h3>
                </div>
              </div>
              <div className="text-gray-400 cursor-pointer">
                <i className="bi bi-three-dots-vertical"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="flex space-x-4 mb-6">
          {/* Services Chart */}
          <div className="bg-white rounded-lg shadow-sm p-4 w-1/2">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-base font-medium">
                Services
                <i className="bi bi-chevron-down ml-2 pt-1 text-xs"></i>
              </h3>
            </div>
            <div className="flex">
              <div className="w-1/3 border-r pr-3 ">
                <div className="mb-4 bg-green-800/20 rounded-lg p-3">
                  <div className="flex justify-between ">
                    <div className="text-xs text-gray-700 mb-1">Open</div>
                    <div className="text-xs  font-semibold text-green-800 mb-1">
                      48%
                    </div>
                  </div>

                  <div className="relative pt-2 flex justify-center">
                    <div className="progress-circle green-circle">45%</div>
                  </div>
                </div>
                <div className="mb-4 bg-red-800/20 rounded-lg p-3">
                  <div className="flex justify-between ">
                    <div className="text-xs text-gray-700 mb-1">Closed</div>
                    <div className="text-xs  font-semibold text-red-800 mb-1">
                      16
                    </div>
                  </div>

                  <div className="relative pt-2 flex justify-center">
                    <div className="progress-circle red-circle">36%</div>
                  </div>
                </div>
                <div className="mb-4 bg-blue-800/20 rounded-lg p-3">
                  <div className="flex justify-between ">
                    <div className="text-xs text-gray-700 mb-1">
                      Expanditure
                    </div>
                    <div className="text-xs  font-semibold text-blue-800 mb-1">
                      45K
                    </div>
                  </div>

                  <div className="relative pt-2 flex justify-center">
                    <div className="progress-circle blue-circle">45%</div>
                  </div>
                </div>
              </div>
              <div className="w-3/4 pl-3 ">
                <div className="flex justify-between items-center ">
                  <div className="toggle-switch">
                    <div
                      className="toggle-button"
                      style={{ left: positions[selected] }}
                    ></div>
                    <div className="toggle-labels">
                      <span
                        className={`toggle-label ${
                          selected === 0 ? "active" : ""
                        }`}
                        onClick={() => handleClick(0)}
                      >
                        Day
                      </span>
                      <span
                        className={`toggle-label ${
                          selected === 1 ? "active" : ""
                        }`}
                        onClick={() => handleClick(1)}
                      >
                        Month
                      </span>
                      <span
                        className={`toggle-label ${
                          selected === 2 ? "active" : ""
                        }`}
                        onClick={() => handleClick(2)}
                      >
                        Year
                      </span>
                    </div>
                  </div>
                  <div>
                    <button className="bg-blue-600 text-white rounded px-3 py-1 text-sm flex items-center">
                      <i className="bi bi-plus-lg mr-1"></i> Add New
                    </button>
                  </div>
                </div>
                <ServicesChart />
              </div>
            </div>
          </div>

          {/* Calibration Status Chart */}
          <div className="bg-white rounded-lg shadow-sm p-4 w-1/2">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-base font-medium">Calibration Status</h3>
              <div className="text-xs text-gray-500">
                <i className="bi bi-calendar3"></i> Mar 2023
                <i className="bi bi-chevron-down ml-2 pt-1 text-xs"></i>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="w-full max-w-4xl">
                <div className="flex justify-center items-center">
                  <CalibrationChart />
                </div>
                <div className="grid grid-cols-12 gap-2 pt-8 w-full">
                  <div className="bg-blue-50 col-span-4 rounded-lg p-3 text-center">
                    <div className="text-blue-500 text-2xl mb-1">
                      <i className="bi bi-check-circle"></i>
                    </div>
                    <div className="text-blue-600 font-semibold">45%</div>
                    <div className="text-xs text-gray-500">Calibrated</div>
                  </div>
                  <div className="bg-red-50 col-span-4 rounded-lg p-3 text-center">
                    <div className="text-red-500 text-2xl mb-1">
                      <i className="bi bi-x-circle"></i>
                    </div>
                    <div className="text-red-600 font-semibold">35%</div>
                    <div className="text-xs text-gray-500">Not Calibrated</div>
                  </div>
                  <div className="bg-gray-50 col-span-4 rounded-lg p-3 text-center">
                    <div className="text-gray-500 text-2xl mb-1">
                      <i className="bi bi-dash-circle"></i>
                    </div>
                    <div className="text-gray-600 font-semibold">20%</div>
                    <div className="text-xs text-gray-500">Not Required</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Chart Row */}
        <div className="flex space-x-4 mb-6">
          {/* Incidents Chart */}
          <div className="bg-white rounded-lg shadow-sm p-4 w-1/2">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-base font-medium">
                Services
                <i className="bi bi-chevron-down ml-2 pt-1 text-xs"></i>
              </h3>
            </div>
            <div className="flex">
              <div className="w-1/3 border-r pr-3">
                <div className="mb-4 bg-green-800/20 rounded-lg p-3">
                  <div className="flex justify-between ">
                    <div className="text-xs text-gray-700 mb-1">Open</div>
                    <div className="text-xs  font-semibold text-green-800 mb-1">
                      48%
                    </div>
                  </div>

                  <div className="relative pt-2 flex justify-center">
                    <div className="progress-circle green-circle">45%</div>
                  </div>
                </div>
                <div className="mb-4 bg-red-800/20 rounded-lg p-3">
                  <div className="flex justify-between ">
                    <div className="text-xs text-gray-700 mb-1">Closed</div>
                    <div className="text-xs  font-semibold text-red-800 mb-1">
                      16
                    </div>
                  </div>

                  <div className="relative pt-2 flex justify-center">
                    <div className="progress-circle red-circle">36%</div>
                  </div>
                </div>
                <div className="mb-4 bg-blue-800/20 rounded-lg p-3">
                  <div className="flex justify-between ">
                    <div className="text-xs text-gray-700 mb-1">
                      Expanditure
                    </div>
                    <div className="text-xs  font-semibold text-blue-800 mb-1">
                      45K
                    </div>
                  </div>

                  <div className="relative pt-2 flex justify-center">
                    <div className="progress-circle blue-circle">45%</div>
                  </div>
                </div>
              </div>
              <div className="w-3/4 pl-3 ">
                <div className="flex justify-between items-center ">
                  <div className="toggle-switch">
                    <div
                      className="toggle-button"
                      style={{ left: positions[selected] }}
                    ></div>
                    <div className="toggle-labels">
                      <span
                        className={`toggle-label ${
                          selected === 0 ? "active" : ""
                        }`}
                        onClick={() => handleClick(0)}
                      >
                        Day
                      </span>
                      <span
                        className={`toggle-label ${
                          selected === 1 ? "active" : ""
                        }`}
                        onClick={() => handleClick(1)}
                      >
                        Month
                      </span>
                      <span
                        className={`toggle-label ${
                          selected === 2 ? "active" : ""
                        }`}
                        onClick={() => handleClick(2)}
                      >
                        Year
                      </span>
                    </div>
                  </div>
                  <div>
                    <button className="bg-blue-600 text-white rounded px-3 py-1 text-sm flex items-center">
                      <i className="bi bi-plus-lg mr-1"></i> Add New
                    </button>
                  </div>
                </div>
                <IncidentsChart />
              </div>
            </div>
          </div>

          {/* Warranty Status Chart */}
          <div className="bg-white rounded-lg shadow-sm p-4 w-full max-w-xl">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-base font-medium">Warranty Status</h3>
              <div className="text-xs text-gray-500">
                <i className="bi bi-calendar3"></i> Mar 2023
                <i className="bi bi-chevron-down ml-2 pt-1 text-xs"></i>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex justify-center items-center">
                <WarrantyChart />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-6">
              <div className="bg-green-50 rounded-lg p-3 text-center">
                <div className="text-green-500 text-2xl mb-1">
                  <i className="bi bi-check-circle"></i>
                </div>
                <div className="text-green-600 font-semibold">50%</div>
                <div className="text-xs text-gray-500">Total</div>
              </div>

              <div className="bg-orange-50 rounded-lg p-3 text-center">
                <div className="text-orange-500 text-2xl mb-1">
                  <i className="bi bi-clock-history"></i>
                </div>
                <div className="text-orange-600 font-semibold">30%</div>
                <div className="text-xs text-gray-500">Expires Soon</div>
              </div>

              <div className="bg-purple-50 rounded-lg p-3 text-center">
                <div className="text-purple-500 text-2xl mb-1">
                  <i className="bi bi-exclamation-circle"></i>
                </div>
                <div className="text-purple-600 font-semibold">20%</div>
                <div className="text-xs text-gray-500">Requested</div>
              </div>
            </div>
          </div>
        </div>

        {/* Need Attention Table */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-medium">Need Attention</h3>
            <button className="bg-blue-600 text-white rounded px-3 py-1 text-sm flex items-center">
              <i className="bi bi-plus-lg mr-1"></i> Add New
            </button>
          </div>
          <table className="w-full">
            <thead>
              <tr
                className=" text-left text-sm text-gray-500 bg-gray-100 h-10 items-center border-b"
                style={{ borderRadius: "6px" }}
              >
                <th className="pl-6 font-medium">Asset Code</th>
                <th className=" font-medium">Department</th>
                <th className=" font-medium">Service</th>
                <th className=" font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">MED-1234</td>
                <td className="py-3">Cardiology</td>
                <td className="py-3">Maintenance</td>
                <td className="py-3">
                  <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs">
                    Urgent
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3">MED-2356</td>
                <td className="py-3">Radiology</td>
                <td className="py-3">Repair</td>
                <td className="py-3">
                  <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full text-xs">
                    High
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3">MED-7890</td>
                <td className="py-3">Laboratory</td>
                <td className="py-3">Calibration</td>
                <td className="py-3">
                  <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded-full text-xs">
                    Medium
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3">MED-4567</td>
                <td className="py-3">Emergency</td>
                <td className="py-3">Replacement</td>
                <td className="py-3">
                  <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-xs">
                    Low
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
