import { useEffect, useState } from "react";
import { Check, X, Eye, Loader2 } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    getAllValidationRequests,
    acceptValidationRequest,
    rejectValidationRequest,
    type ValidationRequest,
} from "@/api/verify-services";
import ValidationsLoading from "@/components/validations-loading";
import ValidationsError from "@/components/validations-error";

export default function Validations() {
    const [validationRequests, setValidationRequests] = useState<ValidationRequest[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [processingIds, setProcessingIds] = useState<Set<string>>(new Set());
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        loadValidationRequests();
    }, []);

    const loadValidationRequests = async () => {
        try {
            setLoading(true);
            setError(null);
            const requests = await getAllValidationRequests();
            setValidationRequests(requests);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error al cargar las solicitudes");
        } finally {
            setLoading(false);
        }
    };

    const handleAccept = async (id: string) => {
        try {
            setProcessingIds((prev) => new Set(prev).add(id));
            await acceptValidationRequest(id);
            // Remover la solicitud de la lista después de aceptarla
            setValidationRequests((prev) => prev.filter((req) => req.id !== id));
        } catch (err) {
            alert(err instanceof Error ? err.message : "Error al aceptar la solicitud");
        } finally {
            setProcessingIds((prev) => {
                const newSet = new Set(prev);
                newSet.delete(id);
                return newSet;
            });
        }
    };

    const handleReject = async (id: string) => {
        try {
            setProcessingIds((prev) => new Set(prev).add(id));
            await rejectValidationRequest(id);
            // Remover la solicitud de la lista después de rechazarla
            setValidationRequests((prev) => prev.filter((req) => req.id !== id));
        } catch (err) {
            alert(err instanceof Error ? err.message : "Error al rechazar la solicitud");
        } finally {
            setProcessingIds((prev) => {
                const newSet = new Set(prev);
                newSet.delete(id);
                return newSet;
            });
        }
    };

    if (loading) {
        return <ValidationsLoading />;
    }

    if (error) {
        return <ValidationsError error={error} onRetry={loadValidationRequests} />;
    }

    return (
        <div className="space-y-4">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Validaciones</h1>
                <p className="text-muted-foreground">
                    Revisa y valida las solicitudes de certificados médicos pendientes.
                </p>
            </div>

            {validationRequests.length === 0 ? (
                <Card>
                    <CardHeader>
                        <CardTitle>No hay solicitudes pendientes</CardTitle>
                        <CardDescription>
                            Todas las solicitudes de validación han sido procesadas.
                        </CardDescription>
                    </CardHeader>
                </Card>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {validationRequests.map((request) => {
                        const isProcessing = processingIds.has(request.id);
                        return (
                            <Card key={request.id} className="overflow-hidden">
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Solicitud #{request.id.slice(0, 8)}
                                    </CardTitle>
                                    <CardDescription>
                                        {request.isVerified
                                            ? "Ya verificado"
                                            : "Pendiente de validación"}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    {/* Vista previa de la imagen */}
                                    <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                                        {request.certificateImageUrl ? (
                                            <>
                                                <img
                                                    src={request.certificateImageUrl}
                                                    alt="Certificado médico"
                                                    className="h-full w-full object-cover"
                                                />
                                                <Button
                                                    variant="secondary"
                                                    size="icon"
                                                    className="absolute bottom-2 right-2 h-8 w-8 shadow-lg"
                                                    onClick={() =>
                                                        setSelectedImage(request.certificateImageUrl)
                                                    }
                                                >
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                            </>
                                        ) : (
                                            <div className="flex h-full items-center justify-center">
                                                <p className="text-sm text-muted-foreground">
                                                    Sin imagen
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Información adicional */}
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Estado:</span>
                                            <span
                                                className={
                                                    request.isVerified
                                                        ? "text-green-600"
                                                        : "text-yellow-600"
                                                }
                                            >
                                                {request.isVerified ? "Verificado" : "Pendiente"}
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>

                                <CardFooter className="flex gap-2 border-t pt-6">
                                    <Button
                                        variant="outline"
                                        className="flex-1 text-destructive hover:bg-destructive hover:text-destructive-foreground"
                                        onClick={() => handleReject(request.id)}
                                        disabled={isProcessing || request.isVerified}
                                    >
                                        {isProcessing ? (
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                        ) : (
                                            <>
                                                <X className="h-4 w-4 mr-2" />
                                                Rechazar
                                            </>
                                        )}
                                    </Button>
                                    <Button
                                        className="flex-1"
                                        onClick={() => handleAccept(request.id)}
                                        disabled={isProcessing || request.isVerified}
                                    >
                                        {isProcessing ? (
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                        ) : (
                                            <>
                                                <Check className="h-4 w-4 mr-2" />
                                                Aceptar
                                            </>
                                        )}
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            )}

            {/* Modal para vista previa de imagen a tamaño completo */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg">
                        <Button
                            variant="secondary"
                            size="icon"
                            className="absolute right-2 top-2 z-10"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                        <img
                            src={selectedImage}
                            alt="Certificado médico - Vista completa"
                            className="max-h-[90vh] max-w-[90vw] object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
