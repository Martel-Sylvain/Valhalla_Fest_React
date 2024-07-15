import React from 'react'
import RowsArray from './RowsArray'
import { bandsData } from '../../assets/assets'


//on importe RowsArray pour la définition des lignes
//on importe le tableau bandsData créé dans assets.js pour récupérer les infos sur les groupes


//on créé un tableau avec les différentes heures choisies, il sera utilisé pour générer les lignes
const hours = [
    "14h00", "15h00", "16h00", "17h00", "18h00", "19h00", "20h00", "21h00", "22h00", "23h00", "00h00", "01h00"
]


//on défini le composant DaysArray qui prend day en props.

const DaysArray = ({ day }) => {

    //on filtre le tableau bandsData pour ne garder que ceux qui passent le jour (day) spécifié cela créé un nouveau tableau dans bandsForDay avec seulement les band qui passe le day spécifié
    const bandsForDay = bandsData.filter(band => band.day === day);

    //prend une heure et une scène en arguments pour retourner le groupe qui correspond à cette heure et cette scène
    //band for day contient les informations de groupes pour le jour day spécifique
    //et on cherche dans ce nouveau tableau
    //par groupe band défini on va chercher la correspondance dans le tableau avec hour et stagen, si les 2 sont vraies, la fonction s'arrête et retourne le résultat (on a trouvé pour un jour donné, une heure et un stage, le groupe qui doit passer)
    const getBandForHourAndStage = (hour, stage) => {
        return bandsForDay.find(band => band.hour === hour && band.stage === stage)
    };


    return (
        <table className="min-w-full text-white border-collapse">
            <thead>
                <tr>
                    <th className="font-fontTitle text-[2vw] border border-gray-700 px-[3vw] py-2">Time</th>
                    <th className="font-fontTitle text-[2vw] border border-gray-700 px-[3vw] py-2">Thor Stage</th>
                    <th className="font-fontTitle text-[2vw] border border-gray-700 px-[3vw] py-2">Odin Stage</th>
                    <th className="font-fontTitle text-[2vw] border border-gray-700 px-[3vw] py-2">Loki Stage</th>
                </tr>
            </thead>
            <tbody>
                {/* on boucle sur le tableau hours défini plus tôt avec .map en parcourant chaque heures du tableau.
                .map va créer un nouveau tableau en appliquant une fonction "hour" pour chaque élément.
                hour => va nous permettre de regarder pour chaque heure du tableau hours et de nous restituer un composant RowsArray
                key = hour car chaque heure est unique dans ce cas. key est utilisé par React
                hours = hour forcémment
                thorStage= on appelle la fonction pour vérifier si un groupe est présent sur la scène en question en utilisant getBandForHourAndStage et en lui passant en argument hour et le nom de la scèné.
                
                on obtient à la fin, pour chaque heure du tableau hours, une ligen de tableau avec les groupes en fasse des scènes.
                */}
                {hours.map(hour => (
                    <RowsArray
                        key={hour}
                        hour={hour}
                        thorStage={getBandForHourAndStage(hour, 'Thor Stage')}
                        odinStage={getBandForHourAndStage(hour, 'Odin Stage')}
                        lokiStage={getBandForHourAndStage(hour, 'Loki Stage')}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default DaysArray