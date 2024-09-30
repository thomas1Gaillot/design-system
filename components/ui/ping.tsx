import { cn } from "@/lib/utils";

interface PingProps {
    pingActive: boolean;
    isActive: boolean;
    hasPrerequisite: boolean;
}

export default function Ping({ pingActive, isActive, hasPrerequisite }: PingProps) {
    const baseSize = 'w-4 h-4 min-h-4 min-w-4'; // taille de base
    const inactiveSize = 'w-3 h-3 min-w-3 min-h-3'; // taille quand inactif
    const baseRounded = 'rounded-full mb-2';

    const activeBgColor = hasPrerequisite ? 'bg-amber-400' : 'bg-indigo-700';
    const inactiveBgColor = 'bg-gray-500 opacity-60';

    return pingActive || hasPrerequisite ? (
        <div className={cn(baseSize, activeBgColor, baseRounded)}>
            <div
                className={cn(
                    baseSize,
                    baseRounded,
                    'animate-ping',
                    pingActive ? activeBgColor : 'hidden'
                )}
            ></div>
        </div>
    ) : (
        <div
            className={cn(
                inactiveSize,
                isActive ? 'bg-indigo-700' : inactiveBgColor,
                'rounded-full'
            )}
        ></div>
    );
}
