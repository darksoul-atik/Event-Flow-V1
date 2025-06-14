import React from "react";
import { Link, NavLink } from "react-router";
import { SiEventstore } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-corange text-cdark p-10">
      <aside>
        <div className="flex items-center">
          <SiEventstore size={60} />
        </div>

        <a className="btn btn-ghost hover:border-0 text-xl hover:bg-transparent hover:text-inherit hover:shadow-none transition-none">
          <span className="text-cdark max-sm:text-lg">Event</span>
          <span className="text-cwhite max-sm:text-lg -ml-1">FLOW</span>
        </a>

        <div className="footer *:hover:text-cwhite flex justify-between gap-2">
          {/* Terms and Conditions */}
          <div>
            <p
              className="text-cdark hover:text-cwhite   cursor-pointer "
              onClick={() => document.getElementById("terms_modal").showModal()}
            >
              Terms and Conditions
            </p>
            <dialog id="terms_modal" className="modal">
              <div className="modal-box bg-cwhite text-cdark border border-corange">
                <h3 className="font-bold text-xl text-corange">
                  Terms and Conditions
                </h3>
                <p className="py-4 text-sm leading-relaxed">
                  By using our event services, you agree to follow all
                  applicable rules and guidelines. Accurate information must be
                  provided during registration and booking. Event organizers
                  reserve the right to make changes or cancellations. Tickets
                  may be non-refundable unless explicitly stated. Any misuse of
                  our platform including spamming or fraudulent activities may
                  result in a ban. We are not liable for third-party event
                  issues. Continued use means acceptance of updates to these
                  terms. Please review them regularly.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn bg-corange text-cwhite hover:bg-opacity-80 rounded">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>

          {/* Privacy Policy */}
          <div>
            <p
              className="text-cdark hover:text-cwhite  cursor-pointer "
              onClick={() =>
                document.getElementById("privacy_modal").showModal()
              }
            >
              Privacy Policy
            </p>
            <dialog id="privacy_modal" className="modal">
              <div className="modal-box bg-cwhite text-cdark border border-corange">
                <h3 className="font-bold text-xl text-corange">
                  Privacy Policy
                </h3>
                <p className="py-4 text-sm leading-relaxed">
                  We value your privacy. Information like your name, email, and
                  preferences are collected to improve your experience. Your
                  data is securely stored and never sold. We may send relevant
                  updates or offers, which you can opt out of. Third-party
                  access is restricted unless necessary for services. We use
                  encryption and secure systems for transactions. By continuing,
                  you consent to this policy. Contact us anytime to update or
                  delete your data.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn bg-corange text-cwhite hover:bg-opacity-80 rounded">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid *:hover:text-cwhite cursor-pointer grid-flow-col gap-4">
          <a href="https://x.com/jhankar_mahbub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="https://www.youtube.com/user/jhankarmahbub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="https://www.facebook.com/atik.ananto/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
