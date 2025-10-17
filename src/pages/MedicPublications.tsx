import { useState } from "react";
import { MOCK_PUBLICATIONS } from "@/constants/mock-data";
import type { Publication } from "./Publications";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default function MedicPublications() {
    const [publications] = useState<Publication[]>(MOCK_PUBLICATIONS);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Publicaciones Médicas</h1>
                <p className="text-muted-foreground mt-2">
                    Explora las publicaciones compartidas por profesionales de la salud.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {publications.map((publication) => (
                    <Card key={publication.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-xl">{publication.title}</CardTitle>
                            <CardDescription>
                                {new Date(publication.date).toLocaleDateString('es-ES', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                {publication.description}
                            </p>
                        </CardContent>
                        <CardFooter className="flex-col items-start gap-2 border-t pt-4">
                            <p className="text-xs text-muted-foreground">Autor</p>
                            <p className="text-sm font-semibold">{publication.author}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
