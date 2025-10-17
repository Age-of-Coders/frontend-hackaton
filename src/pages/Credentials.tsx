import CredentialUpload from '@/components/credential-upload'

export default function Credentials() {
    return (
        <div className="space-y-6 p-4 md:p-6">
            <div className="space-y-2">
                <h1 className="text-center text-3xl font-bold">Credenciales Médicas</h1>
            </div>
            <CredentialUpload />
        </div>
    )
}
