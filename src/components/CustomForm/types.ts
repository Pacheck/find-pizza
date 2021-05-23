export interface CustomButtonProps {
    isGoogleSign?: boolean;
}

export interface UserData {
    displayName?: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

export interface FormProps {
    SignUp?: boolean;
}