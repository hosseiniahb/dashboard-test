import { ReactNode } from "react";
import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full min-h-screen flex items-start">
            <div className="w-32 h-screen">
                <DashboardSidebar />
            </div>
            <main className="w-full min-h-screen p-7 bg-slate-50 dark:bg-slate-900">
                {children}
            </main>
        </div>
    )
}