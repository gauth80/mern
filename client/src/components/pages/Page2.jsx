import React, {useState} from 'react';
import SeConnecter from './Connexion';


const Page2 = () => {

  const [session, setSession] = useState(null);

  return (
    !!session ?
    <div className="helper">
      Page 2 session vrais
    </div>
    :
    <SeConnecter connexion={setSession}/>
  )
}

export default Page2;
