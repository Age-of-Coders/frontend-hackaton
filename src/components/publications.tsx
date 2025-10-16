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

function Cards() {
    const [stories, setStories] = useState<Story[]>(MOCK_STORIES)

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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
                <Card key={story.id} className="flex flex-col">
                    <CardHeader>
                        <CardTitle>Anónimo</CardTitle>
                        <CardDescription>{formatDate(story.fecha)}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {story.texto_historia}
                        </p>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center gap-2">
                        <Button
                            variant={story.isLiked ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleLike(story.id)}
                            className="flex items-center gap-2"
                        >
                            <Heart
                                className={`h-4 w-4 ${story.isLiked ? 'fill-current' : ''}`}
                            />
                            <span>{story.likes}</span>
                        </Button>
                        <Button
                            variant={story.isFavorite ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleFavorite(story.id)}
                            className="flex items-center gap-2"
                        >
                            <Star
                                className={`h-4 w-4 ${story.isFavorite ? 'fill-current' : ''}`}
                            />
                            <span>{story.isFavorite ? 'Guardado' : 'Guardar'}</span>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}

export default Cards