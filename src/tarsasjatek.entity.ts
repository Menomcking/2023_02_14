import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
    export class Tarsasjatek {
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        nev: string;

        @Column()
        kiadasiDatum: Date;
    }