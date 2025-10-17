import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface Publication {
    id: string;
    title: string;
    description: string;
    date: string;
    author: string;
}

export default function Publications() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        author: ""
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newPublication: Publication = {
            id: Date.now().toString(),
            title: formData.title,
            description: formData.description,
            date: new Date().toISOString().split('T')[0],
            author: formData.author
        };

        console.log("Nueva publicación:", newPublication);

        setSuccessMessage("¡Publicación creada exitosamente!");
        setTimeout(() => setSuccessMessage(""), 3000);

        setFormData({
            title: "",
            description: "",
            author: ""
        });
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Publicaciones Médicas</h1>
            </div>

            {/* Mensaje de éxito */}
            {successMessage && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    {successMessage}
                </div>
            )}

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
                                className="flex min-h-[210px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="gap-2 pt-4">
                        <Button type="submit" className="w-full">
                            Publicar
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
