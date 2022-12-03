export class Alumnos {
    id: number;
    name:string;
    lastname: string;
    score: number;
    constructor(
        id: number,
        name: string,
        lastname: string,
        score: number,
    ){
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.score = score;
    }
    
}