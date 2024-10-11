interface IChip {
    total?: number
    title?: string
}

export const ChipNotification: React.FC<IChip> = (props: IChip) => {
    const { total } = props
    return (
        <div className="bg-red-700 inline-flex items-center justify-center w-6 h-6  text-xs font-semibold text-white rounded-full">
            {total ?? "0"}
        </div>
    )
}

export const BlackChip = () => {
    return (
        <span className="rounded-full w-1 h-1 bg-black " />
    )
}

export const PopularChip: React.FC<IChip> = (props: IChip) => {
    const { title } = props
    return (
        <div className='rounded-full text-amber px-2.5 py-1 text-xs font-semibold leading-5 bg-light-gray'>
            {title}
        </div>
    )
}