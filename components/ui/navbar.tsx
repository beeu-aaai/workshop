"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "./navigation-menu";
import Link from "next/link";
import { Button } from "./button";
import { useEffect, useState } from "react";

const sections = [
    { id: "overview", label: "Overview" },
    { id: "topics", label: "Topics" },
    { id: "guidelines", label: "Submission Guidelines" },
    { id: "dates", label: "Dates" },
    { id: "schedule", label: "Schedule" },
    { id: "speakers", label: "Speakers" },
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

    return (
        <div
            className={`pointer-events-none lg:pointer-events-auto fixed top-0 left-0 w-full z-30 transition-colors duration-300 ${
                scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
            }`}
        >
            <div className="invert grid grid-cols-3 items-center py-4 px-4 lg:px-24">
                {/* Logo */}
                <div className="col-span-1 flex items-center space-x-2">
                    <Button
                        variant="link"
                        className="w-min px-0"
                    >
                        AAAI 2026 BEEU Workshop
                    </Button>
                </div>

                {/* Nav Links */}
                <div className="hidden lg:flex w-full col-span-2 items-center justify-end">
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
        </div>
    );
}
