
import { Injectable } from '@angular/core';

@Injectable()
export class BazaresService {

    private bazares:Bazar[]=[
        {
            nombre: "Efanana",
            info: "El proyecto de Efanana comenzó hace aproximadamente un año 8 meses, todo a partir de que la persona a cargo del mismo, empezó a sumergirse y conocer las maravillas que tiene el mundo bazareño. Como la gran mayoría, comenzó a ser una clienta apasionada y muy frecuente dentro de éstos. Fue así, que un día al perder su trabajo, necesitaba una fuente de ingresos, y qué mejor haciéndolo con algo que le encantaba y disfrutaba 🙃. Lo que la motiva a continuar con este proyecto, no es sólo una cosa, sino muchas, pues en este camino ha encontrado grandes amistades, clientas con quien platicar, apapachar y conocer, lo significativo que puede ser para nosotras encontrar una prenda que nos haga sentir felices, bonitas y únicas.",
            img: "assets/img/Efanana.png",
            fb: "Libier E Madrigal",
            insta:"@efananaonline"
          },
          {
            nombre: "Karenina Bazar",
            info:"Karenina Hernández comenzó hace 5 años en el mundo de los bazares en línea , los primeros tres años vendía y compraba en grupos. Hace menos de dos años decidió comenzar un Bazar formal para solventar rescates de perritos callejeros, al paso del tiempo comenzó a amar el trabajo de una bazareña que además le ha permitido conocer a sus mejores amigas .",
            img: "assets/img/KareninaBazar.png",
            fb: "Karenina Hernandez",
            insta:"@Kareninabazar"
          },
          {
            nombre: "Luna Coyotl",
            info: "Entusiasta bazareña, paquera sin vergüenza, Luna Coyotl comenzó cómo un gusto adquirido por recorrer los tianguis de la CDMX con el fin de vestir bonito y barato, años más tarde mutó a un forma de ganarse la vida, día a día, sin tener en mente que bajo ese motivo se escondía una realidad más satisfactoria que se define con una palabra: Resistencia. Resistencia, que nace con la ropa, vivir fuera de las normas establecidas, de trabajar 6 días a la semana, 8 horas al día, para llevarte a ti una alternativa a la moda rápida y consumista. Siempre bajo los mismos preceptos que impulsó en un inicio este oficio: prendas diferentes, bonitas y baratas. Luna Coyotl tiene dos años y medio de resistencia y contando... En un principio la finalidad del bazar era su independencia y su consecuente subsistencia, ahora, no muy lejos de ese objetivo, es lograr llegar a los armarios de gente que ha tomado la decisión consciente de reducir su impacto en la Tierra al darle una segunda vida a las prendas que llegan a sus manos.",
            img: "assets/img/lunacoyotl.png",
            fb: "Luna Coyotl",
            insta: "@lunacoyotlbazar"
          },
          {
            nombre: "Malvestida Bazar",
            info:"Este bazar en línea lleva dos años, comenzó con dos mejores amigas que lo veían como un trabajo pero también como un portavoz para generar un cambio y crear consciencia acerca del consumo y la industria de la moda. Ahora, con la bella Daniela al frente, Malvestida le ha dado la oportunidad de conocer a personas increíbles, de adentrase a un mundo totalmente diferente y al mismo tiempo le ha dado a ella misma la oportunidad de conocer la otra cara de la moneda en cuanto a la industria así como el poder de decidir de que manera quiere contribuir a un cambio.",
            img: "assets/img/malvestidaBazar.png",
            fb: "Malvestida bazar",
            insta:"@malvestidabazar"
          },
          {
            nombre: "Rosas Mexikanas",
            info:"...",
            img: "assets/img/RosasMexikanas.png",
            fb: "Rosas Karen",
            insta: "@"
          }
    ];
 
    constructor(){
        console.log("servicio listo para usar");
    }

    getBazares():Bazar[]{
        return this.bazares
    }

    getBazar(idx:string){
      return this.bazares[idx];
    }

    buscarBazar(texto:string):Bazar[]{

      let bazaresArr:Bazar[] = [];
      texto = texto.toLowerCase();

      for(let i = 0; i < this.bazares.length; i++){
        
        let bazar = this.bazares[i];
        let nombre = bazar.nombre.toLowerCase();

        if (nombre.indexOf(texto)>=0) {
          bazar.idx = i;
          bazaresArr.push(bazar)
        }
      }

      return bazaresArr
    }
}

export interface Bazar{
    nombre:string;
    info:string;
    img:string;
    fb:string;
    insta:string;
    idx?:number;
}
