import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCTA = ({ children, ...props }: any) => {
  return (
    <div {...props} className="inline-block arrow-box text-lg">
      <button className="arrow-button block text-lg xs:text-lg sm:text-lg border-solid border-[1px] rounded-full px-8 py-2">
        {children}
        <FontAwesomeIcon
          className="arrow-icon ml-2 w-3 inline-block"
          icon={faArrowRight}
        />
      </button>
    </div>
  );
};

export default ProjectCTA;
