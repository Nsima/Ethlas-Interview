import clsx from "clsx"

type Props = { variant: 'deposit' | 'withdraw' }

export default function ActionButton({ variant }: Props) {

    return <button type="submit" name={variant} className={clsx("p-2 basis-1/2 font-semibold rounded-2xl hover:scale-95 transition", { "bg-amber-600  hover:brightness-110": variant === 'deposit', 'ring-1 ring-slate-50 hover:bg-slate-50 hover:text-slate-800': variant === 'withdraw' })}>
        {variant === 'deposit' ? 'Deposit' : 'Withdraw'}
    </button>

}
