import React from "react";

const datos = [
    {
        id:1,
        tiempa:1252,
        movida:"L 2U 2R F 2D L B D 2B 2F R' 2B R 2D 2R 2L U L B' 2L"
    },
    {
        id:2,
        tiempa:14552,
        movida:"R 2U L D R 2F U' B 2D 2R F D' 2R 2F 2B 2L 2R 2F B' 2L"
    },
    {
        id:3,
        tiempa:12932,
        movida:"F U' L 2R F D 2U 2R 2U B' L' 2R B' U' B' 2U D 2B 2F D"
    },
    {
        id:4,
        tiempa:16352,
        movida:"L 2U 2R F 2D L B D 2B 2F R' 2B R 2D 2R 2L U L B' 2L"
    },
    {
        id:5,
        tiempa:1225552,
        movida:"L' F 2R F R' 2B F' R' 2D 2R 2D F U B' L F' U F R' F",
    }
];
function useUsarDatos(){
    return {datos}
}
export{useUsarDatos}