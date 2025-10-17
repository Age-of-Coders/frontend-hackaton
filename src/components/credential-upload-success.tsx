import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface CredentialUploadSuccessProps {
    onReset: () => void
}

export default function CredentialUploadSuccess({ onReset }: CredentialUploadSuccessProps) {
    return (
        <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
                <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                    <div className="rounded-full bg-green-100 dark:bg-green-900/20 p-3">
                        <CheckCircle2 className="size-12 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">¡Credenciales Enviadas!</h2>
                        <p className="text-muted-foreground max-w-md">
                            Tus credenciales han sido enviadas correctamente. El administrador revisará tu documentación y te notificaremos una vez que seas dado de alta para que puedas realizar publicaciones.
                        </p>
                        <p className="text-sm text-muted-foreground pt-4">
                            Este proceso puede tardar entre 24 a 48 horas hábiles.
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        onClick={onReset}
                    >
                        Enviar otra credencial
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
