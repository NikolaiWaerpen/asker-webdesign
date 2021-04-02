import { useForm, ValidationError } from "@formspree/react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MAIL_TO } from "../../../data/consts";
import { contactUsData } from "./contactUsData";
import { EmailSVG } from "./EmailSVG";

export default function ContactUs() {
  const [state, handleSubmit] = useForm("xjvjvbdb");
  if (state.succeeded) {
    return (
      <div className="mx-4 md:mx-8 md:mb-20 md:flex flex-row-reverse justify-center space-y-8 md:space-y-0">
        <div className="md:ml-14 space-y-8">
          <div className="flex justify-center">
            <div className="w-11/12 md:w-96">
              <EmailSVG />
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 pl-4 border-green-400 text-lg">
              <h2 className="font-extrabold">E-post:</h2>
              <h3 className="text-gray-600">
                <a href={MAIL_TO}>hello@waerpendevelopment.com</a>
              </h3>
            </div>
            <div className="border-l-4 pl-4 border-green-400 text-lg">
              <h2 className="font-extrabold">Mobilnummer:</h2>
              <h3 className="text-gray-600">(+47) 452 93 539</h3>
            </div>
          </div>
        </div>
        <div
          id="contactUs"
          className="relative bg-white p-6 space-y-6 shadow-2xl rounded-md border border-gray-100 border-opacity-95 md:w-3/5 lg:1/2 xl:w-1/3"
        >
          <div className="absolute left-1/2 top-1/3">
            <div className="relative -left-1/2 -top-1/3">
              <div className="flex flex-col ">
                <div className="flex justify-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 text-9xl"
                  />
                </div>
                <div className="bg-white border-l-4 py-2 px-2 border-green-500 rounded-sm text-center text-md">
                  <span>
                    Vi vil&nbsp;
                    <span className="text-green-600">kontakte deg&nbsp;</span>
                    innen en dag
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex uppercase font-bold text-3xl lg:text-4xl">
            <h3 className="text-gray-400 font-normal">Kontakt&nbsp;</h3>
            <h3 className="text-gray-700">Oss</h3>
          </div>
          <form className="space-y-4">
            {contactUsData.map(({ name, placeholder, type }) => {
              return (
                <div key={name} className="flex flex-col">
                  {type !== "textarea" ? (
                    <input
                      placeholder={placeholder}
                      id={name}
                      type={type}
                      name={name}
                      disabled={true}
                      className="border border-gray-200 rounded-sm h-12 text-md p-4"
                    />
                  ) : (
                    <textarea
                      placeholder={placeholder}
                      id={name}
                      name={name}
                      disabled={true}
                      className="border border-gray-200 rounded-sm h-48 resize-none text-md p-4"
                    />
                  )}
                </div>
              );
            })}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={true}
                className="w-32 h-10 text-white bg-gradient-to-l from-gray-200 to-gray-300 rounded-sm font-bold uppercase text-xs cursor-not-allowed"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-4 md:mx-8 md:mb-20 md:flex flex-row-reverse justify-center space-y-8 md:space-y-0">
      <div className="md:ml-14 space-y-8">
        <div className="flex justify-center">
          <div className="w-11/12 md:w-96">
            <EmailSVG />
          </div>
        </div>

        <div className="space-y-4">
          <div className="border-l-4 pl-4 border-green-400 text-lg">
            <h2 className="font-extrabold">E-post:</h2>
            <h3 className="text-gray-600">
              <a href={MAIL_TO}>hello@waerpendevelopment.com</a>
            </h3>
          </div>
          <div className="border-l-4 pl-4 border-green-400 text-lg">
            <h2 className="font-extrabold">Mobilnummer:</h2>
            <h3 className="text-gray-600">(+47) 452 93 539</h3>
          </div>
        </div>
      </div>

      <div
        id="contactUs"
        className="bg-white p-6 space-y-6 shadow-2xl rounded-md border border-gray-100 border-opacity-95 md:w-3/5 lg:1/2 xl:w-1/3"
      >
        <div className="flex uppercase font-bold text-3xl lg:text-4xl">
          <h3 className="text-green-400 font-normal">Kontakt&nbsp;</h3>
          <h3>Oss</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {contactUsData.map(({ name, placeholder, type }) => {
            return (
              <div key={name} className="flex flex-col">
                {type !== "textarea" ? (
                  <input
                    placeholder={placeholder}
                    id={name}
                    type={type}
                    name={name}
                    className="border border-gray-200 rounded-sm h-12 text-md p-4"
                  />
                ) : (
                  <textarea
                    placeholder={placeholder}
                    id={name}
                    name={name}
                    className="border border-gray-200 rounded-sm h-48 resize-none text-md p-4"
                  />
                )}
                <ValidationError
                  prefix={name}
                  field={name}
                  errors={state.errors}
                />
              </div>
            );
          })}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={state.submitting}
              className={`${
                state.submitting
                  ? "bg-gradient-to-l from-gray-200 to-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-l from-green-400 to-green-500"
              } w-32 h-10 text-white rounded-sm font-bold uppercase text-xs`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
