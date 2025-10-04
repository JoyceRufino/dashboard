import toast from "react-hot-toast";

export const buscarEndereco = async (cep: string) => {
  try {
    const digits = cep.replace(/\D/g, "");
    if (digits.length !== 8) {
      toast.error("CEP inválido");
      return null;
    }

    const response = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
    const data = await response.json();

    if (data.erro) {
      toast.error("CEP não encontrado");
      return null;
    }

    return data;
  } catch (error) {
    console.error("Erro ao buscar o CEP:", error);
    toast.error("Erro ao buscar o CEP");
    return null;
  }
};
