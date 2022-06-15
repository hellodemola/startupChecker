import EachItem from "./EachItem";

const PhaseContent = ({goals, id}) => (
  <div className="phase-content">
  {goals.map(each => (
    <div className="phase-contain" key={each?.id}>
      <EachItem
        goal={each}
        id={id} 
      />
    </div>
  ))}
  </div>
)

export default PhaseContent;