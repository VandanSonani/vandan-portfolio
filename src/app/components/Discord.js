import  {useLanyard} from "react-use-lanyard";


const userID = "144234873031229440";



const Discord = () => {

//   const {status: lanyard} = useLanyard(
//     {userId : userID,
//     socket : true
// });

  return (
    <div>
    
    <img src="https://cdn.discordapp.com/avatars/144234873031229440/6ee3fb58d93653edc1d91bf97022ca08.png?size=4096" className=" rounded-full size-24 z-1" alt="image" />
                <div className="absolute bottom-1 right-1 w-7 h-7 bg-yellow-600 rounded-full border-black border-4  z-2"></div>
    </div>
  );
}


export default Discord;
