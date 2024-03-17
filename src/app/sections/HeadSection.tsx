import AccountButtonContainer from '@/components/AccountButtonContainer'
import AccountDetailSection from '@/components/AccountDetailSection'
import AppHeader from '@/components/AppHeader'
import InputField from '@/components/InputField'

export default function HeadSection() {
    return (
        <section className="shadow-md md:basis-1/2 lg:basis-1/3 bg-[#111427] text-slate-200 h-fit md:rounded-lg shrink-0">
            <AppHeader />
            <AccountDetailSection walletAddress="1ABCdEfGHiJKlmnoPqrStuVwXyz1234567890" balance="0.00" />
        </section>
    )
}
