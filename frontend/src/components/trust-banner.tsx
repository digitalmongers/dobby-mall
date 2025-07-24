import React from 'react';

export default function TrustBanner() {
  const features = [
    {
      icon: () => <img src="/images/Windows 10 Personalization.png" alt="Custom Cover" className="w-6 h-6 mt-0" />,
      title: "Custom Cover",
    },
    {
      icon:  () => <img src="/images/Countdown.png" alt="Custom Cover" className="w-6 h-6" />,
      title: "24 x 7 Support"
    },
    {
      icon: () => <img src="/images/In Transit.png" alt="Custom Cover" className="w-6 h-6" />,
      title: "Fast Delivery",
    },
    {
      icon: () => <img src="/images/Management.png" alt="Custom Cover" className="w-6 h-6" />,
      title: "1 Million+ Customers",
    },
  ]

  return (
    <div className="w-full bg-[#E0F6F5] py-5 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Rating Section */}
          <div className="flex items-center gap-4">
            <img src="/images/good-feedback.png" alt="Feedback" className="w-15 h-15 lg:w-58px lg:h-58px" />
            <div className="flex items-center gap-2">
              <div>
                <div className="flex items-center gap-2 font-bold">
                  <span className="text-3xl font-bold " style={{ color: '#121111' }}>4.8</span>
                  <div className="flex gap-1">
                    <img src="/images/Group 14.png" alt="Star" />
                  </div>
                </div>
                <p className="text-sm font-bold" style={{ color: '#1B1B1B' }}>
                Overall Satisfaction Rating
                </p>

              </div>
            </div>
          </div>

          {/*Line Divider */}
          <div className='hidden lg:block w-70px bg-gray-500 h-16 mx-4'>
            <img src="/images/Line 5.png" alt="Divider" className='w-full h-full'/>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-20px lg:gap-20px font-bold ">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg text-bold flex items-center justify-center max-w-6xl mx-auto">
                    {typeof IconComponent === "function" ? (
                      IconComponent()
                    ) : (
                      IconComponent
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-0">{feature.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
