export default {
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb+srv://JuanFlorez1326:Juan67927@contactbook.ve1nq5q.mongodb.net/?retryWrites=true&w=majority',
        USER: process.env.MONGODB_USER || 'JuanFlorez1326',
        PASSWORD: process.env.MONGODB_PASSWORD || 'Juan67927'
    }
}    