
type Props = {
    children: React.ReactNode
}

export default function GameArea({children}:Props) {
  return (
    <div className="relative w-80 h-80 border border-red-600">
        {children}
    </div>
  )
}
