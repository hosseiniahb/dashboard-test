"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import { LogOut, LayoutDashboard, FileText, BarChart2, CalendarDays, MessageCircleMore, ActivitySquare } from 'lucide-react';
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const DashboardNavLinks = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard"
    },
    {
        name: "File Text",
        icon: FileText,
        href: "/dashboard/file-text"
    },
    {
        name: "Analytics",
        icon: BarChart2,
        href: "/dashboard/analytics"
    },
    {
        name: "Date",
        icon: CalendarDays,
        href: "/dashboard/date"
    },
    {
        name: "Messages",
        icon: MessageCircleMore,
        href: "/dashboard/messages"
    },
    {
        name: "Activities",
        icon: ActivitySquare,
        href: "/dashboard/activities"
    },
]


const DashboardSidebar = () => {

    const pathname = usePathname();

    return (
        <div className="w-full h-full flex flex-col items-center justify-between py-7 shadow-md dark:bg-slate-800">
            <div>
                <Link href="/dashboard" className="font-bold text-primary text-4xl">AHB</Link>
            </div>
            <div>
                <ul className="space-y-7">
                    {DashboardNavLinks.map((link) => {
                        const IconLink = link.icon;
                        return (
                            <li key={link.name} className={cn("p-2 rounded-xl text-slate-500 transition-all duration-100 hover:bg-primary-foreground dark:hover:bg-slate-700", {
                                "bg-primary text-slate-200 hover:bg-primary": pathname === link.href
                            })}>
                                <Link href={link.href}>
                                    <IconLink />
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <Button variant="ghost" className="text-slate-500 ">
                    <LogOut />
                </Button>
            </div>
        </div>
    )
}

export default DashboardSidebar;