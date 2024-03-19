import Container from './Container'

type Props = { walletAddress: string,  balance: string}

export default function AccountDetailSection({balance, walletAddress}: Props) {
    return <Container className="flex flex-col">
    <small> {walletAddress} </small>
    <p className="font-bold text-xl"> {balance} </p>
  </Container>
}
