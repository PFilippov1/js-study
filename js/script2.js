



function calculateVolumeAndArea(cubeEdge){
   if (typeof (cubeEdge) !== 'number' || cubeEdge < 0 || !Number.isInteger(cubeEdge))
        return "При вычислении произошла ошибка";

        // square=Math.abs(6*cubeEdge*cubeEdge);
        // volume= Math.abs(cubeEdge*cubeEdge*cubeEdge);
       let square = 6 * cubeEdge * cubeEdge;
       let volume = cubeEdge * cubeEdge * cubeEdge
return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
}
calculateVolumeAndArea(5);
