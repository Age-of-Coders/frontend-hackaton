import { Link } from "react-router-dom";
import {
    HeartPulse,
    Users,
    BookOpen,
    Shield,
    Fingerprint,
    ArrowRight,
    Sparkles,
    MessageCircleHeart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
    const features = [
        {
            icon: MessageCircleHeart,
            title: "Comparte Experiencias",
            description: "Conecta con otros usuarios a través de historias anónimas. Tu voz importa y puede inspirar a otros.",
            link: "/experiences",
            color: "text-rose-500",
            bgColor: "bg-rose-50 dark:bg-rose-950/20"
        },
        {
            icon: BookOpen,
            title: "Información Médica Verificada",
            description: "Accede a publicaciones de profesionales de la salud con información confiable y actualizada.",
            link: "/medic-publications",
            color: "text-blue-500",
            bgColor: "bg-blue-50 dark:bg-blue-950/20"
        },
        {
            icon: Fingerprint,
            title: "Gestiona tus Credenciales",
            description: "Sube y administra tus certificados médicos de forma segura y organizada.",
            link: "/credentials",
            color: "text-purple-500",
            bgColor: "bg-purple-50 dark:bg-purple-950/20"
        },
        {
            icon: Shield,
            title: "Validaciones Confiables",
            description: "Sistema de verificación de credenciales médicas para garantizar la autenticidad.",
            link: "/validations",
            color: "text-green-500",
            bgColor: "bg-green-50 dark:bg-green-950/20"
        }
    ];

    const stats = [
        { label: "Usuarios Activos", value: "1,200+", icon: Users },
        { label: "Historias Compartidas", value: "850+", icon: MessageCircleHeart },
        { label: "Publicaciones Médicas", value: "120+", icon: BookOpen },
    ];

    return (
        <div className="space-y-12 pb-8">
            {/* Hero Section */}
            <section className="text-center space-y-6 pt-8 pb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 text-sm font-medium">
                    <Sparkles className="size-4" />
                    <span>Tu comunidad de apoyo</span>
                </div>

                <div className="space-y-4 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Bienvenido a{" "}
                        <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                            Rénova
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Una plataforma dedicada a personas con diabetes, donde puedes compartir experiencias,
                        acceder a información médica verificada y gestionar tus credenciales de salud.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center pt-4">
                    <Button size="lg" asChild className="gap-2">
                        <Link to="/experiences">
                            Explorar Experiencias
                            <ArrowRight className="size-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="gap-2">
                        <Link to="/medic-publications">
                            <HeartPulse className="size-4" />
                            Ver Publicaciones Médicas
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Stats Section */}
            <section className="grid gap-4 md:grid-cols-3">
                {stats.map((stat, index) => (
                    <Card key={index} className="border-2">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/20">
                                    <stat.icon className="size-6 text-rose-500" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </section>

            {/* Features Section */}
            <section className="space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold">¿Qué puedes hacer aquí?</h2>
                    <p className="text-muted-foreground">
                        Descubre todas las funcionalidades que tenemos para ti
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                            <CardHeader>
                                <div className={`inline-flex w-fit p-3 rounded-lg ${feature.bgColor} mb-2`}>
                                    <feature.icon className={`size-6 ${feature.color}`} />
                                </div>
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                                <CardDescription className="text-base">
                                    {feature.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="ghost" asChild className="gap-2 pl-0">
                                    <Link to={feature.link}>
                                        Explorar
                                        <ArrowRight className="size-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 p-8 md:p-12 text-white">
                <div className="relative z-10 max-w-2xl space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        No estás solo en este camino
                    </h2>
                    <p className="text-lg opacity-90">
                        Únete a nuestra comunidad, comparte tu historia y ayuda a otros que están
                        pasando por situaciones similares. Juntos somos más fuertes.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                        <Button size="lg" variant="secondary" asChild>
                            <Link to="/experiences">
                                Comenzar ahora
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/3 opacity-10">
                    <HeartPulse className="size-full" />
                </div>
            </section>
        </div>
    )
}
