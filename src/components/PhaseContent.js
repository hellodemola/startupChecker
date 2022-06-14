import EachItem from "./EachItem";

const PhaseContent = ({goals}) => (
  <div className="phase-content">
  {goals.map(each => (
    <div className="phase-contain">
        <EachItem goal={each} />
    </div>
  ))}
  </div>
)

export default PhaseContent;