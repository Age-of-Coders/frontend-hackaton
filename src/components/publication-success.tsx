import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface PublicationSuccessProps {
    onReset: () => void
}

export default function PublicationSuccess({ onReset }: PublicationSuccessProps) {
    return (
        <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
                <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                    <div className="rounded-full bg-green-100 dark:bg-green-900/20 p-3">
                        <CheckCircle2 className="size-12 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">¡Publicación Creada!</h2>
                        <p className="text-muted-foreground max-w-md">
                            Tu publicación ha sido creada correctamente y ahora está disponible para que otros médicos puedan verla.
                        </p>
                        <p className="text-sm text-muted-foreground pt-4">
                            Puedes crear otra publicación o ver tus publicaciones anteriores.
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        onClick={onReset}
                    >
                        Crear otra publicación
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
