import axios from "axios";
import baseURL from "./API";

const newsletterAPI = async (data) => {
  const { formValues } = data;

  try {
    const response = await axios.post(`${baseURL}newsletter/`, {
      formValues,
    });

    if (response.status === 201) {
      return response.data;
    } else if (response.status === 400) {
      const errors = response.data.errors;
      return new Error(errors.join(", "));
    } else {
      throw new Error(
        `Une erreur réseau s'est produite. Code d'erreur : ${response.status}`
      );
    }
  } catch (error) {
    throw error;
  }
};

export default newsletterAPI;
