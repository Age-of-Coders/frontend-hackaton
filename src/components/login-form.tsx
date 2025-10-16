import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/contexts/auth/auth-provider"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { login, isLoading, error } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await login({ email, password })
      navigate("/") // Redirigir al home después del login exitoso
    } catch (error) {
      console.error("Error al iniciar sesión:", error)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Iniciar sesión</CardTitle>
          <CardDescription>
            Ingresa tu correo electrónico para iniciar sesión
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              {error && (
                <div className="text-red-500 text-sm p-2 bg-red-50 rounded">
                  {error}
                </div>
              )}
              <Field>
                <FieldLabel htmlFor="email">Correo electrónico</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="***********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Field>
              <Field>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Cargando..." : "Iniciar sesión"}
                </Button>
                <FieldDescription className="text-center">
                  ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div >
  )
}
