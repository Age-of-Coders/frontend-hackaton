import { useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star } from "lucide-react"
import { MOCK_STORIES } from "@/constants/mock-data"

interface Story {
    id: number
    texto_historia: string
    likes: number
    isLiked: boolean
    isFavorite: boolean
    fecha: string
}

export default function Favourites() {
    const [stories, setStories] = useState<Story[]>(MOCK_STORIES)

    // Filtrar solo las historias marcadas como favoritas
    const favoriteStories = stories.filter(story => story.isFavorite)

    const handleLike = (id: number) => {
        setStories(stories.map(story =>
            story.id === id
                ? {
                    ...story,
                    isLiked: !story.isLiked,
                    likes: story.isLiked ? story.likes - 1 : story.likes + 1
                }
                : story
        ))
    }

    const handleFavorite = (id: number) => {
        setStories(stories.map(story =>
            story.id === id
                ? { ...story, isFavorite: !story.isFavorite }
                : story
        ))
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold">Favoritos</h1>
            <p className="text-muted-foreground">
                Aquí encontrarás todas las experiencias que has guardado como favoritas.
            </p>
            <div className="flex flex-col min-h-[500px] rounded-xl gap-2 p-4">
                {favoriteStories.length === 0 ? (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-muted-foreground text-center">
                            No tienes experiencias guardadas aún.<br />
                            Ve a la sección de Experiencias y guarda las que te interesen.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {favoriteStories.map((story) => (
                            <Card key={story.id} className="flex flex-col border-2 hover:shadow-lg transition-all duration-300">
                                <CardHeader>
                                    <CardTitle>Anónimo</CardTitle>
                                    <CardDescription>{formatDate(story.fecha)}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {story.texto_historia}
                                    </p>
                                </CardContent>
                                <CardFooter className="flex justify-between items-center gap-2 border-t pt-4">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleLike(story.id)}
                                        className={`flex items-center gap-2 transition-all duration-300 ${story.isLiked
                                                ? 'bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800 hover:bg-rose-100 dark:hover:bg-rose-950/30'
                                                : 'hover:bg-rose-50 dark:hover:bg-rose-950/10 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-200 dark:hover:border-rose-800'
                                            }`}
                                    >
                                        <Heart
                                            className={`h-4 w-4 transition-all duration-300 ${story.isLiked ? 'fill-rose-600 dark:fill-rose-400' : ''
                                                }`}
                                        />
                                        <span className="font-medium">{story.likes}</span>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleFavorite(story.id)}
                                        className={`flex items-center gap-2 transition-all duration-300 ${story.isFavorite
                                                ? 'bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-950/30'
                                                : 'hover:bg-amber-50 dark:hover:bg-amber-950/10 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-200 dark:hover:border-amber-800'
                                            }`}
                                    >
                                        <Star
                                            className={`h-4 w-4 transition-all duration-300 ${story.isFavorite ? 'fill-amber-600 dark:fill-amber-400' : ''
                                                }`}
                                        />
                                        <span className="font-medium">{story.isFavorite ? 'Guardado' : 'Guardar'}</span>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
