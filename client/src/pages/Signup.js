import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage(){
    return(
        <>
            <Header
              heading="Signup to create an account"
              paragraph="If you already have an account please login"
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>
        </>
    )
}