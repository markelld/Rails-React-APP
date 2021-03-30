import api from './api-config'; 

export const getCocktails = async () => {
  const resp = await api.get('/cocktails'); 
  return resp.data;
} 

export const getOneCocktail = async (id) => {
  const resp = await api.get(`/cocktails/${id}`); 
  return resp.data; 
} 

export const postCocktail = async (cocktailData) => {
  const resp = await api.post('/cocktails', { post: cocktailData }) 
  return resp.data; 
} 

export const putCocktail = async (id, cocktailData) => {
  const resp = await api.put(`/cocktails/${id}`, { cocktail: cocktailData }); 
  return resp.data;
} 

export const destroyCocktail = async (id) => {
  const resp = await api.delete(`/cocktails/${id}`); 
  return resp;
}