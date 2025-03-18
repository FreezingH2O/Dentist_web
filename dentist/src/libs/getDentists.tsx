import { DentistJson} from "../../interfaces";

export default async function getDentists(): Promise<DentistJson> {
  await new Promise(resolve => setTimeout(resolve, 300));

  const response = await fetch("http://localhost:5050/api/v1/dentists");

  if (!response.ok) {
    throw new Error("Failed to fetch dentists");
  }

  return response.json();
}
