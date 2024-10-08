import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { AmberOutLineButton } from "../button"
import { ReactNode } from "react"

interface ICard {
    children: ReactNode
}

export const UpgradeUserCard: React.FC<ICard> = (props) => {
    const {
        children
    } = props
    return (
        <Card className="rounded-3xl border border-gray-200 xl:p-10 lg:mt-8 lg:rounded-r-none max-w-md w-full">
            <CardContent className='pt-6'>
                {children}
            </CardContent>
            <CardFooter>
                <AmberOutLineButton className='hover:bg-amber hover:text-white w-full h-10' childreen={<span className='text-sm font-extrabold'>NÂNG CẤP 30 NGÀY</span>} />
            </CardFooter>
        </Card>
    )
}