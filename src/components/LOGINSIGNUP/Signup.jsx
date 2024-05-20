import Logo from "./../../assets/logo/cpccu.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";

export default function Signup() {
  const labelCSS = `uppercase font-semibold text-sm text-gray-800 font-custom`;
  const inputCSS = `outline-none border-b border-gray-300 py-2 focus:border-black`;
  const btn = `uppercase font-semibold h-12 px-1 rounded-full w-full text-sm`;

  return (
    <>
    <Link to="/">
        <button className="bg-header absolute z-50 left-[2rem] mdd:left-[6rem] mt-[5rem] flex items-center justify-center h-10 rounded-lg lg:w-[10rem] gap-3 px-3 py-2 hover:bg-headerHover trans">
          <FontAwesomeIcon className=" text-white font-extrabold text-2xl" icon={faArrowLeftLong} />
          <h1 className="font-bold text-white hidden md:block">Home Page</h1>
        </button>
      </Link>
    
    <div className={`bg-white h-svh padding flex px-3`}>
      

      <section
        className="w-full items-center justify-center hidden lg:flex relative"
        style={{
          backgroundImage: `url(https://i.ibb.co/3pzb3VW/R.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-3xl font-custom text-gray-500 absolute top-[50%] -right-20 -rotate-90">
          Sign up to Join CPCCU
        </h1>
      </section>
      <main className="mx-auto lg:min-w-[30rem] lg:w-[60rem] lg:max-w-[70rem] flex flex-col gap-4 items-start justify-center padding">
        {/* logo section start */}
        <section className="flex flex-col self-center items-center justify-center gap-2">
          <img className="h-24" src={Logo} alt="Logo" />

          <h2 className="text-2xl font-custom">Welcome to</h2>
          <h1 className="text-2xl text-center font-semibold text-gray-600">
            Competitive Programming Camp City University
          </h1>
        </section>
        {/* logo section end */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-6 w-full"
        >
          {/* input username start */}
          <div className="flex flex-col">
            <label className={labelCSS} htmlFor="userName">
              Email
            </label>
            <input className={inputCSS} type="email" id="userName" />
          </div>
          {/* input username end */}

          {/* uni info */}
          {/* full name */}
          <div className="flex flex-col">
            <label className={labelCSS} htmlFor="fullName">
              Full Name
            </label>
            <input className={inputCSS} type="text" id="fullName" />
          </div>

          {/* uni id */}
          <div className="flex flex-col">
            <label className={labelCSS} htmlFor="uniID">
              City University{" "}
              <span className="text-gray-450 font-extrabold text-[18px]">
                ID
              </span>
            </label>
            <input className={inputCSS} type="number" id="uniID" />
          </div>

          {/* uni batch*/}
          <div className="flex flex-col">
            <label className={labelCSS} htmlFor="uniBatch">
              City University{" "}
              <span className="text-gray-450 font-extrabold text-[18px]">
                Batch No.
              </span>
            </label>
            <input className={inputCSS} type="number" id="uniBatch" />
          </div>
          {/* input password start */}
          <div className="flex flex-col">
            <label className={labelCSS} htmlFor="passName">
              Password
            </label>
            <input className={inputCSS} type="password" id="passName" />
          </div>
          {/* input password end */}

          <section className="flex items-center justify-center gap-5 mt-5">
            <button
              className={`${btn} bg-gradient-to-r from-headerHover to-fuchsia-700 text-white hover:ring trans`}
            >
              <Link to="/login">
                <div>

                  login
                </div>
              </Link>
            </button>
            <button
              className={`${btn} bg-gradient-to-r from-headerHover to-fuchsia-700 text-header hover:ring trans`}
            >
              <div className="bg-white rounded-full h-10 flex items-center justify-center">
                create account
              </div>
            </button>
          </section>

          <p className="text-center font-semibold mt-6 hover:underline text-header">
            Forgot your login details?
          </p>
        </form>
      </main>

    </div>
    </>
  );
}


