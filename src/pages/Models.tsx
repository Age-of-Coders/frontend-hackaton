export default function Models() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold">Modelos</h1>
            <p className="text-muted-foreground">
                Explora y gestiona los diferentes modelos disponibles.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Genesis</h3>
                    <p className="text-sm text-muted-foreground">Modelo Genesis</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Explorer</h3>
                    <p className="text-sm text-muted-foreground">Modelo Explorer</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Quantum</h3>
                    <p className="text-sm text-muted-foreground">Modelo Quantum</p>
                </div>
            </div>
        </div>
    )
}
