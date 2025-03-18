export default async function getDentist(id:string) {
    console.log("dentist: "+id)
    const response = await fetch(`http://localhost:5050/api/v1/dentists/${id}`);
    if(!response.ok){
        throw new Error("Failed to fetch dentist");
    }

    return await response.json();
}