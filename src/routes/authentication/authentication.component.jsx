


import SignUp from "../../component/sign-up/sign-up.component";
import SignIn from "../../component/sign-in/sign-in.component";
import {AuthenticationContainer} from "./authentication.styles.jsx";
const Authentication = () => {

  

 

    // const logGoogleRedirectUser = async () => {
    //     const { user } = await signInWithGoogleRedirect();
    //     console.log({ user });
    // }
    return (
        <AuthenticationContainer>

            <SignIn />

            <SignUp />

            {/*
            
              useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getRedirectResult(auth);
            if (response) {
              await createUserDocumentFromAuth(response.user);
            }
          } catch (error) {
            // Handle errors here
            console.error('Error in useEffect:', error);
          }
        };
      
        fetchData();
      }, [auth]);
            
            
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect.
            </button> */}

        </AuthenticationContainer>
    )
};


export default Authentication;

// CRUD CREATE READ UPDATE DELETE.