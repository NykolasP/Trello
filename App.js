import React, { useState } from 'react';
import { TrelloContext } from './context';
import { ConnectRouter } from './router/connectRouter';
import { TrelloRouter } from './router/trelloRouter';
import Accueil from './vues/accueil';

const listes = [{ id:"1", titre: "Tableau_1", content: [
  { id:"1", titretab: "partie_1", contenttab: [
    { id:"1", titreelement: "Element_1", contentelement: "lorem" },
    { id:"2", titreelement: "Element_2", contentelement: "lorem" }] 
  },
  { id:"2", titretab: "partie_2", contenttab: [
    { id:"1", titreelement: "Element_1", contentelement: "lorem" },
    { id:"2", titreelement: "Element_2", contentelement: "lorem" }] 
  }] },
  { id:"2", titre: "Tableau_2", content: [
    { titretab: "partie_1", contenttab: [
      { titreelement: "Element_1", contentelement: "lorem" },
      { titreelement: "Element_2", contentelement: "lorem" }] 
    },
    { titretab: "partie_2", contenttab: [
      { titreelement: "Element_1", contentelement: "lorem" },
      { titreelement: "Element_2", contentelement: "lorem" }] 
    }] }]

export default function App() {
  const [user, setUser] = useState({});
  const [tabEnCours, setTabEnCours] = useState("");
  const [listEnCours, setListEnCours] = useState("");
  const [ElementEnCours, setElementEnCours] = useState("");
  return (
    <TrelloContext.Provider value={{ user, setUser, tabEnCours, setTabEnCours, listes, listEnCours, setListEnCours, ElementEnCours, setElementEnCours }}>
      {(user.email) ? <TrelloRouter /> : <ConnectRouter />}
    </TrelloContext.Provider>
  );
}