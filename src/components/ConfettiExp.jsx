import useWindowSize from "react-use-window-size"
import Confetti from "react-confetti"

export default function ConfettiExp() {
    const { width, height } = useWindowSize();

  return (
    <div className='fixed left-0 top-0 w-full h-screen z-[9001] pointer-events-none'>
        <Confetti
        width={width}
        height={height}
            gravity={0.02}
            colors={['#42A5F5','#EF5350', '#FFCA28', '#66BB6A', '#90CAF9', '#EF9A9A', '#FFE082', '#A5D6A7']}
        />
    </div>
  )
}
