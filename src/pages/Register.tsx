import { SignupForm } from "@/components/signup-form"

function Register() {
    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <div className="w-full max-w-md">
                <SignupForm />
            </div>
        </div>
    )
}

export default Register