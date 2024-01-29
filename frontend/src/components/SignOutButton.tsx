
import * as apiClient from "../api-client"
import { useAppContext } from "../context/AppContext";
import { useMutation } from "react-query";

const SignOutButton = () =>
{
    const {showToast} = useAppContext();
    const mutation = useMutation(apiClient.signOut,{
        onSuccess:() =>
        {
            showToast({message:"Sign Out!" , type:"SUCCESS"});
        },
        onError:(error:Error) =>
        {
            showToast({message: error.message, type:"ERROR"});
        }
    })

    const handleClick = () => {
        mutation.mutate();
    }
    return (
        <button className="text-blue-600 font-bold bg-white hover:bg-gray-100 px-3" onClick={handleClick}>Sign Out</button>
    )
}

export default SignOutButton;