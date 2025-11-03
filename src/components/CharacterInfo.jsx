export const CharacterInfo = ({ data }) =>{
    if(!data){
        return null;
    }
    return(<>
    <h1>Data: {data} </h1></>)
}