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

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { register, isLoading, error } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [validationError, setValidationError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setValidationError("")

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setValidationError("Las contraseñas no coinciden")
      return
    }

    // Validar longitud de contraseña
    if (password.length < 6) {
      setValidationError("La contraseña debe tener al menos 6 caracteres")
      return
    }

    try {
      await register({ username, email, password })
      navigate("/") // Redirigir al home después del registro exitoso
    } catch (error) {
      console.error("Error al registrar:", error)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Crear cuenta</CardTitle>
          <CardDescription>
            Ingresa tu correo electrónico para crear tu cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              {(error || validationError) && (
                <div className="text-red-500 text-sm p-2 bg-red-50 rounded">
                  {error || validationError}
                </div>
              )}
              <Field>
                <FieldLabel htmlFor="name">Nombre completo</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Juan Pérez"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Field>
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
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      placeholder="********"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirmar contraseña
                    </FieldLabel>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="********"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </Field>
                </Field>
                <FieldDescription>
                  Debe tener al menos 6 caracteres.
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Creando cuenta..." : "Crear cuenta"}
                </Button>
                <FieldDescription className="text-center">
                  ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
