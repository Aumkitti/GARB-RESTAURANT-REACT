// eslint-disable-next-line no-unused-vars
import { useAuthContext } from "../context/AuthContext";

const Profile = () => {
    const {user} = useAuthContext();
  return (
    <div className="container">
        <div className="row">
            <div className="col-6 card profile my-2 light" style={{ width: "500px", borderRadius: "20px"}}>
                <div className="card-header">Profile</div>
                <div className="card-body">
                    <dic className="card-title h5">{user.username}</dic>
                    <div className="card-text">
                        <b>Token:</b>
                        {user.accessToken.substring(0, 20)}...
                        {user.accessToken.substring(user.accessToken)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Profile