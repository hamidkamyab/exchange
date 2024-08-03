import React from 'react';

function App() {
  return (
    <div className="App container-fluid d-flex flex-column justify-content-center align-items-center">

      <div className="header">
        <h5 className='m-0 p-0 text-muted'>React Exchange</h5>
      </div>
      <div className="content h-75 col-12 d-flex align-items-start justify-content-center p-2">
        <div className="right h-100 col-5 p-2">
          <div className='bg-white h-100 p-3 rounded-4'>
            <div className="yourShares">
              <table class="table table-striped table-sm">
                <thead className='table-secondary'>
                  <tr>
                    <th>نماد</th>
                    <th>دارایی</th>
                    <th>آخرین قیمت</th>
                    <th>ارزش سهم</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                  <tr>
                    <td>شپنا</td>
                    <td>47</td>
                    <td>4542 (5%)</td>
                    <td>21342</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="total d-flex align-items-center p-2 overflow-hidden">
              <div className="col-6">
                دارایی شما:
              </div>
              <div className="col-6">
                توان خرید:
              </div>
            </div>
          </div>
        </div>
        <div className="left h-100 col-5 p-2">
          <div className='bg-white h-100 p-3 rounded-4'>
            <div className="head d-flex justify-content-between align-items-start p-2">
              <div className="right d-flex flex-column gap-1">
                <h5 className='m-0 p-0'>ساوه</h5>
                <small className='fs-12'>سیمان ساوه</small>
              </div>
              <div className="left fs-14">
                2858 (5%)
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center bg-silver p-2 fs-14">
              <span>ارزش واقعی:</span>
              <span>حجم:</span>
            </div>

            <div className="indicators d-flex fs-14">
              <div className="col-6 d-flex flex-column align-items-start gap-1 p-2">
                <div className="col-12 d-flex position-relative">
                  <div className="col-2 text-center">تعداد</div>
                  <div className="col-2 text-center">حجم</div>
                  <div className="col-8 text-end">قیمت</div>
                 
                </div>
                <div className="col-12 d-flex position-relative">
                  <div className="col-2 text-center">20</div>
                  <div className="col-2 text-center">1350</div>
                  <div className="col-8 text-end">34000</div>
                  <div className="bar position-absolute bar-green end-0" style={{width:'20%'}}></div>
                </div>

                <div className="col-12 d-flex position-relative">
                  <div className="col-2 text-center">20</div>
                  <div className="col-2 text-center">1350</div>
                  <div className="col-8 text-end">34000</div>
                  <div className="bar position-absolute bar-green end-0" style={{width:'50%'}}></div>
                </div>

                <div className="col-12 d-flex position-relative">
                  <div className="col-2 text-center">20</div>
                  <div className="col-2 text-center">1350</div>
                  <div className="col-8 text-end">34000</div>
                  <div className="bar position-absolute bar-green end-0" style={{width:'30%'}}></div>
                </div>

                <div className="col-12 d-flex  position-relative">
                  <div className="col-2 text-center">20</div>
                  <div className="col-2 text-center">1350</div>
                  <div className="col-8 text-end">34000</div>
                  <div className="bar position-absolute bar-green end-0"  style={{width:'80%'}}></div>
                </div>
                {/* <div className="col-2 d-flex flex-column">
                 
                  <span className='text-center'>تعداد</span>
                  <span className='text-center'>20</span>
                  <span className='text-center'>1</span>
                  <span className='text-center'>3</span>
                  <span className='text-center'>9</span>
                  <span className='text-center'>40</span>
                </div>
                <div className="col-2 d-flex flex-column">
                  <span className='text-center'>حجم</span>
                  <span className='text-center'>1400</span>
                  <span className='text-center'>3200</span>
                  <span className='text-center'>1900</span>
                  <span className='text-center'>2240</span>
                  <span className='text-center'>4000</span>
                </div>
                <div className="col-8 d-flex flex-column">
                  <span className='text-end'>قیمت</span>
                  <span className='text-end'>20000</span>
                  <span className='text-end'>10000</span>
                  <span className='text-end'>31000</span>
                  <span className='text-end'>9000</span>
                  <span className='text-end'>400000</span>
                </div> */}
              </div>
              <div className="col-6 d-flex flex-column align-items-start p-2 gap-1">
                <div className="col-12 d-flex">
                  <div className="col-8 text-start">قیمت</div>
                  <div className="col-2 text-center">حجم</div>
                  <div className="col-2 text-center">تعداد</div>
                </div>
                <div className="col-12 d-flex position-relative">
                  <div className="col-8 text-start">34000</div>
                  <div className="col-2 text-center">1350</div>
                  <div className="col-2 text-center">20</div>
                  <div className="bar position-absolute bar-red start-0"  style={{width:'80%'}}></div>
                </div>

                <div className="col-12 d-flex position-relative">
                  <div className="col-8 text-start">34000</div>
                  <div className="col-2 text-center">1350</div>
                  <div className="col-2 text-center">20</div>
                  <div className="bar position-absolute bar-red start-0"  style={{width:'40%'}}></div>
                </div>

                <div className="col-12 d-flex position-relative">
                  <div className="col-8 text-start">34000</div>
                  <div className="col-2 text-center">1350</div>
                  <div className="col-2 text-center">20</div>
                  <div className="bar position-absolute bar-red start-0"  style={{width:'70%'}}></div>
                </div>

                <div className="col-12 d-flex position-relative">
                  <div className="col-8 text-start">34000</div>
                  <div className="col-2 text-center">1350</div>
                  <div className="col-2 text-center">20</div>
                  <div className="bar position-absolute bar-red start-0"  style={{width:'30%'}}></div>
                </div>
                {/* <div className="col-8 d-flex flex-column">
                  <span>قیمت</span>
                  <span>20000</span>
                  <span>10000</span>
                  <span>31000</span>
                  <span>9000</span>
                  <span>400000</span>
                </div>
                <div className="col-2 d-flex flex-column">
                  <span className='text-center'>حجم</span>
                  <span className='text-center'>1400</span>
                  <span className='text-center'>3200</span>
                  <span className='text-center'>1900</span>
                  <span className='text-center'>2240</span>
                  <span className='text-center'>4000</span>
                </div>
                <div className="col-2 d-flex flex-column">
                  <span className='text-center'>تعداد</span>
                  <span className='text-center'>20</span>
                  <span className='text-center'>1</span>
                  <span className='text-center'>3</span>
                  <span className='text-center'>9</span>
                  <span className='text-center'>40</span>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
