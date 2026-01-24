"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "./navigation-menu";
import Link from "next/link";
import { Button } from "./button";
import { useEffect, useState } from "react";
import Banner from "./banner";
import NavbarMobile from "@/components/ui/navbar-mobile";
import {usePathname} from "next/navigation";

let sections: {id: string, label: string}[];

const workshop_sections = [
    { id: "overview", label: "Overview" },
    { id: "topics", label: "Topics" },
    { id: "dates", label: "Dates" },
    { id: "schedule", label: "Schedule" },
    { id: "papers", label: "Papers" },
    { id: "speakers", label: "Speakers" },
    { id: "organizers", label: "Organizers" },
];

const challenge_sections = [
    { id: "overview", label: "Overview" },
    { id: "tasks", label: "Challenge Tasks" },
    { id: "participation", label: "Participation" },
    { id: "awards", label: "Awards & Recognition" },
    { id: "dates", label: "Dates" },
    { id: "organizers", label: "Organizers" },
];

export default function Navbar() {

    const [active, setActive] = useState<string>("overview");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let current = "overview";
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom >= 120) {
                        current = section.id;
                        break;
                    }
                }
            }
            setActive(current);

            setScrolled(window.scrollY > window.innerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const challenge = usePathname() == "/challenge"
    if (challenge) {
        sections = challenge_sections
    } else {
        sections = workshop_sections
    }

    return (
        <div
            className={`fixed flex flex-col top-0 left-0 w-full z-30 transition-colors duration-300 ${
                scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
            }`}
        >
            {!challenge && <Banner/>}
            <div className="invert grid grid-cols-3 items-center py-4 px-4 lg:px-24">
                {/* Logo */}
                <div className="col-span-1 flex items-center space-x-2">
                    <Button
                        variant="link"
                        className="w-min px-0"
                    >
                        <Link href="/">AAAI 2026 BEEU Workshop {challenge && "| Challenge"}</Link>
                    </Button>
                </div>

                {/* Nav Links */}
                <div className={`hidden lg:flex w-full col-span-2 items-center justify-end`}>
                    <NavigationMenu>
                        <NavigationMenuList className="w-auto border border-black py-2 px-1 rounded-full">
                            {sections.map((s) => (
                                <NavigationMenuItem key={s.id}>
                                    <Link
                                        href={`#${s.id}`}
                                        className={`text-sm py-2 px-3 rounded-full transition-colors text-black hover:bg-neutral-800 hover:text-white`}
                                    >
                                        {s.label}
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
            <NavbarMobile/>
        </div>
    );
}
