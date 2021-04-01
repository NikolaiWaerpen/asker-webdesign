import { useForm, ValidationError } from "@formspree/react";
import { MAIL_TO } from "../../../data/consts";
import { contactUsData } from "../../../data/contactUsData";

export default function ContactUs() {
  const [state, handleSubmit] = useForm("xjvjvbdb");
  if (state.succeeded) {
    return <p>Vi vil kontakte deg i løpet av kort tid!</p>;
  }

  return (
    <div className="mx-4 md:mx-36 lg:mx-14">
      <div className="space-y-4 mb-8">
        <div className="border-l-4 pl-4 border-blue-400 text-lg">
          <h2 className="font-extrabold">E-post:</h2>
          <h3 className="text-gray-600">
            <a href={MAIL_TO}>hello@waerpendevelopment.com</a>
          </h3>
        </div>
        <div className="border-l-4 pl-4 border-blue-400 text-lg">
          <h2 className="font-extrabold">Mobilnummer:</h2>
          <h3 className="text-gray-600">(+47) 452 93 539</h3>
        </div>
      </div>

      <div className="bg-white p-6 space-y-6 shadow-2xl rounded-md lg:mx-8 border border-gray-100 border-opacity-95">
        <div className="flex uppercase font-bold text-3xl lg:text-4xl">
          <h3 className="text-blue-400 font-normal">Kontakt&nbsp;</h3>
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
                    className="border border-gray-200 rounded-sm h-12 text-xs p-4"
                  />
                ) : (
                  <textarea
                    placeholder={placeholder}
                    id={name}
                    name={name}
                    className="border border-gray-200 rounded-sm h-48 resize-none text-xs p-4"
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
              className="w-32 h-10 text-white bg-gradient-to-l from-blue-400 to-blue-500 rounded-sm font-bold uppercase text-xs"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
