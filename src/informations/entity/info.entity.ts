import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Information')
export class Information {
    @PrimaryColumn()
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    address: string
    // password: string

    @Column()
    profile: string
    // role: string


}

