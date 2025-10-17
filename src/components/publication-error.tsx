import { AlertCircle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface PublicationErrorProps {
    errorMessage: string
    onRetry: () => void
    onRetrySubmit?: () => void
    isSubmitting?: boolean
    hasData?: boolean
}

export default function PublicationError({
    errorMessage,
    onRetry,
    onRetrySubmit,
    isSubmitting = false,
    hasData = false
}: PublicationErrorProps) {
    return (
        <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
                <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                    <div className="rounded-full bg-red-100 dark:bg-red-900/20 p-3">
                        <AlertCircle className="size-12 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">Error al Crear Publicación</h2>
                        <p className="text-muted-foreground max-w-md">
                            {errorMessage}
                        </p>
                        <p className="text-sm text-muted-foreground pt-4">
                            Por favor, verifica tu conexión e intenta nuevamente.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            onClick={onRetry}
                        >
                            <RefreshCw className="size-4" />
                            Crear nueva publicación
                        </Button>
                        {hasData && onRetrySubmit && (
                            <Button
                                onClick={onRetrySubmit}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Reintentando...
                                    </>
                                ) : (
                                    <>
                                        <RefreshCw className="size-4" />
                                        Reintentar Envío
                                    </>
                                )}
                            </Button>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
