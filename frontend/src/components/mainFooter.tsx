"use client"

const FooterBottomSection = () => {
  return (
    <div className="bg-white text-gray-600 py-12">
      <div className="max-w-[1350px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* About Column */}
          <div className="lg:col-span-3">
            <h4 className="font-medium text-[22px] text-[#787373] mb-4">About Covers and All</h4>
            <p className="text-[15px] text-[#7D7A7A] leading-relaxed">
              We provide high quality custom-made cover solutions with a wide range of UV-resistant fabrics for outdoor
              use. We offer water resistant covers in a variety of styles for year-round protection for virtually any
              item.
            </p>
          </div>

          {/* Company Information - takes more space */}
          <div className="lg:col-span-6">
            <h4 className="font-medium text-[22px] text-[#7B7A7A] mb-4">Company Information</h4>
            <div className="grid grid-cols-3 gap-4">
              <ul className="text-sm text-[#7D7878] space-y-1 list-disc list-inside">
                <li>Home</li>
                <li>About Us</li>
                <li>Sitemap</li>
                <li>FAQs</li>
                <li>Special Offers</li>
                <li>Our Blog</li>
                <li>How To Measure</li>
              </ul>
              <ul className="text-sm text-[#7D7878] space-y-1 list-disc list-inside">
                <li>Our Fabrics</li>
                <li>Commercial Sales</li>
                <li>Customer Reviews</li>
                <li>Return Policy</li>
                <li>So far we&#39;ve covered</li>
                <li>Gift Cards</li>
                <li>COVID-19 Measures</li>
              </ul>
              <ul className="text-sm text-[#7D7878] space-y-1 list-disc list-inside">
                <li>Shipping Policy</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Order Tracking</li>
                <li>International Shipping</li>
                <li>Affiliate & Partnership</li>
                <li>Program</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3 space-y-6 mt-10">
            <div className="flex gap-3 items-start">
              <div className="w-[20px] h-[20px] mt-1 rounded flex items-center justify-center">
                <img src="/images/Place Marker.png" />
              </div>
              <div>
                <p className="font-semibold text-[#494040] text-sm mb-1">Location:</p>
                <p className="text-sm text-[#3D14C3]">Suwanee, GA 30024, USA</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-[20px] h-[20px] mt-1 rounded flex items-center justify-center">
                <img src="/images/Phone.png" />
              </div>
              <div>
                <p className="font-semibold text-[#494040] text-sm mb-1">Reach us by Phone:</p>
                <p className="text-sm text-[#3D14C3]">9999999999</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-[20px] h-[20px] mt-1 rounded flex items-center justify-center">
                <img src="/images/Envelope.png" />
              </div>
              <div>
                <p className="font-semibold text-[#494040] text-sm mb-1">Email Us:</p>
                <p className="text-sm text-[#3D14C3]">dobby@dobby.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBottomSection
