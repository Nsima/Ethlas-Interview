import Container from './Container'
import ActionButton from './ActionButton'

export default function AccountButtonContainer() {
    return (
        <Container className="flex justify-between gap-4 pb-20 md:pb-2">
            <ActionButton variant="deposit" />
            <ActionButton variant="withdraw" />
        </Container>
    )
}
