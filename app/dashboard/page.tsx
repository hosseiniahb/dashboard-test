"use client"

import CardStatusDashboard from "@/components/CardStatusDashboard";
import SearchDashboard from "@/components/SearchDashboard";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";


const DashboardPage = () => {
    return (
        <div className="w-full">
            <SearchDashboard />
            <div className="w-full mt-8">
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-slate-500">Dashboard</h1>
                    <Button className="flex items-center gap-3 text-slate-500" variant="ghost">
                        <CalendarDays />
                        <p>12 April 2023</p>
                    </Button>
                </div>
                <div className="w-full py-6 flex gap-4 flex-wrap">
                    <CardStatusDashboard 
                    Title="Heart Rate"
                    Icon={CalendarDays}
                    IconStyles="text-primary"
                    bgContainer="bg-slate-100 dark:bg-slate-800"
                    subTitle="80 bpm"
                    />
                    <CardStatusDashboard 
                    Title="Heart Rate"
                    Icon={CalendarDays}
                    IconStyles="text-primary"
                    bgContainer="bg-slate-100 dark:bg-slate-800"
                    subTitle="80 bpm"
                    />
                    <CardStatusDashboard 
                    Title="Heart Rate"
                    Icon={CalendarDays}
                    IconStyles="text-primary"
                    bgContainer="bg-slate-100 dark:bg-slate-800"
                    subTitle="80 bpm"
                    />
                </div>
            </div>
        </div>
    )
}


export default DashboardPage;