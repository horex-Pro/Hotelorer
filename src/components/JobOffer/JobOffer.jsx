import React from "react";
import Button from "../Button/Button";

function JobOffer() {
  return (
    <div className="w-full bg-blue h-[240px] flex justify-evenly items-center text-white pl-[5%] pr-[20px] overflow-hidden max-lg:flex-col max-lg:h-auto max-lg:p-9 max-lg:justify-between max-lg:items-center max-lg:gap-5">
      <svg
        width="286"
        height="245"
        viewBox="0 0 286 245"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M80.3087 0C78.6549 2.354 77.1022 4.84619 75.6504 7.47705C67.9426 21.3848 65.039 35.9495 66.9397 51.1709C69.979 76.9795 85.2493 100.899 112.75 122.929L81.5429 176.982C71.1716 164.852 63.8111 149.157 59.4616 129.899C59.2111 127.638 58.4158 125.471 57.1437 123.584C55.8717 121.697 54.1609 120.147 52.1582 119.067C49.8336 117.725 44.1241 117.093 44.1241 117.093L44.0377 117.086L12.6439 117.301C7.29496 117.309 3.55961 119.273 1.42808 123.094C0.0448061 125.618 -0.351129 128.566 0.317175 131.366C1.50718 143.407 4.98282 156.294 10.7441 170.029C19.9648 192.376 34.0943 211.129 52.986 226.444L42.2728 245H209.455C215.722 239.466 221.235 232.767 225.995 224.902C235.287 209.535 238.593 193.837 235.911 177.809C231.384 152.077 214.962 128.152 186.646 106.032L211.644 62.7356C215.754 68.7148 219.02 75.2329 221.347 82.1052C222.886 86.3796 225.904 89.9622 229.855 92.2043C233.142 94.1233 239.015 94.4441 239.015 94.4441L239.117 94.4517L274.219 93.1619C279.02 92.9678 282.464 91.1631 284.514 87.748C286.161 85.0042 286.44 81.9263 285.352 78.5142C279.838 50.9497 265.684 27.6509 242.889 8.61792L247.864 0H80.3087ZM163.539 189.023C169.771 178.413 167.663 167.574 157.513 156.493L130.127 203.926C132.307 204.164 134.499 204.256 136.69 204.201C148.794 203.931 157.743 198.871 163.539 189.023ZM162.053 33.457C150.574 32.5562 142.645 36.0203 138.218 43.7827C132.971 53.052 134.25 62.5144 142.057 72.1697L164.217 33.7861L162.053 33.457Z"
          fill="white"
        />
      </svg>
      <div className="text-box max-lg:flex flex-col items-center">
        <h4 className=" font-medium text-[30px] max-lg:text-center">
          If you can save time and money, why not?
        </h4>
        <p>Come on, register and we will send the best promo for you</p>
      </div>
      <div className="email-box w-[290px] h-[60px] bg-white flex items-center justify-between p-4 rounded-[18px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.30225 6.5004L10.0825 10.63C11.2295 11.4496 12.7705 11.4496 13.9175 10.63L19.6977 6.5004M2.88539 15.1513C2.37154 13.0819 2.37154 10.9181 2.88539 8.84875C3.55805 6.13984 5.70602 4.04534 8.43056 3.44162L8.88443 3.34105C10.9366 2.88632 13.0634 2.88632 15.1156 3.34105L15.5694 3.44162C18.294 4.04534 20.442 6.13984 21.1146 8.84876C21.6285 10.9182 21.6285 13.0819 21.1146 15.1512C20.442 17.8602 18.294 19.9547 15.5694 20.5584L15.1156 20.659C13.0634 21.1137 10.9366 21.1137 8.88443 20.659L8.43055 20.5584C5.70601 19.9547 3.55805 17.8602 2.88539 15.1513Z"
            stroke="#128DD3"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        <input
          type="text"
          placeholder="Email address"
          className="w-[85%] placeholder-blue font-light focus:border-none outline-none text-blue"
        />
      </div>
      <Button text="Sign up" bgColor="black" color="white" />
    </div>
  );
}

export default JobOffer;
