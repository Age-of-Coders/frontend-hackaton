export default function MedicPublications() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold">Bienvenido a nuestra plataforma</h1>
            <p className="text-muted-foreground">
                Esta es tu página de inicio. Aquí puedes ver un resumen de tu actividad.
            </p>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Tarjeta 1</p>
                </div>
                <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Tarjeta 2</p>
                </div>
                <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Tarjeta 3</p>
                </div>
            </div>
            <div className="bg-muted/50 min-h-[400px] flex-1 rounded-xl flex items-center justify-center">
                <p className="text-muted-foreground">Contenido principal del dashboard</p>
            </div>
        </div>
    )
}
