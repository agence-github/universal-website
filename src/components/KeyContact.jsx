import React from "react";

const KeyContact = () => {
  return (
    <div className="pb-6">
      <div className="text-[#C49E5F] lg:text-7xl text-4xl cinzel-font my-6 text-center">
        Key Contact
      </div>

      <div className="text-center">
        <h1 className="text-2xl lg:text-4xl cinzel-font mb-3">SIDDHARTHA GUPTA</h1>
        <h1 className="lg:text-xl mb-2">(Head - Sales & Marketing)</h1>

        {/* Email */}
        <h1 className="lg:text-xl mb-2">
          Email -{" "}
          <a href="mailto:gupta.s@udllcdxb.com" className="text-[#0493FC] hover:underline">
            gupta.s@udllcdxb.com
          </a>
        </h1>

        {/* Mobile Numbers */}
        <h1 className="lg:text-xl mb-2">
          Tel -{" "}
          <a href="tel:+971509400443" className="text-[#0493FC] hover:underline">
          +971-4-2321818 (UAE)
          </a>
        </h1>
        <h1 className="lg:text-xl mb-2">
          Mobile -{" "}
          <a href="tel:+919830346468" className="text-[#0493FC] hover:underline">
          +9171-50-9400443 (UAE)
          </a>
        </h1>
      </div>
    </div>
  );
};

export default KeyContact;
