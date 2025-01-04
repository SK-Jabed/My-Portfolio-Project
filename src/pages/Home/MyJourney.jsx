import React from 'react';

const MyJourney = () => {
    return (
      <div>
        <section
          id="about"
          className="relative bg-gradient-to-b from-purple-900 via-black to-purple-900 py-20 text-white"
        >
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
              My <span className="text-blue-400">Journey</span>
            </h2>

            {/* Timeline */}
            <div className="relative border-l border-blue-400">
              <div className="absolute left-0 transform -translate-x-1/2">
                <div className="bg-blue-400 w-6 h-6 rounded-full"></div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold">Started as a Learner</h3>
                <p className="text-gray-300 text-lg">
                  Began my journey with HTML, CSS, and JavaScript, mastering the
                  basics of web development.
                </p>
              </div>

              <div className="absolute left-0 mt-12 transform -translate-x-1/2">
                <div className="bg-blue-400 w-6 h-6 rounded-full"></div>
              </div>
              <div className="ml-6 mt-12">
                <h3 className="text-2xl font-bold">Explored New Horizons</h3>
                <p className="text-gray-300 text-lg">
                  Learned React, Tailwind CSS, and Back-End technologies to
                  expand my skills.
                </p>
              </div>

              <div className="absolute left-0 mt-12 transform -translate-x-1/2">
                <div className="bg-blue-400 w-6 h-6 rounded-full"></div>
              </div>
              <div className="ml-6 mt-12">
                <h3 className="text-2xl font-bold">Professional Developer</h3>
                <p className="text-gray-300 text-lg">
                  Worked on real-world projects, collaborating with teams to
                  deliver impactful solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default MyJourney;