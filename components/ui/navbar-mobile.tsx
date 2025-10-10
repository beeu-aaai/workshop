"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {usePathname} from "next/navigation";

let sections: {id: string, label: string}[];

const workshop_sections = [
    { id: "overview", label: "Overview" },
    { id: "topics", label: "Topics" },
    { id: "guidelines", label: "Submission Guidelines" },
    { id: "dates", label: "Dates" },
    { id: "schedule", label: "Schedule" },
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

export default function NavbarMobile() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("overview");

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

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
        <div className={`lg:pointer-events-none ml-auto fixed z-40 flex w-full justify-end px-4 ${challenge ? "py-4" : "py-12"}`}>
            <Button
                onClick={onOpen}
                className="p-2 block lg:hidden bg-transparent shadow-none"
            >
                <MenuIcon />
            </Button>

            <Dialog
                open={open}
                as="div"
                className="relative z-40 md:hidden"
                onClose={onClose}
            >
                {/* Background overlay */}
                <div className="fixed inset-0" />

                {/* Dialog */}
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white shadow-xl">
                        {/* Close button */}
                        <div className={`flex items-center justify-end px-4 ${challenge ? "py-4" : "py-12"}`}>
                            <Button onClick={onClose}>
                                <X size={15} />
                            </Button>
                        </div>

                        <NavigationMenu>
                            <NavigationMenuList className="flex flex-col items-start space-y-4 pl-4">
                                {sections.map((s) => (
                                    <NavigationMenuItem key={s.id}>
                                        <Link
                                            href={`#${s.id}`}
                                            onClick={onClose}
                                            className={`text-xl py-2 px-3 rounded-full transition-colors ${
                                                active === s.id
                                                    ? "bg-neutral-800 text-white"
                                                    : "text-black hover:bg-neutral-800 hover:text-white"
                                            }`}
                                        >
                                            {s.label}
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}
