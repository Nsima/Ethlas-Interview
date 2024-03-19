import Container from "./Container";
import AppLogo from "./AppLogo";
import MetaMaskButton from "./MetaMaskButton";

export default function AppHeader() {
    return <Container className="flex justify-between items-center mb-10">
        <AppLogo title="Wallet Top Up"/>
        <MetaMaskButton/>
    </Container>
}
