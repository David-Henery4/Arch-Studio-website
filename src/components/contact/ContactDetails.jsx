import contactDetails from "../../miscData/contactDetails"
import {ArrowIcon} from "../../assets/icons"

const ContactDetails = ({ setCenterCoords, setActiveZoomLevel }) => {
  //
  return (
    <section className="w-full col-start-2 col-end-12 flex flex-col justify-start items-start gap-10 py-16 smTab:py-44 lap:flex-row desk:gap-36 desk:py-[278px]">
      <h3 className="font-bold text-lrgHeadingMob leading-lrgHeadingMob tracking-lrgMedHeadingMob max-w-[300px] smTab:text-medHeading smTab:leading-medHeading smTab:tracking-lrgMedHeading">
        Contact Details
      </h3>
      <div className="w-full flex flex-col gap-10 justify-center items-start lap:flex-row lap:h-full lap:justify-start desk:gap-24">
        {contactDetails.map((contact) => {
          return (
            <div
              key={contact?.id}
              className="w-full flex flex-col gap-11 justify-center items-start smTab:flex-row smTab:justify-between smTab:items-end lap:flex-col lap:items-start lap:h-full lap:w-auto"
            >
              <div className="grid gap-4 text-bodyText text-darkGrey smTab:flex-1">
                <h4 className="font-bold leading-9">{contact?.name}</h4>
                <div className="font-medium leading-bodyText">
                  <p>Mail: {contact?.mail}</p>
                  <p>Address: {contact?.address}</p>
                  <p>Phone: {contact?.phone}</p>
                </div>
              </div>
              <a
                href="#map-section"
                className="inline-flex justify-center items-center gap-6 text-bodyText leading-bodyText font-bold hover:cursor-pointer smTab:flex-1 smTab:justify-end lap:items-end"
                onClick={() => {
                  setCenterCoords(contact?.coords);
                  setActiveZoomLevel(13);
                  // handleSetView(contact?.coords)
                }}
              >
                View on Map{" "}
                <span>
                  <ArrowIcon className="stroke-veryDarkBlue" />
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactDetails