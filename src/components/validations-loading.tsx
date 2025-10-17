import { Spinner } from "@/components/ui/spinner";

export default function ValidationsLoading() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Validaciones</h1>
      <p className="text-muted-foreground">
        Revisa y valida las solicitudes de certificados médicos.
      </p>
      <div className="flex items-center justify-center py-12">
        <Spinner className="h-8 w-8" />
      </div>
    </div>
  );
}
