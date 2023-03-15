import { FaReact } from "react-icons/fa";
import { useGlobalContext } from "../utils/Context";

export const Navbar = () => {
  const { switchOn, checkedChange } = useGlobalContext();

  return (
    <div className={switchOn ? "bg-black border-bottom border-bottom border-secondary d-flex justify-content-center" : "bg-primary-subtle border-bottom border-info d-flex justify-content-center"}>
      <div className="col-10">
        <header className="d-flex flex-wrap justify-content-center py-3 ">
          <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span className={switchOn ? "fs-4 text-light" : "fs-3"}><FaReact /> Simple header</span>
          </div>
          <ul className="nav nav-pills py-3">
            <li className="nav-item">
              <div className="toggle_switch">
                <input type="checkbox" className="switch_3" checked={switchOn} onChange={checkedChange}/>
                <svg className="checkbox" xmlns="http://www.w3.org/2000/svg" style={{ "isolation": "isolate" }} viewBox="0 0 168 80">
                  <path className="outer-ring" d="M41.534 9h88.932c17.51 0 31.724 13.658 31.724 30.482 0 16.823-14.215 30.48-31.724 30.48H41.534c-17.51 0-31.724-13.657-31.724-30.48C9.81 22.658 24.025 9 41.534 9z" fill="none" stroke="#233043" strokeWidth="3" strokeLinecap="square" strokeMiterlimit="3" />
                  <path className="is_checked" d="M17 39.482c0-12.694 10.306-23 23-23s23 10.306 23 23-10.306 23-23 23-23-10.306-23-23z" />
                  <path className="is_unchecked" d="M132.77 22.348c7.705 10.695 5.286 25.617-5.417 33.327-2.567 1.85-5.38 3.116-8.288 3.812 7.977 5.03 18.54 5.024 26.668-.83 10.695-7.706 13.122-22.634 5.418-33.33-5.855-8.127-15.88-11.474-25.04-9.23 2.538 1.582 4.806 3.676 6.66 6.25z" />
                </svg>
              </div>
            </li>
          </ul>
        </header>
      </div>
    </div>
  )
}