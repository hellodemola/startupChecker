import PhaseContent from "./PhaseContent";
import PhaseFooter from "./PhaseFooter";
import PhaseHeader from "./Phaseheader";
import PhaseWrapper from "./PhaseWrapper";

const PhaseComp = ({ data }) => (
  <PhaseWrapper>
    <PhaseHeader data={data} />
    <PhaseContent goals={data?.todo} id={data?.id} />
    <PhaseFooter goals={data} />
  </PhaseWrapper>
)

export default PhaseComp;