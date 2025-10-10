import Link from "next/link";

export default function Banner() {
    return (
        <div className="z-50 h-8 w-full bg-orange-600 flex items-center justify-center">
            <Link className="text-white text-sm" href="/challenge" target="_blank">Learn More about The 2nd BEEU Challenge ↗</Link>
        </div>
    )
}