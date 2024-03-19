import Container from '@/components/Container'
import React from 'react'

export default function TransactionRecordSection() {
    return (
        <section className="shadow-lg shadow-slate-700 bg-slate-50 text-gray-900 flex flex-col rounded-t-3xl h-full -mt-12 md:mt-0 grow md:static md:rounded-2xl md:mx-6 md:h-96">
            <h2 className="text-center my-2 text-lg font-semibold tracking-wide"> Transaction History</h2>
            <Container className="my-2 overflow-auto">
                No Transaction Record Yet
            </Container>
        </section>
    )
}
