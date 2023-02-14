import { IsDate, IsDefined,IsDateString } from "class-validator";

export default class NewTarsasjatekDto{
    @IsDefined({message: "A társasjáték neve megadása kötelező."})
    nev: string;
    @IsDefined()
    @IsDateString({}, {message: "A dátum formátum használata kötelezőfgerger."})
    kiadasiDatum: string;
}