import { AlertCircle } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ValidationsErrorProps {
  error: string;
  onRetry: () => void;
}

export default function ValidationsError({
  error,
  onRetry,
}: ValidationsErrorProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Validaciones</h1>
      <p className="text-muted-foreground">
        Revisa y valida las solicitudes de certificados médicos.
      </p>
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-5 w-5" />
            Error al cargar solicitudes
          </CardTitle>
          <CardDescription>{error}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button onClick={onRetry} variant="outline">
            Reintentar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
