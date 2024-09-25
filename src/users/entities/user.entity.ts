export class User {
    id: String
    email: String
    name: String
    password: String
    status: Boolean
    extra: JSON
}

export class UserStatus {
    false: 'Inactivo'
    true: 'Activo'
}
