import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { Progressbar } from './Progressbar';

interface HabitProps {
    completed: number;
    amount: number;

}
export function HabitDay({ completed, amount }: HabitProps) {
    const completedPercentage = Math.round((completed / amount) * 100);
    return (
        <Popover.Root>
            <Popover.Trigger className={clsx("w-10 h-10 rounded-lg", {
                "bg-zinc-900 border-2 border-zinc-800": completedPercentage === 0,
                "bg-violet-900 border-2 border-violet-500": completedPercentage > 0 && completedPercentage < 20,
                "bg-violet-800 border-2 border-violet-500": completedPercentage >= 20 && completedPercentage < 40,
                "bg-violet-700 border-2 border-violet-500": completedPercentage >= 40 && completedPercentage < 60,
                "bg-violet-600 border-2 border-violet-500": completedPercentage >= 60 && completedPercentage < 80,
                "bg-violet-500 border-2 border-violet-400": completedPercentage >= 80
            })} />
            <Popover.Portal>
                <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
                    <span className="font-semibold text-zinc-400">Terça-feira</span>
                    <span className="mt-1 font-extrabold leading-tight text-3xl">07/02/2022</span>
                    <Progressbar progress={completedPercentage} />
                    <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>

    );
}

// Video 01: 1h 10m 50s