import { Spinner } from "@/components/ui/spinner";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100 dark:bg-slate-800">
            <div className="flex items-center space-x-2">
                <Spinner className="size-10" />
            </div>
        </div>
    );
};

export default Loading;