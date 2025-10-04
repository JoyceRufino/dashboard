import { NavigateFunction } from "react-router-dom";

/**
 * Navega para uma rota substituindo parâmetros dinâmicos
 * @param navigate - função do useNavigate
 * @param pathTemplate - string do path, ex: "/students/:uuid_student"
 * @param params - objeto com os parâmetros a substituir
 */
export const navigateWithParams = (
  navigate: NavigateFunction,
  pathTemplate: string,
  params: Record<string, string | number>
) => {
  let path = pathTemplate;

  // Substitui cada parâmetro no template
  Object.keys(params).forEach((key) => {
    path = path.replace(`:${key}`, String(params[key]));
  });

  navigate(path);
};
