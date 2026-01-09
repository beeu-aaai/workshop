import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import Image from "next/image";
import Link from "next/link";

type SpeakerCardProps = {
    imageUrl: string
    name: string
    title: string
    description: string
    email: string
    website: string
}

export default function SpeakerCard({ imageUrl, name, title, description, email, website }: SpeakerCardProps) {
    return (
        <div className="border flex flex-col lg:flex-row p-8 lg:p-4 w-auto h-auto rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col items-center p-4">
                <Image
                    src={imageUrl}
                    alt={`${name} profile`}
                    className="w-24 h-24 rounded-full object-cover mb-3"
                    height={0}
                    width={0}
                />
                <CardTitle className="text-xl font-semibold text-center">{name}</CardTitle>
                <p className="w-80 text-sm text-gray-500 text-center">{title}</p>
            </div>
            <div className="flex flex-col text-sm justify-center gap-4">
                <p>{description}</p>
                <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <p
                        className="text-center hover:underline break-all"
                    >
                        {email}
                    </p>
                </div>
                <Link href={website} target="_blank" className="underline">{website}</Link>
            </div>
        </div>
    )
}