import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white min-h-[550px] p-[20px] flex flex-col justify-between items-center">
      <div className="cols-container flex w-full justify-between pt-8 flex-wrap gap-4">
        <div className="col w-[380px] flex flex-col">
          <h5 className=" font-bold text-[30px]">Hotelorer</h5>
          <p className="w-[320px] text-justify font-light pt-6">
            Hotelorer is a web application designed to provide users with a
            seamless and user-friendly experience when searching for and booking
            vacation rentals and experiences
          </p>
        </div>
        <div className="col flex flex-col">
          <h5 className=" font-bold text-[30px]">Explorer</h5>
          <a href="#" className=" pt-6 font-light">
            Hotels in Bekasi
          </a>
          <a href="#" className=" pt-6 font-light">
            Hotels in Jakarta
          </a>
          <a href="#" className=" pt-6 font-light">
            Hotels in Jonggol
          </a>
          <a href="#" className=" pt-6 font-light">
            Villa in Bekasi
          </a>
        </div>
        <div className="col flex flex-col">
          <h5 className=" font-bold text-[30px]">Company</h5>
          <a href="" className=" pt-6 font-light">
            About us
          </a>
          <a href="" className=" pt-6 font-light">
            Blog
          </a>
          <a href="" className=" pt-6 font-light">
            Careers
          </a>
          <a href="" className=" pt-6 font-light">
            Customers
          </a>
          <a href="" className=" pt-6 font-light">
            Brand
          </a>
        </div>
        <div className="col flex flex-col">
          <h5 className=" font-bold text-[30px]">Help</h5>
          <a href="" className=" pt-6 font-light">
            Support
          </a>
          <a href="" className=" pt-6 font-light">
            Cancel your booking
          </a>
          <a href="" className=" pt-6 font-light">
            Refund Process
          </a>
        </div>
      </div>
      <br />
      <div className="line w-full bg-[#ffffff3c] h-[1px]"></div>
      <p>
        * Some hotels require you to cancel more than 24 hours before check-in.
        Details on website.
      </p>
    </div>
  );
}

export default Footer;
