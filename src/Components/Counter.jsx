import React from "react";
import CountUp from "react-countup";


const Counter = () => {
  return (
    // Main Container
    <div className="text-cwhite mb-10 md:py-10 lg:py-10">
      <div className="flex flex-col justify-center items-center gap-8 ">
        <div className="flex justify-center flex-col items-center gap-2">
          <h1 className=" lg:text-4xl md:text-2xl max-sm:text-xl max-sm:text-center ">
            Best event management and exploring service in the town
          </h1>

          <p className="md:text-sm max-sm:text-sm lg:text-base max-sm:text-center">
           "Our platform connects you with verified, skilled event planners and venues across various categories — all at your convenience."{" "}
          </p>
        </div>
        {/* w-40 h-50 */}

        {/* Countup Container */}
        <div className="lg:w-full">
          <div className=" lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 max-sm:grid max-sm:grid-cols-2 gap-6 max-sm:35 *:bg-cwhite *:text-corange ">
            {/* Card 1 */}
            <div className="card bg-base-100 shadow-sm  max-sm:w-full ">
              <div className="card-body">
               
                <h1 className="lg:text-4xl md:text-2xl max-sm:text-xl  font-bold text-[#0F0F0F]">
                <CountUp end={252} duration={10} />+
                </h1>
                <p className="text-corange">Total Special Guests</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-base-100 shadow-sm  max-sm:w-full">
              <div className="card-body">
              
                <h1 className="lg:text-4xl md:text-2xl max-sm:text-xl  font-bold text-[#0F0F0F]">
                  <CountUp end={867} duration={10} />+
                </h1>
                <p>Total Reviews</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-100 shadow-sm  max-sm:w-full">
              <div className="card-body">
                
                <h1 className="lg:text-4xl md:text-2xl max-sm:text-xl  font-bold text-[#0F0F0F] ">
                  <CountUp end={12000} duration={10} />+
                </h1>
                <p>Participants</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card bg-base-100 shadow-sm max-sm:w-full">
              <div className="card-body ">
                
                <h1 className="lg:text-4xl md:text-2xl max-sm:text-xl  font-bold text-[#0F0F0F]">
                  <CountUp end={500} duration={10} />+
                </h1>
                <p>Successful Events</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
