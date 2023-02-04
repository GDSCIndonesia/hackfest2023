import Countdown from "react-countdown"

export default function CountDown() {
  const renderer = ({ days, hours, minutes, seconds })
  return (
    <>
      <h1>Nico</h1>
      <Countdown date={new Date("2023-03-24")} renderer={renderer}>
        <span>
          <h1>{days}</h1>
          <div>{hours}</div>{minutes}:{seconds}
        </span>
      </Countdown>
    </>
  )
}
