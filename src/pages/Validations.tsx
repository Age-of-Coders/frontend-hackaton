export default function Validations() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold">Validaciones</h1>
            <p className="text-muted-foreground">
                Administra las validaciones de tu cuenta y preferencias.
            </p>
            <div className="space-y-4">
                <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="font-semibold mb-2">General</h3>
                    <p className="text-sm text-muted-foreground">Configuración general de la aplicación</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Equipo</h3>
                    <p className="text-sm text-muted-foreground">Gestiona tu equipo y colaboradores</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Facturación</h3>
                    <p className="text-sm text-muted-foreground">Información de facturación y pagos</p>
                </div>
            </div>
        </div>
    )
}
