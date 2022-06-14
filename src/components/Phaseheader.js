const PhaseHeader = ({data}) => (
  <div className="phase-header">
        <div>
          <h2>{data?.id}. {data?.name}</h2>
        </div>
        <div className="phase-status">
          <div className="phase-cirle" />
          <p>{data?.status}</p>
        </div>
      </div>
)

export default PhaseHeader