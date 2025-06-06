class AuthService{
    static loginUser(body){
        return {
            msg:"Login Route"
        }
    }
    static async registerUser(body){
        const {name,password,email}=body
        return {
            name,password,email
        }
    }
}
 module.exports =AuthService