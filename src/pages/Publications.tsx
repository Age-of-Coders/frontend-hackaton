import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import PublicationSuccess from "@/components/publication-success";
import PublicationError from "@/components/publication-error";

export interface Publication {
    id: string;
    title: string;
    description: string;
    date: string;
    author: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Publications() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        author: ""
    });

    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('submitting');

        try {
            // Simulación de llamada a API
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Simular éxito o error aleatoriamente para testing
                    // 90% de probabilidad de éxito, 10% de probabilidad de error
                    const random = Math.random();
                    const success = random > 0.1; // 90% éxito, 10% error
                    if (success) {
                        resolve(true);
                    } else {
                        reject(new Error("Error al crear la publicación. Por favor, intenta nuevamente."));
                    }
                }, 1500);
            });

            const newPublication: Publication = {
                id: Date.now().toString(),
                title: formData.title,
                description: formData.description,
                date: new Date().toISOString().split('T')[0],
                author: formData.author
            };

            console.log("Nueva publicación:", newPublication);

            setSubmitStatus('success');
            setFormData({
                title: "",
                description: "",
                author: ""
            });
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage(error instanceof Error ? error.message : "Error desconocido al crear la publicación");
        }
    };

    const handleReset = () => {
        setSubmitStatus('idle');
        setFormData({
            title: "",
            description: "",
            author: ""
        });
    };

    const handleRetrySubmit = () => {
        const form = document.querySelector('form') as HTMLFormElement;
        if (form) {
            form.requestSubmit();
        }
    };

    // Mostrar componente de éxito
    if (submitStatus === 'success') {
        return (
            <div className="space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Publicaciones Médicas</h1>
                </div>
                <PublicationSuccess onReset={handleReset} />
            </div>
        );
    }

    // Mostrar componente de error
    if (submitStatus === 'error') {
        return (
            <div className="space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Publicaciones Médicas</h1>
                </div>
                <PublicationError
                    errorMessage={errorMessage}
                    onRetry={handleReset}
                    onRetrySubmit={handleRetrySubmit}
                    isSubmitting={false}
                    hasData={!!(formData.title && formData.description)}
                />
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Publicaciones Médicas</h1>
            </div>

            {/* Formulario de Nueva Publicación */}
            <Card className="border-2">
                <CardHeader>
                    <CardTitle>Nueva Publicación</CardTitle>
                    <CardDescription>
                        Completa el formulario para crear una nueva publicación médica
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Título</Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="Ingrese el título de la publicación"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                                disabled={submitStatus === 'submitting'}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Descripción</Label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Ingrese una descripción detallada"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                                disabled={submitStatus === 'submitting'}
                                className="flex min-h-[210px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="gap-2 pt-4">
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={submitStatus === 'submitting'}
                        >
                            {submitStatus === 'submitting' ? (
                                <>
                                    <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                    Publicando...
                                </>
                            ) : (
                                'Publicar'
                            )}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
