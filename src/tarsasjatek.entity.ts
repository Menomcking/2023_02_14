import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
    export class Tarsasjatek {
        @PrimaryColumn()
        id: number;

        @Column()
        nev: string;

        @Column()
        kiadasiDatum: Date;
    }