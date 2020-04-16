export interface UserDetail {
        UserName: string;
        Emailid: string;
        MobileNumber: string;
        exp: Number;
        iss: string;
        aud: string;
        jwtToken?: string;
      
      }
export interface Token{
  token:string;
}
