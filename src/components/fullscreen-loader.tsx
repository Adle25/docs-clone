import { LoaderIcon } from "lucide-react";

interface FullscreeLoaderProps {
    label?: string;
};

export const FullscreeLoader = ({ label }: FullscreeLoaderProps) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-2">
            <LoaderIcon className="size-6 text-muted-foreground animate-spin" />
            {label && <p className="text-sm text-muted-foreground">{label}</p>}
        </div>
    );
};