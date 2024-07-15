import React from 'react'


//c'est un composant qui génère un ligne dans un tableau
//on donne a RowsArray les props hour, thorStage, odinStage, lokiStage
//on défini ensuite une ligne de tableau qui aura:
//-colonne1 : hour, contient la valeur de l'heure
//-colonne2 : si thorsStage est défini non null, on affiche thorStage.name, soit le nom du groupe, sinon on affiche rien. 
//-colonne3 : si odinStage est défini non null, on affiche odinStage.name, soit le nom du groupe, sinon on affiche rien. 
//-colonne4 : si lokiStage est défini non null, on affiche lokiStage.name, soit le nom du groupe, sinon on affiche rien. 


const RowsArray = ({ hour, thorStage, odinStage, lokiStage }) => {
    return (
        <tr>
            <td className="text-whiteV font-fontText text-[1vw] border border-gray-700 px-4 py-2">{hour}</td>
            <td className="text-whiteV font-fontText text-[1vw] hover:text-yellowV transform hover:rotate-[-2deg] hover:scale-125 transition duration-300 border border-gray-700 px-4 py-2">{thorStage ? thorStage.name : ''}</td>
            <td className="text-whiteV font-fontText text-[1vw] hover:text-yellowV transform hover:rotate-[-2deg] hover:scale-125 transition duration-300 border border-gray-700 px-4 py-2">{odinStage ? odinStage.name : ''}</td>
            <td className="text-whiteV font-fontText text-[1vw] hover:text-yellowV transform hover:rotate-[-2deg] hover:scale-125 transition duration-300 border border-gray-700 px-4 py-2">{lokiStage ? lokiStage.name : ''}</td>
        </tr>
    );
};

export default RowsArray