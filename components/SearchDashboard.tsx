import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

const SearchDashboard = () => {
    return (
        <div className="w-full h-16 flex items-center justify-between relative">
            <Search className="text-slate-500 absolute left-2" />
            <Input placeholder="Search..." className="px-10 py-7 rounded-2xl outline-none transition-all 
            duration-100 dark:bg-slate-800" />
            <div className="flex items-center gap-3 absolute right-2">
                <Button variant="ghost" className="p-2 rounded-xl text-slate-500 transition-all duration-100 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <Bell />
                </Button>
                <Button variant="ghost" className="p-2 rounded-xl text-slate-500 transition-all duration-100 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <User />
                </Button>
                <ModeToggle />
            </div>
        </div>
    )
}

export default SearchDashboard;