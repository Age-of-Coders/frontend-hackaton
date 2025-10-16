export default function Credentials() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold">Credenciales</h1>
            <p className="text-muted-foreground">
                Aprende cómo usar la plataforma con nuestra documentación completa.
            </p>
            <div className="grid gap-4">
                <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Introducción</h3>
                    <p className="text-sm text-muted-foreground">Comienza aquí para entender los conceptos básicos</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Comenzar</h3>
                    <p className="text-sm text-muted-foreground">Guía de inicio rápido</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Tutoriales</h3>
                    <p className="text-sm text-muted-foreground">Tutoriales paso a paso</p>
                </div>
            </div>
        </div>
    )
}
