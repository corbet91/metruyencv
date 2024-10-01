import { Button, ButtonProps } from "@/components/ui/button"

interface IPrimaryButton extends ButtonProps  {
    title : string
}

export const PrimaryButton : React.FC<IPrimaryButton> = ({title,...props}) => {
    return (
        <Button className="bg-amber rounded-xl w-1/2 cursor-pointer text-white text-xl py-2 m-auto" {...props}>
            {title}
        </Button>
    )
}