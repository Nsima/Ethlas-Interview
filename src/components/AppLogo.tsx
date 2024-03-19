type Props = {title: string}

export default function AppLogo({title}:Props) {
  return <h2 className="tracking-wide text-lg font-semibold"> {title} </h2>
}
