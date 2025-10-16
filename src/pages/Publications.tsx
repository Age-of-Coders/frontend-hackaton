export default function Publications() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold">Publicaciones</h1>
            <p className="text-muted-foreground">
                Explora y gestiona las diferentes publicaciones disponibles.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Genesis</h3>
                    <p className="text-sm text-muted-foreground">Publicación Genesis</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Explorer</h3>
                    <p className="text-sm text-muted-foreground">Publicación Explorer</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Quantum</h3>
                    <p className="text-sm text-muted-foreground">Publicación Quantum</p>
                </div>
            </div>
        </div>
    )
}
