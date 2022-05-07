import React from 'react'
import Footer from "./Footer";
const Dashboard = () => {
  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">

                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
              <h4 className="page-title">Dashboard </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-xl-3">
          <div className="widget-rounded-circle card">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="avatar-lg rounded-circle bg-soft-primary border-primary border">
                    <i className="fe-heart font-22 avatar-title text-primary" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-end">
                    <h3 className="text-dark mt-1">$<span data-plugin="counterup">58,947</span></h3>
                    <p className="text-muted mb-1 text-truncate">Total Revenue</p>
                  </div>
                </div>
              </div> {/* end row*/}
            </div>
          </div> {/* end widget-rounded-circle*/}
        </div> {/* end col*/}
        <div className="col-md-6 col-xl-3">
          <div className="widget-rounded-circle card">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="avatar-lg rounded-circle bg-soft-success border-success border">
                    <i className="fe-shopping-cart font-22 avatar-title text-success" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-end">
                    <h3 className="text-dark mt-1"><span data-plugin="counterup">127</span></h3>
                    <p className="text-muted mb-1 text-truncate">Today's Sales</p>
                  </div>
                </div>
              </div> {/* end row*/}
            </div>
          </div> {/* end widget-rounded-circle*/}
        </div> {/* end col*/}
        <div className="col-md-6 col-xl-3">
          <div className="widget-rounded-circle card">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="avatar-lg rounded-circle bg-soft-info border-info border">
                    <i className="fe-bar-chart-line- font-22 avatar-title text-info" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-end">
                    <h3 className="text-dark mt-1"><span data-plugin="counterup">0.58</span>%</h3>
                    <p className="text-muted mb-1 text-truncate">Conversion</p>
                  </div>
                </div>
              </div> {/* end row*/}
            </div>
          </div> {/* end widget-rounded-circle*/}
        </div> {/* end col*/}
        <div className="col-md-6 col-xl-3">
          <div className="widget-rounded-circle card">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="avatar-lg rounded-circle bg-soft-warning border-warning border">
                    <i className="fe-eye font-22 avatar-title text-warning" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-end">
                    <h3 className="text-dark mt-1"><span data-plugin="counterup">78.41</span>k</h3>
                    <p className="text-muted mb-1 text-truncate">Today's Visits</p>
                  </div>
                </div>
              </div> {/* end row*/}
            </div>
          </div> {/* end widget-rounded-circle*/}
        </div> {/* end col*/}
      </div>
      {/* end row*/}

    </>
  )
}

export default Dashboard
