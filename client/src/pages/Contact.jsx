import React from "react";
import { TbDirectionArrows } from "react-icons/tb";
import { SlScreenSmartphone } from "react-icons/sl";
import { PiTelegramLogo } from "react-icons/pi";

function Contact() {
  return (
    <>
      <div>
        <h2
          className="text-3xl text-center font-bold mb-3"
          style={{ color: "#8CA141" }}
        >
          Get In Touch
        </h2>
        <div className="flex justify-center items-center gap-6">
          <div
            className="p-6 rounded-lg w-1/4"
            style={{ backgroundColor: "#DAE3B3" }}
          >
            <h3 className="text-xl" style={{ color: "#8CA141" }}>
              Connect With Us
            </h3>
            <div className="flex justify-center flex-col my-2">
              <div className="flex pb-3">
                <TbDirectionArrows size={16} />
                <p className="text-sm ml-1">
                  Location: City, Country <br />
                  Building 00 <br />
                  Street 000
                </p>
              </div>

              <div className="flex items-center pb-3 ">
                <SlScreenSmartphone size={16} />
                <p className="text-sm ml-1">Call Us : 00000 00000</p>
              </div>
              <div className="flex items-center">
                <PiTelegramLogo size={16} />
                <p className="text-sm ml-1">Email us : Dummymail.com</p>
              </div>
            </div>
            <h3 className="text-xl my-2" style={{ color: "#8CA141" }}>
              Working Hours
            </h3>
            <p>8.30 am - 3.30 pm</p>
            <p>Sunday were closed</p>
          </div>

          <div className="w-1/2">
            <form action="" className="">
              <div className="mb-6 flex items-center gap-2">
                <input
                  className="rounded-lg w-1/2 p-3"
                  style={{ backgroundColor: "#DAE3B3" }}
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  className="rounded-lg w-1/2 p-3"
                  style={{ backgroundColor: "#DAE3B3" }}
                  type="text"
                  placeholder="Email Address"
                />
              </div>

              <div className="flex gap-2">
                <input
                  className="rounded-lg w-1/2 p-3"
                  style={{ backgroundColor: "#DAE3B3" }}
                  type="number"
                  placeholder="Phone Number"
                />
                <input
                  className="rounded-lg w-1/2 p-3"
                  style={{ backgroundColor: "#DAE3B3" }}
                  type="text"
                  placeholder="Subject"
                />
              </div>

              <textarea
                className="w-full rounded-lg mt-6 p-3"
                style={{ backgroundColor: "#DAE3B3" }}
                placeholder="write Message"
                name=""
                id=""
                cols="30"
                rows="3"
              ></textarea>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="rounded-full py-2 mt-2 px-6 text-white text-center"
                  style={{ backgroundColor: "#8CA141" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
