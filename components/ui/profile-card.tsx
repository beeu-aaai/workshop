import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import Image from "next/image";

type ProfileCardProps = {
    imageUrl: string
    name: string
    title: string
    email: string
}

export default function ProfileCard({ imageUrl, name, title, email }: ProfileCardProps) {
    return (
        <Card className="w-auto h-auto rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-col items-center">
                <Image
                    src={imageUrl}
                    alt={`${name} profile`}
                    className="w-24 h-24 rounded-full object-cover mb-3"
                    height={0}
                    width={0}
                />
                <CardTitle className="text-xl font-semibold text-center">{name}</CardTitle>
                <p className="text-sm text-gray-500 text-center">{title}</p>
            </CardHeader>
            <CardContent className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <p
                    className="text-center text-sm hover:underline break-all"
                >
                    {email}
                </p>
            </CardContent>
        </Card>
    )
}