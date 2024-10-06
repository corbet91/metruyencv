interface IChip {
    total : number
}

export const ChipNotification: React.FC<IChip>= (props : IChip) => {
    const {total} = props
     return (
        <div className="bg-red-700 inline-flex items-center justify-center w-6 h-6  text-xs font-semibold text-white rounded-full">
            {total ?? "0"}
        </div>
     )
}

export const BlackChip = () => {
    return (
        <span className="rounded-full w-1 h-1 bg-black "/>
    )
}