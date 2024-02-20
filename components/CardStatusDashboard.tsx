"use client";

import { LucideIcon } from "lucide-react";
import { Card, Metric, Text } from '@tremor/react';

type CardStatusDashboardProps = {
    bgContainer: string,
    Icon: LucideIcon,
    IconStyles: string,
    Title: string,
    subTitle: string
}

const CardStatusDashboard = ({ bgContainer, Icon, IconStyles, Title, subTitle }: CardStatusDashboardProps) => {
    return (
        <>
            {/* <div className={`${bgContainer} w-72 h-40 bg-slate-200 flex flex-col items-start justify-between p-4 rounded-2xl`}>
                <span className={`${IconStyles} bg-white p-3 rounded-xl`}>
                    <Icon />
                </span>
                <div className="space-y-1">
                    <h5 className="text-xl font-bold capitalize dark:text-slate-300">{Title}</h5>
                    <p className="uppercase dark:text-slate-400">{subTitle}</p>
                </div>
            </div> */}

            <Card
                className={`mx-auto max-w-xs    `}
                decoration="top"
                decorationColor="indigo"
            >
                <Metric className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Sales</Metric>
                <Text className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</Text>
            </Card>
        </>
    )
}

export default CardStatusDashboard;