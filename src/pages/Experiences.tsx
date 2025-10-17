import Cards from "@/components/publications";

export default function Experiences() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold">Experiencias</h1>
            <p className="text-muted-foreground">
                Experiencias compartidas por los usuarios de nuestra plataforma.
            </p>
            <div className="flex flex-col min-h-[500px] rounded-xl gap-2 p-4">
                <Cards />
            </div>
        </div>
    )
}
