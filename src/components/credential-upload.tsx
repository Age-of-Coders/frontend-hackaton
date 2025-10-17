import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, FileImage, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import CredentialUploadSuccess from './credential-upload-success'
import CredentialUploadError from './credential-upload-error'
import { uploadCredential } from '@/api/credential-services'

interface CredentialUploadProps {
    onUploadSuccess?: () => void
    onUploadError?: (error: Error) => void
}

export default function CredentialUpload({ onUploadSuccess, onUploadError }: CredentialUploadProps) {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isUploading, setIsUploading] = useState(false)
    const [uploadError, setUploadError] = useState<string | null>(null)

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0]
        if (file) {
            setUploadedFile(file)

            // Crear preview de la imagen
            const reader = new FileReader()
            reader.onload = (e) => {
                setPreview(e.target?.result as string)
            }
            reader.readAsDataURL(file)
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png', '.pdf']
        },
        maxFiles: 1,
        multiple: false
    })

    const handleRemoveFile = () => {
        setUploadedFile(null)
        setPreview(null)
        setUploadError(null)
    }

    const handleSubmit = async () => {
        if (!uploadedFile) return

        setIsUploading(true)
        setUploadError(null)

        try {
            // Llamar al servicio de upload de credenciales
            await uploadCredential(uploadedFile)

            setIsUploading(false)
            setIsSubmitted(true)
            onUploadSuccess?.()
        } catch (error) {
            setIsUploading(false)
            const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error al subir la credencial'
            setUploadError(errorMessage)
            onUploadError?.(error instanceof Error ? error : new Error(errorMessage))
        }
    }

    const handleRetry = () => {
        setUploadError(null)
        setUploadedFile(null)
        setPreview(null)
    }

    const handleReset = () => {
        setIsSubmitted(false)
        setUploadedFile(null)
        setPreview(null)
    }

    if (isSubmitted) {
        return <CredentialUploadSuccess onReset={handleReset} />
    }

    if (uploadError) {
        return (
            <CredentialUploadError
                errorMessage={uploadError}
                onRetry={handleRetry}
                onRetryUpload={handleSubmit}
                isUploading={isUploading}
                hasFile={!!uploadedFile}
            />
        )
    }

    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Sube tus Credenciales Médicas</CardTitle>
                <CardDescription>
                    Por favor, sube una imagen clara de tu cédula profesional o certificado médico que te acredite como profesional de la salud.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {!uploadedFile ? (
                    <div
                        {...getRootProps()}
                        className={cn(
                            "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
                            "hover:border-primary/50 hover:bg-accent/50",
                            isDragActive && "border-primary bg-accent"
                        )}
                    >
                        <input {...getInputProps()} />
                        <div className="flex flex-col items-center gap-2">
                            <div className="rounded-full bg-primary/10 p-3">
                                <Upload className="size-8 text-primary" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium">
                                    {isDragActive
                                        ? "Suelta el archivo aquí"
                                        : "Arrastra y suelta tu credencial aquí"}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    o haz clic para seleccionar un archivo
                                </p>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                                Formatos soportados: JPG, JPEG, PNG, PDF (máx. 10MB)
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="border rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <div className="rounded bg-primary/10 p-2">
                                    <FileImage className="size-6 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate">{uploadedFile.name}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon-sm"
                                    onClick={handleRemoveFile}
                                    disabled={isUploading}
                                >
                                    <X className="size-4" />
                                </Button>
                            </div>

                            {preview && !uploadedFile.type.includes('pdf') && (
                                <div className="mt-4">
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="max-h-64 mx-auto rounded-md border object-contain"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex gap-2 justify-end">
                            <Button
                                variant="outline"
                                onClick={handleRemoveFile}
                                disabled={isUploading}
                            >
                                Cancelar
                            </Button>
                            <Button
                                onClick={handleSubmit}
                                disabled={isUploading}
                            >
                                {isUploading ? (
                                    <>
                                        <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    'Enviar Credencial'
                                )}
                            </Button>
                        </div>
                    </div>
                )}

                <div className="rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4">
                    <h4 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
                        Información importante:
                    </h4>
                    <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
                        <li>La imagen debe ser clara y legible</li>
                        <li>Debe mostrar tu nombre completo y número de cédula profesional</li>
                        <li>El documento debe estar vigente</li>
                        <li>Se aceptan cédulas profesionales, títulos y certificados oficiales</li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    )
}
